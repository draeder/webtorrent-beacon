let Beacon = require('./beacon')

let filename = 'my file name.txt'
let data = 'my file data'

let opts = {announce: ['ws://localhost:3001']}

let beacon = new Beacon(opts, filename, data, beacon => {
 console.log('Torrent has a new peer:', beacon) // true
})

beacon.infoHash(infoHash => {
 console.log(infoHash)
})

beacon.magnet(magnet => {
 console.log(magnet)
})