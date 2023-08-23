
const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
console.log(`---------------------------- STEP 1- Value with index------------------------------------`);
arrayNumbers.forEach((currentValue,index,array) => {
    console.log(`Value ${currentValue} Index = ${index}`);
});

console.log(`---------------------------- STEP 2 Positive Numbers-------------------------------------`);

arrayNumbers.forEach((currentValue) => {
    if (currentValue >= 0) {
        console.log(currentValue);
    }
});

console.log(`---------------------------- STEP 3 Negative Numbers-------------------------------------`);
let negativeNumber =[];
arrayNumbers.forEach((currentValue) => {
    if (currentValue < 0) {
       negativeNumber.push(currentValue);
       console.log(negativeNumber);
     }
     } );

     console.log(`---------------------------- STEP 4 Even Numbers-------------------------------------`);
     arrayNumbers.forEach((currentValue) => {
    if (currentValue%2==0) {
        console.log(`Even Numbrs are ${currentValue}`);
    }
});
console.log(`---------------------------- STEP 5 Even Numbers-------------------------------------`);
let sum = 0;
arrayNumbers.forEach((currentValue) => {
    sum+=currentValue;
});
console.log(`Sum of all elements are = ${sum}`);

console.log(`---------------------------- STEP 6 Even Index Numbers-------------------------------------`);
arrayNumbers.forEach((currentValue,index) => {
    if (index%2==0) {
        console.log(currentValue);
    }
});
