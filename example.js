let Beacon = require('./beacon')

let beacon = new Beacon('My torrent\'s name and content', b => {
 console.log('My torrent got a new peer:', b)
})