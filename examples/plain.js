'use strict';

var escpos = require('../');

var device = new escpos.USB();

var qr = [0x1D, 0x5A, 0x02, 0x1B, 0x5A, 0x03, 0x4C, 0x06, 0x05, 0x00, 0x02, 0x01, 0x01, 0x0D, 0x0A];
var datamatrix = [0x1D, 0x5A, 0x01, 0x1B, 0x5A, 0x03, 0x08, 0x06, 0x05, 0x00, 0x02, 0x01, 0x01, 0x01, 0x02];

device.open();
device.write(new Buffer(qr));

