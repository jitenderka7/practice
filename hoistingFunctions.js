console.log("Multiply : " , add(2,5));
// var =====> addition = undefined;
//Below line will nt work and give typeerror addition is not a function
// console.log("Multiply : Second:  " , addition(2,5));
function add(a,b) {
  return a * b;
}

var addition = (a,b) => {
    return a * b;
}
console.log("Multiply : Second:  " , addition(2,5));
// console log
// console log
// [Function add scope ::: a,b]{}
// addition = undefined;
// var addition scope::: 7th line equal/after ::: [Function addition] {a,b}