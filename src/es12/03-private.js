class usuario{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    #speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`; 
    }

    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age = n;
    }
}

const nuevo = new usuario('Jonny', 30);
console.log(nuevo.uAge);

console.log(nuevo.uAge = 31);
console.log(nuevo.uAge);
