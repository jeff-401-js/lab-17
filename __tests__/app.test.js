'use strict';

const app = require('../utilsApp.js');
const logger = require('../utilsLogger.js');

describe('uppercase', () => {
  it('should return a string uppercased', () => {
    let str = 'some test string';
    str = app.upper(str);
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