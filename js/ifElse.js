console.log('If Else tutorial');
const age = 18;
const doesDrive = true;
// const vari = 34;

if (age == 19) {
    console.log('Age is 19');
}
else if (age === 65) {
    console.log('Age is 65');
}
else if(age !== 65){
    console.log('Value and type are not matching')
}
else {
    console.log('Age is not 19');
}
// even if it is string is still checking for value, but when we out triple =, it is checking for both value and data type
// Similarly !== is checking whether the value and type is not matching.

console.log(typeof vari);
if(typeof vari !== 'undefined') {
    console.log('vari is defined');
}
else{
    console.log('vari is not defined');
}
// typeOf returns us a string

if (doesDrive && age > 18) {
    console.log('You can drive')
}
else {
    console.log('You cannot drive')
}

console.log(age == 45? 'Age is 45': 'Age is not 45')

switch (age) {
    case 18:
        console.log('You are 18');
        break;
    case 28:
        console.log('You are 28');
        break;
    case 38:
        console.log('You are 38');
        break;

    default:
        console.log('You are alive:)')
        break;
}