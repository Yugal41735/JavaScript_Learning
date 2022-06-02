console.log('Exercise 2!!');

/*

You have to create a div and inject it into the page which contains a heading.

Whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). Save the note into the local storage.

*/

let div = document.createElement('div');
div.id = 'Editable Div';
div.innerText = 'You can click to edit the this text!!';

let body = document.querySelector('.container');

body.appendChild(div);

div.addEventListener('click', function(e){
    let text = prompt('Enter the text u want to enter!!');

    div.innerText = text;

})

div.addEventListener('blur', function(e){
    localStorage.setItem('Edited text', div.innerText);
    console.log(div.innerText)
})

// localStorage.clear()