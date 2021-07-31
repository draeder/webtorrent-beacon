module.exports = Beacon

const WebTorrent = require('webtorrent')

function Beacon(str, cb){

 let server = new WebTorrent()

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
 
   let client = new WebTorrent()
 
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