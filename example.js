let Beacon = require('./beacon')

let filename = 'my file name.txt'
let data = 'my file data'

let opts = {} // webtorrent options

let beacon = new Beacon(opts, filename, data, beacon => {

 if(beacon){
  console.log('Torrent has a new interested peer:', beacon) // true
 }

 if(!beacon){
  console.log('An interested peer has left')
 }

})

beacon.infoHash(infoHash => {
 console.log(infoHash)
})

beacon.magnet(magnet => {
 console.log(magnet)
})