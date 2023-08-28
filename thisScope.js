var customer = {
    name: 'Manoj',
    address: 'Delhi-41',
    getAddress: (a) => {
        console.log(this.name + a);
        //not allowed 
    }
}
//lexicalscope
console.log(customer.getAddress(' is good boy'));

var customer = {
    name: 'Manoj',
    address: 'Delhi-41',
    getAddress: function( a) {
        console.log(this.name + a);
        //allowed
    }
}
console.log(customer.getAddress(' is good boy'));