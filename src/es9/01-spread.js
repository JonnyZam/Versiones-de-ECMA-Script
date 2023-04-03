
const user = {userName: 'Jonny', age: 31, country: 'CL'};

const {userName, ...values} = user;

console.log(userName);
console.log(values);