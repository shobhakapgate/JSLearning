

console.log('------------------Msg as it is--------------------------');
let arrowFun = ()=>{

    console.log("Good Morning, Today is Tuesday");
    
}
arrowFun();
console.log('------------------Multiplication--------------------------');
let multiplication = (num1,num2,num3=1)=>{
  console.log(`Multiplication of given values are = ${num1*num2*num3}`);
}
multiplication(5,5,2);
multiplication(10,4);

console.log('------------------Addition--------------------------');

let addition = (num1,num2,num3,num4,num5)=>{

    let result = num1+num2+num3+num4+num5;
    console.log(`Addition of given number is = ${result}`);
    
    }
addition(100,100,200,349,756);
addition("I am" , "Learning" , "ES6" , "Features", "in depth");


