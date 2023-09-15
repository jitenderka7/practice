// function getFinal() {
//     console.log('last');
// }

// async function add(a,b, cb) {
//     console.log(a + b);
//     cb(getFinal);
// }

// const res = '=== response after';


// const a = add(2, 3, function getResponse(cb) {
//     console.log('after call', res);
//     cb(function(addTaxes) {
//             addTaxes(function(addVAT) {
//                 addVAT(function(totalSum) {
//                     totalSum();
//                 });
//             });
//     });
// });
// // console.log(a);
// //callback hell

// add(2,3, getFinal);

// add(2,3).then(res => {
//     console.log(res);
//     sum();
//     console.log('')
//     getResponse().then(cbResponse => {
//         console.log(cbResponse);
//         addTaxes().then((taxResponse) => {
//             console.log(taxResponse)
//             addVAT().then((resp) => {
//                 console.log(resp);
//                 totalSum();
//             })
//         })
//     }).catch(err => console.error(err));
// });

// function addTaxes() {
//     return new Promise(resolve, reject => {
//         resolver(res);
//     })
// }
// //promise==> promise hell
// async function getResponse() {
// }
// function addVAT() {}
// const resp = await add(2,3);  //12 sec
// const resTaxes = await addTaxes(); //10sec
// const resVAT = await addVAT();
// await getResponse(resp);
// totalSum();

// const [resp, respTaxes] = await Promise.all([add(2,3), addTaxes()]);

// let resp = add(2,3);  //12 sec
// const resTaxes = await addTaxes();
// resp = await resp;
// const resVAT = await addVAT();
const quantity = 12;
async function getProducts(quantity) {
  quantity * innerHeight;
    const response = await fetch('https://dummyjson.com/products/1')
    // .then(res => res.json())
    // .then(json => console.log(json));
    const finalResponse = await response.json();

    console.log(finalResponse);
}
getProducts();