'use strict';

jest.mock('fs');


const reader = require('../index.js');


describe('File Function Module', () => {

  it('when given a bad file, returns an error', done => {
    let files = ['bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    reader.fileFunction(files, (err,data) => {
      expect(err).toBeDefined();
      done();
    });
  });
  
  
  it('reads an array', done => {
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];
    reader.fileFunction(files, (err,data) => {
      expect(err).toBeNull();
      expect(data instanceof Array ).toBeTruthy();
      expect(data.length ).toBe(3);
      done();
    });
  });
  
});

describe('File Html Module', () => {

  it('when given a bad file, returns an error', done => {
    let files = ['bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    reader.fileWriter(files, (err,data) => {
      expect(err).toBeDefined();
      done();
    });
  });
  
  
  it('reads an array', done => {
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];
    reader.fileWriter(files, (err,data) => {
      expect(err).toBeNull();
      expect(data instanceof Array ).toBeTruthy();
      expect(data.length ).toBe(3);
      done();
    });
  });
  
});