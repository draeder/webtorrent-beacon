# webtorrent-beacon
Create new torrent and receive a beacon when a new peer arrives

## Install
```js
npm i webtorrent-beacon
```

## Usage
```js
let Beacon = require('./beacon')

let beacon = new Beacon('my filename.txt', 'my sweet data', (beacon) => {
 console.log('Torrent has a new peer:', beacon) // true
})
```