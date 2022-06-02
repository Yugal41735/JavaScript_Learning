// type converison an type coercion

console.log('Welcome to type Conversion!!');
let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));

let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
console.log(date, (typeof date));

let arr = [1,2,3,4,5];
console.log(arr, (typeof arr));
arr = String([2,3,4,5,6]);
console.log(arr.length, (typeof arr));
// length is 9 bcz it takes every char into consideration, for example here it is also including comma as one of the characters, thats why it is 9.

let i = 96;
console.log(i.toString());

let stri = Number("3436");
console.log(stri, typeof stri);
stri = Number('343d4');
console.log(stri, typeof stri);
stri = Number(true);
console.log(stri, typeof stri);
stri = Number([1,2,3,4,5]);
console.log(stri, typeof stri);

let number = Number('34.005');
console.log(number, typeof number);
number = parseInt('34.002');
console.log(number, typeof number);
number = parseFloat('34.009');
console.log(number, typeof number);

console.log(number.toFixed(10), typeof number);

// Type CoERCION


let mystr = "698";
let myNum = 34;

console.log(myNum + mystr);

mystr = Number(mystr);

console.log(myNum + mystr);
