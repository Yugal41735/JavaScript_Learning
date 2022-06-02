const name = "Adonis";
const greeting = "Good Morning!!";
console.log(greeting + " " + name);

let html;
html = '<h1> this is heading </h1>' + '<p> this is my para. </p>'

html = html.concat("This", "str1");
console.log(html);

console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);

console.log(html[1]);
console.log(html.indexOf('this'));
console.log(html.indexOf('hello'));
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(10));
console.log(html.endsWith('str1'));
console.log(html.includes('head'));
console.log(html.substring(0,5));
console.log(html.slice(0,8));
console.log(html.slice(-10));
console.log(html.split(' '));
console.log(html.replace('this', 'hello'));

let fruit1 = 'Mango\'';
let fruit2 = 'Orange';
let myHtml = `Hello ${name}
              <h1> This is "my" heading </h1>
              <p> You like ${fruit1} and ${fruit2}
               `;

document.body.innerHTML = myHtml;