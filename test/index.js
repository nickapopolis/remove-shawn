var removeShawn = require("../");

var shawnArray = ["Nick", "Marcos","Shawn", "Brian", "Tyler"];
console.log("-------------------------------------");
console.log("He's inside of an array!");
console.log(shawnArray);
console.log("Not anymore");
console.log(removeShawn(shawnArray));
console.log("-------------------------------------");

var shawnObject = {
		name1 : "Nick",
		name2 : "Marcos",
		name3 : "Shawn", 
		name4 : "Brian", 
		name5 : "Tyler"
	};

console.log("He's inside of an object!");
console.log(shawnObject);
console.log("Not anymore");
console.log(removeShawn(shawnObject));

console.log("-------------------------------------");
var shawnObject2 = {
		name1 : "Nick",
		name2 : "Marcos",
		name3 : "Brian", 
		shawn : "He's hiding in a parameter", 
		name5 : "Tyler"
	}


console.log("He's a parameter!");
console.log(shawnObject2);
console.log("Not anymore");
console.log(removeShawn(shawnObject2));