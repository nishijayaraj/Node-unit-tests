
* Supports multiple test files. 

* Place the test files inside the folder named test. Name of the folder must be test as mandated by Mocha. 

* Run the test with npm test after entering this folder.

* Use beforeEach method, if we need to clear the arrays prior to running each test cases. 
     * Refer error.png and success.png for without and with beforeEach() in test1.js.

* Similarly afterEach() can be executed.

* Place test2.js also inside test folder. All files will be picked up automatically on running npm test. 

* Even if import the students.js file is icluded separately in test files, we need to clear the array before running the test case written in test2.js. 
     * Please Refer error  error2 and success2.png
     * This is due to the fact that Student instance is exported and hence it is a singleton. 
     * If what exported were a function, we dont require to perform this step. 
     

