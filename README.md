# Webtorrent-beacon
Create a new torrent and receive a beacon when a new peer requests it

##
Webtorrent-beacon instantly sends a beacon when a new peer requests it. It does't care whether or not the new peer has actually connected to the torrent.

## Some use-cases
- Count peers interested in your torrent as they arrive. (Do you want to know if a peer is no longer interested? Submit an issue..)
- Instantly send a beacon to another instance (or multiple instances) of Webtorrent-beacon that a peer is interested in the same torrent. This may be useful for decentralizing WebRTC signaling between peers that connect to different tracker servers. [Peerservers](https://github.com/draeder/peerservers) intends to use this library as the signaling method for peers connected to disparate tracker servers.

If you have another use-case, please share with an issue / PR!

## Status
This software is in pre-alpha state and has not been audited for security. If you find any issues, please submit an issue / PR!

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
### `opts = {} // Webtorrent options`
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