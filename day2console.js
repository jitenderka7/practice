// console.log(['a'] + ['b']);

// console.log([]+[]);

// console.log(![]);
// console.log(![] + []);
// console.log(typeof(![] + []));
//false + "" = "false"
var student3 = ['manish', 'rahul'];
// console.log(Array.isArray(a));
// if(student && student.length) {}
// if(student?.length){}
const response = 0;
const  payload = { response };
let payload1 = { response : response };

const studentName =  "Raj!!";
const student = {
    studentName : studentName
}
const student1 = {
    studentName
}
// payload.response && payload.response.length && payload.response.map()
// const response = payload.response; one from this and below
// const { response: rsp } = payload;
const { response: rsp } = payload;
const { response: customerRsp } = customer;
//customerRsp it will be used
// const rsp = payload.response;
const finalResponse = (response || []); // response is coming from line 13
// (response || []) ====> []
// (response || []).map()

