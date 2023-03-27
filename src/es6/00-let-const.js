var lastName = 'Jonny';
lastName = 'Oscar'
console.log(lastName);

let fruit = 'Apple';
fruit = 'Orange';
console.log(fruit);

const animal = 'dog';
animal = 'cat';
console.log(animal);        // Esto aaroja un error puesto que no se pueden cambiar los valor de variables const.

const fruits = ()=>{
    if(true){
        var fruit1 = 'Apple';       // function Scope - Solo se puede llamar mientras este dentro de la funcion.
        let fruit2 = 'Kiwi';        // block Scope - solo puede ser llamada dentro del bloque de codigo donde existe en este caso  un "if"
        const fruit3 = 'Orange';    // block Scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();  // Solo muestra la primera fruta "Apple" ya que es una variable var y es llamada desde la funcion. las otras No.