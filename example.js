let Beacon = require('./beacon')

let filename = 'my original file name'
let data = 'my file\'s data'

let beacon = new Beacon(filename, data, (beacon, infoHash) => {
 console.log('My torrent has a new peer:', beacon, infoHash) // true
})

beacon.infoHash(infoHash => {
 console.log(infoHash)
})

beacon.magnet(magnet => {
 console.log(magnet)
})