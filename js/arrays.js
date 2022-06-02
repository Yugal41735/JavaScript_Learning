console.log('Arrays');
let marks = [23,12,34,56,78,90];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 98, [2,3]];
const arr = new Array(21, 123,23, 'Orange');
// console.log(arr);
// console.log(mixed);
// console.log(fruits);
console.log(marks);

// console.log(arr.length);
// console.log(Array.isArray(mixed));

arr[0] = 'Adonis';
// console.log(arr);
let arrElement = arr[0];
// console.log('element: ', arrElement);

let value = marks.indexOf(56);
console.log(value);

// Mutating or modifying array

marks.push(890);
console.log(marks);
marks.unshift(1002);
console.log(marks);
marks.pop();
console.log(marks);
marks.shift();
console.log(marks);

marks.splice(2, 4);
console.log(marks);
marks.reverse()
console.log(marks);

// in case of const we can override the value of that variable only through methods 

let marks2 = [1,2,3,4,5];
marks = marks.concat(marks2);
console.log(marks);

let myObj = {
    name: 'Adonis',
    Age: 21,
    Skills: ['JavaScript', 'Java', 'kotlin'],
    isProgrammer: true,
    'Last Name': 'Seeker'
}

console.log(myObj);
console.log(myObj.Age);
console.log(myObj.Skills);
console.log(myObj['Last Name']);