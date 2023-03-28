// arrays destructuring

let fruits =['Apple', 'Banana'];
let [a, b] = fruits;

console.log(a, b);   // Tambien puede ser console.log(a, fruits[1];);

// Object Destructuring

let user ={userName: 'Jonny', age: 30};
let {userName, age} = user;
console.log(userName, age);             // Tambien puede ser console.log(userName, user.age);