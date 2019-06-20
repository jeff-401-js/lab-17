'use strict';

const utils = require('./utilsLogger.js');
const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => console.log('Socket in logger.js created!'));


client.on('data', data => {
  console.log('daddad');
  utils.logger(data);
});

client.on('close', () => {
  console.log('Connection to logger socket closed!');
});