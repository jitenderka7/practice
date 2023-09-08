var count = [1,2,3,4];
// parseInt('0') === 0
const result = (count || []).map((itm, indx) => {
    if(indx !== 0) 
    return itm * 2;
    return undefined;
}).filter(xxx => xxx);

console.log(result);
//1,4,6,8
// let result = [];
// for(let i =0; i < count.length; i++ ) {
//    if(i === 2) continue;
//    result.push(count[i] * 2);
// }

// console.log(result)