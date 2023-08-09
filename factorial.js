
function factorial(num) {
    let factorial =1;
     for (let i = 1; i <= num; i++) {
       factorial*=i;
       
     }
     return factorial;
  }
  
  console.log(`Factorial of 5 is :${(factorial(5))}`);
  console.log(`Factorial of 7 is :${(factorial(7))}`);
  console.log(`Factorial of 9 is :${(factorial(9))}`);
  console.log(`Factorial of 11 is :${(factorial(11))}`);