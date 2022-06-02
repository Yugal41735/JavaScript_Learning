console.log('Loops!!');

// Gnereal Loops - for, whle, do-while
let a = 34;
a += 1;
a++;
console.log("a:" + a);

// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }

let j = 0;
// while (j < 100) {
//     console.log(j);
//     j+= 1;
// }

let k = 0;

// do {
//     console.log(k);
//     if (k === 5) {
//         break;
//     }
//     k+=1;
// } while (k < 10);

do {
    if (k === 5) {
        k+=1;
        continue;
    }
    console.log(k);
    k+=1;
} while (k < 10);

console.log('done!!')

let arr = [2,3,4,5,6,7];

arr.forEach(function(element, index, array){
    console.log(element, index, array);
})

console.log('done!!')


let obj = {
    name: 'Adonis',
    age: 19,
    type: 'Dangerous Programmer',
    os: 'Ubuntu'
}

for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`);
}