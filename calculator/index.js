// const sum = require("./other_file")

// sum(2+3)


const x = require("./other_file")
// x.cos(4);
// x.sin(19);
// x.sum(2,4)

const  { randomInt } = require('crypto');

const number = randomInt(0,10);
// console.log(number);


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  }); 
  
  readline.question('enter hare ', (str) => {
      let [fun,a,b] = str.split(" ")
      a= Number(a)
      b= Number(b)
  

    if(fun == "add")
        x.sum(a, b)
    else if(fun == "sub"){
        x.sub(a,b)
     }   
     else if(fun == "mul"){
        x.mul(a,b)
     } 
     else if(fun == "div"){
        x.div(a,b)
     } 
    readline.close();
  });