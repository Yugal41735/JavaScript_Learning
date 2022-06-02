// primitive data types

// String

let name = 'Yugal';
console.log("my name is " + name);
console.log("Data Type is " + (typeof name));

// Numbers

let marks = 34;
console.log("Data Type is " + (typeof marks));

// Boolean

let isDriver = true;
console.log("Data Type is " + (typeof isDriver));

// Null

let nullVar = null;
console.log("Data Type is " + (typeof nullVar));

// Undefined

let undef = undefined;
console.log("Data Type is " + (typeof undef));

// Referrence Data Types

// Arrays

let arr1 = [2,4,5,2,3, false, "sTRING"];
console.log("Data Type is " + (typeof arr1));

// Object Literals

let stMarks = {
    yugal: 34,
    Adonis: 45,
    Deeshaw: 89
}
console.log(stMarks);
console.log("Data Type is " + (typeof stMarks));

function findName(params) {
    
}

console.log("Data Type is " + (typeof findName));

let date = new Date();
console.log("Data Type is " + (typeof date));
