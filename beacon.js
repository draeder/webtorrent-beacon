module.exports = Beacon

const crypto = require('crypto')
const WebTorrent = require('webtorrent')
const Discovery = require('torrent-discovery')
const addrToIPPort = require('addr-to-ip-port')
const net = require('net')
const Promise = require('bluebird')

let numPeers = 0
let b = false

function Beacon(name, data, cb){

 let that = this

 let peerId = sha(Math.random().toString())

 let server = new WebTorrent()

 let buf = new Buffer.from(data)
 buf.name = name
 
 server.seed(buf, torrent => {
  // seeding
 })

 this.infoHash = (cb) => {
  server.on('torrent', torrent => {
   cb(torrent.infoHash)
  })
 }

 this.magnet = (cb) => {
  server.on('torrent', torrent => {
   cb(torrent.magnetURI)
  })
 }

 server.on('torrent', torrent => {

  let opts = { infoHash: torrent.infoHash, peerId: peerId, port: 6881, dht: true }

  let discovery = new Discovery(opts)

  let c = 0
  discovery.on('peer', function (peer) {
   const peerAddress = { address: addrToIPPort(peer)[0], port: addrToIPPort(peer)[1] }

   c++
   if(c != 1){
    checkConnection(peerAddress.address, peerAddress.port).then( ()=> {
     console.log(peerAddress)
     cb(true, torrent.infoHash)
    }, err => {
     // connection was unsuccessful
    })
   }

  })
 })
}

function checkConnection(host, port, timeout) {
 return new Promise( (resolve, reject) => {
  timeout = timeout || 10000
  
  let timer = setTimeout( ()=> {
   reject("timeout")
   socket.destroy()
  }, timeout)
  
  let socket = net.createConnection(port, host, ()=> {
   clearTimeout(timer)
   resolve()
   socket.destroy()
  })
  
  socket.on('error', err => {
   clearTimeout(timer)
   reject(err)
  })
 })
}

function sha(string){
 let shasum = crypto.createHash('sha1')
 shasum.update(string)
 
 return shasum.digest('hex')
}