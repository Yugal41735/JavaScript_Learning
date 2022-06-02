console.log('Creating and Replacing elements!!');

let element = document.createElement('li');
let text = document.createTextNode('I am a text node');

element.appendChild(text);

//Add a class name

element.className = 'childul';
element.id = 'createdID';
element.setAttribute('title', 'mytitle');
// element.innerHTML = '<b>This is created by Adonis<b>';
// element.innerText = 'This is created by Adonis';

let ul = document.querySelector('ul.this');
ul.appendChild(element);

// console.log(ul);

// console.log(element);


let elems2 = document.createElement('h3');
elems2.id = 'elems2';
elems2.className = 'elems2';

let tnode = document.createTextNode('this is a created node for elem 2');

elems2.appendChild(tnode);

element.replaceWith(elems2);

let myul = document.getElementById('myul');

myul.replaceChild(element, document.getElementById('fui'));

myul.removeChild(document.getElementById('lui'));

let pr = elems2.getAttribute('id');
pr = elems2.hasAttribute('id');
elems2.removeAttribute('id');
elems2.setAttribute('title', 'myelems2tittle')

// console.log(elems2, pr);

//  create a heading element with text as 'Go to codewithharry' and create a tag outside it with href = "https://www.codewithharry.com"

let elem3 = document.createElement('h2');

let tnode1 = document.createTextNode('Go to CodeWithHarry');

elem3.appendChild(tnode1);


let aTag = document.createElement("a");

aTag.setAttribute("href", "https://www.codewithharry.com");

aTag.append(elem3);

ul.appendChild(aTag);