var customer = {
    name: 'Suresh',
    age: 24,
    helper: 'asas',
    getName: function() {
        console.log(this.name);
        console.log(this.helper);
    },
    getAge: function() {
        console.log(this.age);
    }  
}
name = 'Raj';

var cust = {
    name: 'Rajesh',
    age: 54
};
var newCustomer = customer.getName; // (this) is bind to globalscope
newCustomer();


var newCustomerCust = customer.getName.bind(cust); // (this) is bind to cust object
newCustomerCust();

var newCustomerSelf = customer.getName.bind(customer); // (this) is bind to customer object
newCustomerSelf();