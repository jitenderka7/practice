var student = ['Mani', 'Raj', 'suresh', 'naresh', 'raja'];

const result = (student || []).filter(itm => {
   if(itm === 'suresh') return;
   if(itm === 'naresh') return;
   return itm;
});

console.log(result);