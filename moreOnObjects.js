var customer = {
    name: 'Manoj',
    address: 'Delhi-41',
    active: true,
    networth: 1222323232.01,
    accountno: 23242432,
    invoiceNo: 23245678654321,
    name:'Salman'
};
customer['#name'] = 'kajhjahd';
var customerKeys = Object.values(customer);
var customerValues = Object.keys(customer);

console.log(customerKeys);
console.log(customerValues);
console.log(customer.name); //work fine
// console.log(customer.#name); //SyntaxError: Private field '#name' must be declared in an enclosing class
