# estimote-sticker-tracking
Basic web UI and node.js app for tracking [Estimote](http://estimote.com) nearables bluetooth stickers.

![](https://raw.githubusercontent.com/dermike/estimote-sticker-tracking/master/screenshot/screenshot.jpg)

### Install
Linux needs these dependencies for Bluetooth:

```sh
sudo apt-get install bluetooth bluez-utils libbluetooth-dev
```

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

Status updates can be slow, so added a seconds counter to display how long ago the UI was updated.