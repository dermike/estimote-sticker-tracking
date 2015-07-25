var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 1122 }),
    noble = require('noble'),
    EstimoteSticker = require('./estimote-stickers'),
    scanFor = '',
    _ws = null;


wss.on('connection', function connection(ws) {
  _ws = ws;
  ws.on('message', function incoming(message) {
    var data = JSON.parse(message);
    scanFor = data.id;
    console.log('Scanning for ' + data.id);
  });
});

noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    noble.startScanning([], true);
  } else {
    noble.stopScanning();
  }
});

noble.on('scanStart', function() {
  console.log('Scan started...');
  console.log();
});

noble.on('scanStop', function() {
  console.log('Scan stopped...');
  console.log();
});

noble.on('discover', function(peripheral) {
  var sticker = EstimoteSticker(peripheral);
  if (sticker && sticker.id == scanFor) {
    try {
      _ws.send(JSON.stringify(sticker));
    } catch(e) {
      console.log(e);
    }
  }
});