

const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];

const newArray = arrayNumbers.filter((numbr)=>{
    return numbr > 40;
});

console.log(newArray);

console.log('--------------------EVEN NO-------------------------');

const evenNumber = arrayNumbers.filter((numbers)=>{
            return numbers%2==0;
});
console.log(evenNumber);

console.log('--------------------ODD NO-------------------------');

const oddNumber = arrayNumbers.filter((numbers)=>{
            return numbers%2==1;
});
console.log(oddNumber);

console.log('--------------------Multiple of 5-------------------------');

const multiplicationNumer = arrayNumbers.filter((currentValue)=>{
    return currentValue%5==0;
});
console.log(multiplicationNumer);

console.log('--------------------20 to 50 Between Numbers-------------------------');

const betweenNumber = arrayNumbers.filter((numbers)=>{
    return numbers > 20 && numbers < 50;
});
console.log(betweenNumber);