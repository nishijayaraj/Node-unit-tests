'use strict'
const student = require('./../students'),
      chai = require('chai'),
      expect = chai.expect;

chai.should();

describe('should add a student to the array',() => {

      it('should return the list of students including the newly added one',() => {
           /**
             This test would fail as it comapres two array object which are having diffrent memory locations
             So should.deep.equal needs to be used in these cases.
           */

           //student.addStudent('ram').should.equal(['ram']);  
            student.addStudent('ram').should.deep.equal(['ram']);

      });

});

