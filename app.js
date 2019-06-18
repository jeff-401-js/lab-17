'use strict';

/**
 * app module
 * @module app
 */

const fs = require('fs');

const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => console.log('Socket in app.js created!'));

/**
 * alterFile
   * @param {object} file - file to be altered
   * @desc alterFile function
   */

const alterFile = (file) => {
  readFile(file)
    .then(data => {
      writeFile(file, upper(data));
    });
};

/**
 * readFile
   * @param {object} file - file to be read
   * @desc readFile function
   */

function readFile(file){
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if(err) { 
        event.emit('error', 'readfile error', `${err}`);
      }
      event.emit('log', 'readfile', `${file} read`);
      resolve(data.toString());

    });
  });
}

/**
 * uppercase
   * @param {object} data - data to be uppercased
   * @desc uppercase function
   */
function upper(data){
  event.emit('log', 'uppercase', `${data} uppercased`);
  return data.toUpperCase();
}

/**
 * writeFile
   * @param {object} file - file be written
   * @param {object} text - to be transformed
   * @desc writeFile function
   */

function writeFile(file, text){
  return new Promise((resolve, reject) => {
    fs.writeFile(file, Buffer.from(text), (err, data) => {
      if(err) { 
        event.emit('error', 'writefile error', `${err}`); 
      }
      event.emit('log', 'writefile', `${file} saved`);
    });
  });
}

let file = process.argv.slice(2).shift();
alterFile(file);

module.exports = readFile, writeFile, upper;