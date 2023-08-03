let mySet = new Set();
mySet.add(2);
mySet.add(4);
mySet.add(6);
mySet.add(7);
console.log(mySet);

mySet.add(4);
console.log(mySet);

let isAvailable = mySet.has(6)
console.log(isAvailable);

let is9Available = mySet.has(9)
console.log(is9Available);

console.log(`Set size is ${mySet.size}`);

mySet.delete(4);
console.log(mySet);

// mySet.clear();
for (const element of mySet) {
    console.log(element);
}

let array1 = [4, 5, 4, 5, 8, 5];
let setOfNumbers = new Set();
for (const value of array) {
    setOfNumbers.add(value);
}
console.log(array);
console.log(setOfNumbers);

console.log(`Removing duplicate elements from array using spread operator`);
let arrayNew = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8];
arrayNew = [...new Set(arrayNew)];
console.log(arrayNew);
// console.log(newSet);
    console.log(element);
console.log(`----------- Array traversing in reverse order -----------`);

for (let index = array.length-1; index >= 0; index--) {
    const element = array[index];
    console.log(element);
}

console.log(`----------- Log even indexed element -----------`);
for (let index = 0; index < array.length; index++) {
    if (index%2==0) {
        const element = array[index];
        console.log(element); 
    }
}

console.log(`Inserting element in the first and last position`);
var array = [10, 20, 30, 50, 10, 80, 20];
array.push(70);
array.push(300, 500);
array.unshift(60);
array.unshift(21, 41, 69);
console.log(array);

console.log(`Remove element in the oth index and last index`);
var array = [10, 20, 30, 50, 10, 80, 20];
array.pop();
array.shift();
console.log(array);

console.log(`Getting the slice from array`);
var array = [10, 20, 30, 50, 10, 80, 20];
console.log(array.slice(3));
console.log(array.slice(1, 4));

console.log(` Removing the array element using splice()`);
var array = [10, 20, 30, 50, 10, 80, 20];
let removedElement = array.splice(4);
console.log(array);
console.log(removedElement);

var array = [10, 20, 30, 50, 10, 80, 20];
let elementRemoved = array.splice(4, 2)
console.log(array);
console.log(elementRemoved);

console.log(` Inserting the array element using splice()`);
var array = [10, 20, 30, 50, 10, 80, 20];
array.splice(3, 0, 100, 200, 300, 600)
console.log(array);

var array = [10, 20, 30, 50, 10, 80, 20];
array.splice(4, 2, 33, 55, 66, 77 );
console.log(array);