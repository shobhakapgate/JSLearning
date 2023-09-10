

const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];

console.log('----------------------------Sort the array------------------------------------------');
arrayRollNumbers.sort();
console.log(arrayRollNumbers);

console.log('----------------------------Reverse the array------------------------------------------');
arrayRollNumbers.reverse();
console.log(arrayRollNumbers); 

console.log('----------------------------Sort the array using custome logic------------------------------------------');

arrayRollNumbers.sort( (n1, n2) => { 
    return n1>n2 ? 1 : -1;
} );
console.log(arrayRollNumbers);

console.log('----------------------------Reverse the array using custome logic------------------------------------------');
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);

console.log('----------------------------Largest No from Array------------------------------------------');
arrayRollNumbers.sort((n1,n2)=>{
    return n1>n2 ? 1: -1;
})
const LargestNumber = arrayRollNumbers[arrayRollNumbers.length-1];
console.log(`Largest no from array is :${LargestNumber}`);

console.log('----------------------------Samalest  No from Array------------------------------------------');
arrayRollNumbers.sort((n1,n2)=>{
    return n1 < n2 ? 1: 0;
})
const smallestNumber = arrayRollNumbers[0];
console.log(`Smallest no from array is :${smallestNumber}`);

console.log('----------------------------Reemove Duplicate No from Array------------------------------------------');

const duplicate = [];
for (const element of arrayRollNumbers) {
    if (!duplicate.includes(element)) {
            duplicate.push(element)
    }
}
console.log(`This is the duplicate element in array is : ${duplicate}`);

