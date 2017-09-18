'use strict'
const chai = require('chai');
const expect = chai.expect;

chai.should();

function returnName(name){
      return name;
}

function addNumberToItself(num){
      return (num+num) ;
}

function isEven(num){
      return (num%2) == 0;
}

describe('1st unit test',()=>{
      it('returns the name passed to the function',()=>{
           returnName('ram').should.equal('ram');
      });

});

describe('Math operations',()=>{
      
      it('returns a value after adding the number, which is fed as parameter, to itself ',()=>{
           return addNumberToItself(10).should.equal(20);
      });

      it('returns true if the number is even',()=>{
           return isEven(4).should.equal(true);
       });

});
