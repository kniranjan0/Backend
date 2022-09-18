

const sum = (a,b) => console.log(a+b);

const sub = (a,b) => console.log(a-b);

const mul = (a,b) => console.log(a*b);

const div = (a,b) => console.log(a/b);

const sin = (num) => console.log(Math.sin(num))

const cos = (num) => console.log(Math.cos(num))

const tan = (num) => console.log(Math.tan(num));



// module.exports = sum;
module.exports = {
    sum,
    sub,
    mul,
    div,
    sin,
    cos,
    tan,

}