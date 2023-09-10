

const array = [20,11,40,25,37,49,9,90,60,2,19];

sum = 0;

for (const element of array) {
    sum = sum + element;
}
console.log(sum);
console.log('=================Reduce method Way===========================');
const sumarray = array.reduce((runningValue,element) => {
       return runningValue + element;
});
console.log(sumarray);
console.log('================= Multiplication of 5 ===========================');
const multiplication = array.filter((currentValue)=>{
    return currentValue%5==0;
});
console.log(multiplication);
console.log('=================Sum of Multiplication of 5 ===========================');
const multiplicationsum = multiplication.reduce((runningValue,element)=>{
    return runningValue + element;
});
console.log(multiplicationsum);
