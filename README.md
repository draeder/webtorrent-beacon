# webtorrent-beacon
Get a beacon when your webtorrent has a new peer

##
Creates a new webtorrent with your file name and data and sends a beacon whenever a new peer arrives on your torrent.

## Install
```js
npm i webtorrent-beacon
```

## Usage
```js
let Beacon = require('webtorrent-beacon')

let beacon = new Beacon('my filename.txt', 'my data', b => {
 console.log('My torrent has a new peer:', b)
})
```