* Update package.json file to automate the commands
    * "scripts": {
    "test": "mocha"
  }
    

* This would the requre the user only run ** npm test ** which would simulate mocha test.js.

* The file containing the code to be tested, is referenced using require() in the test file.

* The test file is placed inside a folder named test. (Mocha always looks for files or folders named test)

* Run the test with npm test after entering this folder.

* Use of should.deep.equal instead of should.equals when we need to comapre two object such as arrays
   * student.addStudent('ram').should.equal(['ram']); would fail (Ref error.png in screen-shots folder) as the memory location of these two arrays are different..
   * student.addStudent('ram').should.deep.equal(['ram']); would pass the test as its comapres pnly the values. (ref success.png )
