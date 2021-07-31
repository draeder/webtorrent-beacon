let Beacon = require('./beacon')

let beacon = new Beacon('my filename.txt', 'my sweet data', b => {
 console.log('My torrent has a new peer:', b)
})