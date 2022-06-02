console.log('Local and Session Storage!!');

localStorage.setItem('Name', 'Adonis');
localStorage.setItem('Name 2', 'Deeshaw');

// console.log(typeof localStorage);
// console.log(localStorage.Name);

// To clear local storage
// localStorage.clear(); 

localStorage.removeItem('Name');

let name = localStorage.getItem('Name');
// name = localStorage.getItem('Name 2');
// console.log(name);

let impArray = ['Flash', 'Iron Man', 'Dark Knight'];

// localStorage.setItem('Heores', impArray); Even though this is array but the value will be stored as a string 
// So to store it in the form of array

localStorage.setItem('Heroes', JSON.stringify(impArray));

// name = localStorage.getItem('Heroes'); still this will print string
name = JSON.parse(localStorage.getItem('Heroes'));
// console.log(name);

sessionStorage.setItem('sessionName', 'Adonis');
sessionStorage.setItem('sessionName 2', 'Deeshaw');