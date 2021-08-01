# webtorrent-beacon
Create new torrent and receive a beacon when a new peer requests it

## Install
```js
npm i webtorrent-beacon
```

## Usage
```js
let Beacon = require('webtorrent-beacon')

// Wait for a beacon
let beacon = new Beacon('my filename.txt', 'my file data', (beacon) => {
 console.log('Torrent has a new peer:', beacon) // true
})
```
## API
### `beacon.infoHash(callback)`
Returns the infohash of the torrent created by webtorrent-beacon
```js
beacon.infoHash(infoHash => {
 console.log(infoHash)
})
```
### `beacon.magnet(callback)`
Returns the magnet URI of the torrent created by webtorrent-beacon
```js
beacon.magnet(magnet => {
 console.log(magnet)
})
```

## Todo
- Add support for monitoring beacons on torrents not created by this library