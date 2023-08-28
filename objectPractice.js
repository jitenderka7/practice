var customer = {
    name: 'suraj',
    address: 'Delhi-41',
    getAddress: function() {
        console.log('suraj')
    },
    active: true,
    networth: 1222323232.01,
   
    locations: ['Delhi','Mumbai']
};

const showInvoice = true;
const paymentType = 'cash';
if(paymentType !== 'cash') customer.invoiceNo = '121323232';
if(showInvoice) customer.invoiceNo = '121323232';

if(attachAccountDetails)
customer.accountDetails = {
    accountno: '12345654321',
    bankdetails: ''
};
console.log(customer.invoiceNo);

if(showInvoice ) {
    var abc = 1;
    console.log('dljahjd')
}