

const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11]
 let array = [];

console.log('.....................STEP 1...........................');
console.log(arrayNumbers);
let arraylength = arrayNumbers.length;
console.log(`Length of array is : ${arraylength}`);

console.log('.....................STEP 2...........................');
let firstElement = arrayNumbers[0];
let lastElement = arrayNumbers[arraylength - 1 ];
console.log(`First Element is : ${firstElement} and Last Element is : ${lastElement}`);

console.log('.....................STEP 3...........................');
console.log(`Third Last element is : ${arrayNumbers[arraylength - 3]} `);

console.log('.....................Even Numbers...........................');
var count=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (index%2==0){
        const element = arrayNumbers[index];
//console.log(arrayNumber[index]);
count=count+element;
    }
}
    console.log(`Total count of even positioned element is :${count}`);

console.log('.....................Odd Numbers...........................');

var count= arrayNumbers.length;
for (let index = arrayNumbers.length; index >= 0; index = index - 1) {
    const element = arrayNumbers[index];
            const element = arrayNumbers[index];
//console.log(arrayNumber[index]);
count=count-element;
    }

    console.log(`Total count of odd positioned element is :${count}`);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}