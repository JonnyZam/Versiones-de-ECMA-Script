class User {                        // Declarar una Clase

}

//const newUser = new User();         // Instancia de la clase anterior

class user {
    greeting(){                     // Metodo
        return 'Hello';
    }
};

const jonny = new user();           // Creamos la instancia de la Clase user.
console.log(jonny.greeting());      // hacemos un console log de la instancia con el metodo ingresado en la declaracion de la Clase.

const zamor = new user();
console.log(zamor.greeting());      // El mismo metodo de la misma clase con dos instancias distintas.

// Constructor

class user{
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting(){
        return 'Hello';
    }
}

const ortega = new user ();

// this hace refencia al elemento padre que lo contiene "otro metodo"

class Usuario {
    constructor(name){
        this.name = name;
    }
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;              // Importante los parentesis al final de los metodos.
    }
}

const nombre = new Usuario('Jonny');
console.log(nombre.greeting());                             // Importante los parentesis al final de los metodos.


// Setters and Getters

class usuario{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`; 
    }

    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const nuevo = new usuario('Jonny', 30);
console.log(nuevo.uAge);

console.log(nuevo.uAge = 31);
console.log(nuevo.uAge);







































