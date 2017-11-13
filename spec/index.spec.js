const path = require('path');
const expect = require('chai').expect;

let _ = require(path.join(__dirname, '..', './index.js'));

describe('Basic setup test', function () {
  'use strict';

  it('is an object', function () {
    expect(_).to.be.an('object');
  });
});

describe('Identity function', function () {
  'use strict';

  it('exists', function () {
    expect(_.identity).to.be.an('function');
  });

  it('returns value passed', function () {
    expect(_.identity(5)).to.equal(5);
    expect(_.identity('this String')).to.equal('this String');
    expect(_.identity([1, 2, 3, 4])).to.eql([1, 2, 3, 4]);
    expect(_.identity({ 'field1': 1, 'field2': 2 })).to.eql({ 'field1': 1, 'field2': 2 });
  });
});

describe('First function', function () {
  'use strict';

  it('exists', function () {
    expect(_.first).to.be.an('function');
  });

  it('returns expected subarray', function () {
    expect(_.first([1, 2, 3, 4])).to.eql([1]);
    expect(_.first([1, 2, 3, 4], 2)).to.eql([1, 2]);
    expect(_.first('works for strings', 5)).to.eql('works');
  });

  it('handles incorrect inputs', function () {
    expect(_.first([])).to.equal(undefined);
    expect(_.first([1, 2, 3, 4], 0)).to.equal(undefined);
    expect(_.first(5)).to.equal(undefined);
  });

});