console.log('Hello world');
// Variables in JS
// var, let, const
var name = 'Yugal';
// `bro's `, "hi", 'hi
var channel;
var marks = 43;
marks = 2;
// channel = 'FreeCodeCamp';
console.log(name, channel, marks);

// Rules for creating JS variables

/*
1. cannot start with numbers
2. can start with letter, number, _ or $
3. Are case senstive
*/

var city = 'Jaipur';
// in place of this we can also write $city or _city, but we should avoid writing them, bcz we would use them oops in JS.
console.log(city);

const ownersname = 'Arazab';
// ownersname = 'Adonis'; // cannot do this [gives error]
console.log(ownersname);
// also in case of const we have to declare and initialise at the same time we cannot declare it before and initialise it afterwards

// var -> global level scope; 
// let -> block level scope

{
    let city = 'Rampur';
    // For example if let was not here so instead of overiding the local city variable it would have override the global city variable 
    city = 'Kolkata';
    console.log(city);
    // Which means if we remove let then output of both city in and out of the block would be same
}
console.log(city);

const arr1 = [12,34,54,21,6];
arr1.push(32); // would add a element to the array
console.log(arr1);

/* Most common programming case types:

1. camelCase
2. kebab-case
3. snake_case
4. PascalCase

*/