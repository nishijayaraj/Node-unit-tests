'use strict'
const chai = require('chai');
const expect = chai.expect;

chai.should();

function returnName(name){
      return name;
}

describe('ist unit test',()=>{
      it('returns the name passed to the function',()=>{
           returnName('ram').should.equal('ram');
      });

});
