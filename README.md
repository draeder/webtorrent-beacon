# Webtorrent-beacon
Create new torrent and receive a beacon when a new peer requests it

##
Webtorrent-beacon instantly sends a beacon when a new peer requests your torrent. It does't care whether or not the new peer has actually connected to the torrent.

This softwar is in alpha state and has not been audited for security. If you find any issues, please submit a PR!


## Install
```js
npm i webtorrent-beacon
```

## Usage

### Example
```js
let Beacon = require('webtorrent-beacon')

let opts = {} // webtorrent options

let filename = 'my file name.txt'
let data = 'my file data'

// Create torrent and wait for a beacon
let beacon = new Beacon(opts, filename, data, beacon => {
 console.log('Torrent has a new peer:', beacon) // true
})

beacon.infoHash(infoHash => {
 console.log(infoHash)
})

beacon.magnet(magnet => {
 console.log(magnet)
})

```

## API
### `opts = {// Webtorrent options}`
Refer to the [webtorrent API](https://webtorrent.io/docs) for options that can be passed in.

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