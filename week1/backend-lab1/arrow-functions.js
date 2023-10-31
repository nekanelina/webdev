/*
function sayHello() {
  return "Hello, world!";
}
*/

const sayHello = () => "Hello, world!";
console.log(sayHello());

// Regular function
/*
function double(x) {
  return x * 2;
}
*/

const doubleArrow = x => x*2;
console.log(doubleArrow(5));

// Regular function
/*
function add(x, y) {
  return x + y;
}
*/

const addNumber = (x,y) => x+y;
console.log(addNumber(25,25));

// Regular function
/*
const person = {
  name: "Alice",
  sayHi: function() {
      return "Hi, " + this.name + "!";
  }
};
*/

const person = {
  name: "Alice",
  sayHi: () => "Hi, " + person.name 
};

console.log(person.sayHi());

/*
const numbers = [1, 2, 3, 4, 5];

const doubled = [];
numbers.forEach(function(num) {
  doubled.push(num * 2);
});
*/

const numbers = [1, 2, 3, 4, 5];

const doubled = [];
numbers.forEach = ((num) => {
  doubled.push(num * 2);
});

console.log(doubled);