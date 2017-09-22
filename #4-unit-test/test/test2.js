'use strict'
const student = require('./../students'),
      chai = require('chai'),
      expect = chai.expect;

chai.should();

describe('2: should add a student to the array',() => {
      
      beforeEach(()=>{
          student.group = []; 
      });
      
      it('2-: should return the name of currently added student jay',() => {
                      student.addStudent('jai').should.deep.equal(['jai']);
      });


});

