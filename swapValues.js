//swap values whithout using a third variable

let a = 5;
let b = 10;
const obj = { c: 5, d: 10 };

[a, b] = [b, a];

let { c, d } = obj;

console.log(a, b, c, d);

//different way to swap values not creating a third variable
let x = 5;
let y = 10;
x = x + y;
y = x - y;
x = x - y;
console.log(x, y);
