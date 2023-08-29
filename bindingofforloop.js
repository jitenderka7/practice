// for(var i =0; i < 5; i++) {
    
//     (function(i) {

//     setTimeout(function() {
//         console.log(i);
//     }, 1000);

//     })(i)//ifee
// }


// for(var i =0; i < 5; i++) {
 
//     setDelay(i);

// }

// function setDelay(i) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }

for(var i =0, j=1; i < 5; i++, j++) {
    setTimeout(function() {
        console.log(parseInt(this));
    }.bind(i), 1000);
}