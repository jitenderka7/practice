const mainArray = [
    {a: 1, b: 2}, 
    {a: 3, b: 4}, 
    {a: 5, b: 7} 
];

const reslt = (mainArray || []).reduce((acc,itm) => {
    return {
        a : (acc.a || 0) + itm.a,
        b : (acc.b || 0) + itm.b,
    }
}, {});

console.log(reslt);