// console.log("9" > "11");

// console.log("8" > 11); //coercision

// console.log("" > -3); //0

// console.log("dada" > -1);

// console.log(12 > "11"); 
// console.log(12 > "3"); 

const student = {
    name: 'ram',
    prop: {
        internal: {
            "key": "value"
        }
    }
}
const student1 =  {
    name: 'ram'
}
// var newStudent = student;

// console.log(newStudent)
const student2 = Object.assign(student);
student2.name = 'Raj!!';
// console.log(student2.name);
// lodash.cloneDeep(student);
// const student2 = JSON.parse(JSON.stringify(student));
// _.cloneDeep(student);

// const student3 = Object.create(student);
// // console.log(1 == "1");

// console.log(student3 == student);
console.log(3 + 3 - "4" + 6 + 6);
console.log(3 + "2" - "4" + 6 + 6);
console.log(3 + "man" - "4" + 6 + 6);
// concatenation + 33 - 4 = 29 + 12
// 3 man - 4 // NaN
var sum = undefined;
// sum ? parseInt(sum) : 0
const a = parseInt(sum || '0');
// parseFloat(sum || '0.0'); 
var total = a + 100;
console.log("total is : ", total);