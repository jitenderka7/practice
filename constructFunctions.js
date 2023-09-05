function add(a,b) {
    this.abc = 'manish';
 this.res =  a+b;
} //it can make

var addition = (a,b) => {
    return a + b;
} //it will not be used with new
var a = 10;

console.log(add());
console.log(typeof NaN);
console.log(typeof []);
console.log(typeof {});
console.log(typeof undefined);
console.log(typeof +'0'); // coercision ==> 0
var rollnos = {}; 
// console.log(Array.isArray(rollnos));
//Microsoft(JScript) => javascript
//Javascript case sensitive => yes;
var a = 10;
var A = 20;
// console.log('a', a);
// console.log('A', A);
const res = new add(3,4);
// const result = new addition(3,4);
console.log(res.abc);
// console.log(result);