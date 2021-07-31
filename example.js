let Beacon = require('./beacon')

let beacon = new Beacon('my filename.txt', 'my sweet data', (beacon) => {
 console.log('My torrent has a new peer:', beacon) // true
})