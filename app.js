'use strict';

/**
 * app module
 * @module app
 */


const utils = require('./utilsApp.js');
const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => console.log('Socket in app.js created!'));

/**
 * alterFile
   * @param {object} file - file to be altered
   * @desc alterFile function
   */

const alterFile = (file) => {
  utils.readFile(file)
    .then(data => {
      utils.writeFile(file, utils.upper(data));
    })
    .then(emit => {
      let payload = {
        name: 'saved',
        data: `SAVED: event just happened!`,
      };
      client.write(JSON.stringify(payload));
    })
    .catch(err => {
      let payload = {
        name: 'error',
        data: `ERROR: event just happened!`,
      };
      client.write(JSON.stringify(payload));
    });
};


let file = process.argv.slice(2).shift();
alterFile(file);

