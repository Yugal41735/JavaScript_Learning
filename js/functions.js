console.log('Functions!!!');

// function greet(name, message = 'Hi') {
//     console.log(`Good Morning!! ${name}
//     ${message}`)

//     let msg = 'Hello'

//     return msg;
// }

const myGreet = function (name, message = 'Hi') {
    console.log(`Good Morning!! ${name}
    ${message}`)

    let msg = 'Hello'

    return msg;
}

let name = 'SkillF';
let name2 = 'Adonis';

let val = myGreet(name, 'F**k OFF');
console.log(val);

const myObj = {
    name: "Dark Reso",
    game: function () {
        return "GTA";
    }
}

console.log(myObj.game())

let arr = ['fruits', 'Vegetable', 'furniture'];

arr.forEach(function (element, index, array) {
    console.log(element, index);
})

var i = 234;
console.log(i);

function ui(name) {
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`
}
console.log(ui('Adonis'), i);