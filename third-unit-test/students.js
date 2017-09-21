'use strict'
class Student{
      constructor(){
           this.group =[];
      }
      addStudent(name){
      
           this.group.push(name);
	   return this.group;

      }
}
module.exports = new Student();
