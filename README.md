# estimote-sticker-tracking
Basic web UI and node.js app for tracking [Estimote](http://estimote.com) nearables bluetooth stickers.

![](https://raw.githubusercontent.com/dermike/estimote-sticker-tracking/master/screenshot/screenshot.jpg)

### Install
Linux needs these dependencies for Bluetooth:

```sh
sudo apt-get install bluetooth bluez-utils libbluetooth-dev
```

On a Mac you need [Xcode](https://developer.apple.com/xcode/download/) and its `Command Line Tools` to build the Bluetooth dependencies. You can find this under the menu `Xcode -> Preferences -> Downloads`

Install dependencies:

```sh
npm install
```

Start sticker tracking service with:

```sh
sudo node server.js
```

Note: sudo only needed on Linux

Open `index.html` in your browser and point the websocket connection to where you're running the node app (if not localhost).

### Usage

Add your own sticker id's to `index.html`:

```javascript
myStickers: [
  { id: '866185e4e86f37e0', type: 'bag', color: 'lemon' },
  { id: '0bc17c7295c6990d', type: 'bed', color: 'candy'},
  { id: 'db147379324e531f', type: 'bike', color: 'blueberry' },
  ...
],
```

Status updates can be slow, so added a seconds counter to display how long ago the UI was updated.
