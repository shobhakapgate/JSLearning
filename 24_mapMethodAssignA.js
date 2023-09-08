console.log('---------------------------Orignal Array---------------------------------');
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log(arrayNumbers);

console.log('---------------------------Add 10 each element---------------------------------');
newArray = arrayNumbers.map((currentValue)=>{
      return currentValue+10;
      
});

console.log(newArray);

console.log('--------------------------Cube of Current Value----------------------------');

cubeOfArray = arrayNumbers.map((currentValue)=>{

      return currentValue*currentValue*currentValue;
});

console.log(cubeOfArray);

console.log('--------------------------Add the indext value in element----------------------------');

addIndexValueArray = arrayNumbers.map((currentValue,index)  =>{

    return currentValue + index;
});

console.log(addIndexValueArray);

