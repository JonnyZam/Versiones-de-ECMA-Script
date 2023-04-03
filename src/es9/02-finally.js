
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Hey !');
        } else {
            reject('whoooops !');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally( () => console.log("Finalizado")) // Código final