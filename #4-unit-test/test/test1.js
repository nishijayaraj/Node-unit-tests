'use strict'
const student = require('./../students'),
      chai = require('chai'),
      expect = chai.expect;

chai.should();

describe('should add a student to the array',() => {
     
      beforeEach(()=>{
          student.group = [];              
      });
    

      it('should return the name of currently added student ram',() => {
          
            student.addStudent('ram').should.deep.equal(['ram']);

      });

      it('should return the name of currently added student say',() => {
                      student.addStudent('say').should.deep.equal(['say']);
      });


});

