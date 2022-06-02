console.log('Welcome to Dom and Website!!');

let a = document;
a = document.all;
// a = document.body;
// a = document.forms;
// Array.from(a).forEach(function(element) {
//     console.log(element);    
// })
a = document.links[0];
a = document.links[0].href;
console.log(a);

// Use document.images and document.scripts and print the list of images and scripts on an html page.

let b = document.images;

console.log(b)

Array.from(b).forEach(function(element){
    console.log(element);
});

let c = document.scripts;

// console.log(c)

Array.from(c).forEach(function(element){
    console.log(element);
});