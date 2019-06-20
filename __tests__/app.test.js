'use strict';

const utils = require('../utilsApp.js');
const logger = require('../utilsLogger.js');

jest.mock('fs');

describe('uppercase', () => {
  it('should return a string uppercased', () => {
    let str = 'some test string';
    str = utils.upper(str);
    expect(str).toEqual('SOME TEST STRING');
  });
});

describe('logger function', () => {
  it('should take in a message and console.log it if a save', () => {
    let test = {
      name: 'saved',
      data: `SAVED: event just happened!`,
    };
    let spy = jest.spyOn(console, 'log');
    logger.logger(JSON.stringify(test));
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('should take in a message and console.error it if an error', () => {
    let test = {
      name: 'error',
      data: `SAVED: event just happened!`,
    };
    let spy = jest.spyOn(console, 'error');
    logger.logger(JSON.stringify(test));
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('should take in a message and console.log if neither error or save', () => {
    let test = {
      name: 'test',
      data: `SAVED: event just happened!`,
    };
    let spy = jest.spyOn(console, 'log');
    logger.logger(JSON.stringify(test));
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});


// describe('readFile', () => {
//   it('when given a bad file, returns an error', done => {
//     let files = ['bad.txt'];
//     return utils.readFile(files)
//       .then(err => {
//         expect(err).toBeDefined();
//         done();
//       });
//   });

//   it('when given a good file, returns file data', done => {
//     let files = ['test.txt'];
//     return utils.readFile(files)
//       .then(data => {
//         expect(data).toBeDefined();
//         done();
//       });
//   });
// });

// describe('writeFile', () => {
//   it('when given a bad file, throws error', done => {
//     let files = ['bad.txt'];
//     return utils.writeFile(files)
//       .then(err => {
//         expect(err).toBeDefined();
//         done();
//       });
//   });

//   it('when given a good file, writes', done => {
//     let files = ['test.txt'];
//     return utils.writeFile(files)
//       .then(data => {
//         expect(data).toBeDefined();
//         done();
//       });
//   });
// });