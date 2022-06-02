console.log('wELCOME TO events!!');

// document.getElementById('heading').addEventListener('click', function (e) {
//     let variable = e.target;
//     variable = e.target.className;
//     variable = e.target.classList;
//     variable = e.target.id;
//     variable = Array.from(e.target.classList);
//     variable = e.offsetX;
//     variable = e.offsetY;
//     variable = e.clientX;
//     variable = e.clientY;
//     console.log(variable);
//     console.log('You have clicked the heading');
//     console.log(e);
//     // location.href = '//codewithharry.com';
// })

document.getElementById('heading').addEventListener('mouseover', function (e) {
    let variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = e.target.id;
    variable = Array.from(e.target.classList);
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    console.log(variable);
    console.log('You have clicked the heading');
    // console.log(e);
    // location.href = '//codewithharry.com';
})