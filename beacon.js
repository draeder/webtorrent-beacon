module.exports = beacon

const WebTorrent = require('webtorrent')

function beacon(appName, cb){
 let client = new WebTorrent()

 let buf = new Buffer.from(appName)
 buf.name = appName
 
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