module.exports = beacon

const WebTorrent = require('webtorrent')

function beacon(str, cb){
 let client = new WebTorrent()

 let buf = new Buffer.from(str)
 buf.name = str
 
 client.seed(buf, torrent => {
  // seeding
 })
 
 let numPeers
 let b = false

 client.on('torrent', function (torrent) {
  numPeers = torrent.numPeers

  torrent.on('wire', ()=> {
   b = true
   cb(b)
  })

  let beacon = new WebTorrent()

  beacon.add(torrent.infoHash, torrent => {

   if(numPeers < torrent.numPeers){
    b = true
    cb(b)
   }

   numPeers = torrent.numPeers

   torrent.on('noPeers', function (announceType) {
    console.log('no peers')
   })
  })
 })
}