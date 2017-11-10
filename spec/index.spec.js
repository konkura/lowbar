const path = require('path');
const expect = require('chai').expect;

let _ = require(path.join(__dirname, '..', './index.js'));

describe('_', function () {
  'use strict';

  it('is an object', function () {
    expect(_).to.be.an('object');
  });
});