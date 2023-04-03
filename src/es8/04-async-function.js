
const fnasync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('AsynC !!'), 4000)
            : reject(new Error('Error'));    
    });
}

const anotherFn = async () => {
    const something = await fnasync();
    console.log(something);
    console.log('Hello !');
}

console.log('Before');
anotherFn();
console.log('After');