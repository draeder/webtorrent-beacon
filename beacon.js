module.exports = Beacon

const WebTorrent = require('webtorrent')

let opts = {}

function Beacon(str, cb){

 let server = new WebTorrent(opts)

 let buf = new Buffer.from(str)
 buf.name = str
 
 server.seed(buf, torrent => {
  // seeding
 })
 
 let numPeers
 let b = false

 server.on('torrent', function (torrent) {

  if(torrent.ready){

   numPeers = torrent.numPeers

   torrent.on('wire', ()=> {
    b = true
    cb(b)
   })
 
   let client = new WebTorrent(opts)
 
   client.add(torrent.infoHash, torrent => {
 
    if(torrent.ready){
     if(numPeers < torrent.numPeers){
      b = true
      cb(b)
     }
  
     numPeers = torrent.numPeers

    }
   })

  }
 })

 b = false

}