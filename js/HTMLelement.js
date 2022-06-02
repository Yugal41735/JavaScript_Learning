console.log('Welcome to HTML Elemenets!!');

/*

element Selectors:
1. Single element selector
2. Multi element selctor
*/

// 1. SIngle element slector

let element = document.getElementById('myFirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = 'Adonis is DOPE!!';
element.innerHTML = '<b>Adonis is DOPE!!</b>';
// console.log(element);


let sel = document.querySelector('#myFirst')
sel = document.querySelector('.child')
sel = document.querySelector('b')
sel = document.querySelector('h1')
sel = document.querySelector('div')
sel.style.color = 'green';
// console.log(sel)

// Multi element selector

let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
// console.log(elems[0].getElementsByClassName('child'));

elems = document.getElementsByTagName('div');
console.log(elems);

Array.from(elems).forEach(element => {
    console.log(element)
    element.style.color = 'blue'
});

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color = 'yellow'
}