function add(num1, num2, ...num ){
    var sum = 0;
   for (let index = 0; index < num.length; index++) {
    sum += num[index];
   }
   console.log(`Num1 = ${num1}, Num2 = ${num2}`);
   console.log(num);
   let result = + sum;
   console.log(`Total addition of Arrary = ${result}`);
   }
add(5, 6);
add(9, 5, 6);
add(78, 90, 51, 68);
add(89, 90, 45,78, 90, 51, 68);