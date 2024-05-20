const sum = (a, b) => a+b;
// module.exports.sum = (a, b) => a+b;     ye method bhi hota ya phir sirf exports.sum bhi likh skte par hum exports = 5 aisa kuch 
// nahi kar skte kyuki ye variable consider karega


const mul = (a, b) => a*b;
const g = 9.8;
const pi = 3.14;

let obj = {
    sum: sum,
    mul: mul,
    g: g, 
    pi: pi,
};

module.exports = obj;

// module.exports = "12345";
// module.exports = "Ki hall ne babe";