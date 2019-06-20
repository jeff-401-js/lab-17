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
  it('should take in a message and console.log it', () => {
    let test = {
      name: 'saved',
      data: `SAVED: event just happened!`,
    };
    let spy = jest.spyOn(console, 'log');
    logger.logger(JSON.stringify(test));
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});