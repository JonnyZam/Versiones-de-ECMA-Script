function newUser(name, age, country){
    var name = name || 'Osacar';
    var age = age || 34;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();
newUser('Jonny', 30, 'CL');

function newAdmin(name = 'Osacar', age = 36, country = 'MX'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Jonny', 30, 'CL');


// spread operator

let person = {name:'Jonny', age: 30};
let country = 'CL';

let data = { id: 1, ...person, country};  // ... propagación de objetos.
console.log(data);

// rest

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);

// Ejercicio.


let json1 = {name: 'Mr. Michi', food: 'Pescado'};
let json2 = {age: 12, color: 'Blanco'};

function solution (){
    let jsonX = {...json1, ...json2};
    console.log(jsonX);
}

solution(json1,json2);

// Otra solucion

function solution(
    json1 = {
      name: "Mr. Michi",
      food: "Pescado",
    },
    json2 = {
      age: 12,
      color: "Blanco",
    }
  ) {
    return {...json1, ...json2,};
}

  solution();

























