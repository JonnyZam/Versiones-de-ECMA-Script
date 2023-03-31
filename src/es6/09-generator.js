function* interate(array){
    for(let value of array){
        yield value;
    }
}

const it = interate(['Jonny', 'Carlos', 'Daniel', 'Lloana']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


function* getId(){
    let michiId = 1;
    while (true){
        yield michiId++;
    }
}

const michiId = getId();
console.log(michiId.next());
console.log(michiId.next());
console.log(michiId.next());
console.log(michiId.next());
console.log(michiId.next());
console.log(michiId.next());
console.log(michiId.next());
console.log(michiId.next());