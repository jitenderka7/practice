const numbers = [2,4,7,8];
const fun = (sum, number, index, numbers) => sum * number;
const sum = (numbers || []).reduce(fun);
console.log('Multiply: ' + sum);

//array.reduce(callbackfunction, inititalvalue)

const numbers1 = [{ a:2, b: 3 },{a: 4,b:6},{a: 3, b:6},{a:1, b:9}];
const fun1 = (sum, number, index) => sum + number.a + number.b;
const sum1 = (numbers1 || []).reduce(fun1, 0);
console.log('Sum: ', sum1);