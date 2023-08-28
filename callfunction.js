var customer = {
    name: 'Suresh',
    getName: function() {
        console.log(this.name);
        console.log(this.helper);
    }
}
var cust = {
    name: 'Raj'
}
customer.getName.call(cust); //bind and call function with new object