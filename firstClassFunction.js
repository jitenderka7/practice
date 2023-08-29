var player = function(){}

function student(getStudentName) {
    getStudentName();
}

function getStudentName() {
    console.log('Raja');
}
student(getStudentName);

function employeeClass() {
    return function employeeName() {

    }
}


//First Class Functions