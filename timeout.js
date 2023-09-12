function add (a,b) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
        resolve(a+b);
        }, 2000);
    })
}
console.log('1');
setTimeout(function () {
    console.log(2);
}, 1000);

add(2,2)
.then(res => { 
    console.log('then ===>' +res)
    console.log(3);
    subtract().then(response => {
        minus().then();
    })
})
.catch(err => console.log('err' + err));






