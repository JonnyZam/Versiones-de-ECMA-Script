

const regex = /\b(Motos)+\b/g;

const vehiculos = 'Entre los vechículos podemos encontrar Camiones, Automoviles, Aviones, Motos, Cuatrimotos, etc.'

for (const match of vehiculos.matchAll(regex)){
    console.log(match);
}