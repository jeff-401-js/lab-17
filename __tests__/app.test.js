'use strict';

const app = require('../app.js');
// console.log(app);
// const server = require('../server.js');

describe('uppercase', () => {
  it('should return a string uppercased', () => {
    let str = 'some test string';
    // console.log(app.upper);
    str = app.upper(str);
    expect(str).toEqual('SOME TEST STRING');
  });
});