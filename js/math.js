console.log('Welcome to the MAth module!');

let x = 3;
let y = 6;

let z;

z = x+y;
z = y- x;
z = x*y;
z = y/x;

// Exploring the math object

z = Math;
z = Math.E;
z = Math.PI;
z = Math.round(5.5);
z = Math.ceil(5.3);
z = Math.floor(5.7);
z = Math.abs(-5.7);
z = Math.sqrt(9);
z = Math.pow(2,9);
z = Math.min(2,9, -2, 3,45,56,100, -244,-213);
z = Math.max(2,9, -2, 3,45,56,100, -244,-213);
z = Math.random();
z = 100 * Math.random(); // [gives value btw 0 and 100]
z = 50 + (100 - 50 ) * Math.random(); // [gives a value btw 50 and 100 ]

// IF we want a random number to lie btw 0 and 100
// a = (0,1);
// a * 100 = (0*100, 1*100)
// if we want it to lie btw 10 and 100
// a + 10 *(100-10) = (10 + 0 * (100-10), 10 + 1 * (100 - 90) )
console.log(z);
