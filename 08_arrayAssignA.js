
const arrayFruits =["Banana","Orange","Apple","Mango","Water Melon" ]
console.log(`Total no of element is : ${arrayFruits}`);

console.log("........................STEP1.....................");
let arrayLength = arrayFruits.length;
let LastElement = arrayFruits[arrayLength - 1];
let arrayFirstElemt = arrayFruits[0];
console.log(`First elemet of array is ${arrayFirstElemt}, Last Element of array is : ${LastElement} `);

console.log("........................STEP2.....................");
arrayFruits.unshift("Papaya")
console.log(arrayFruits);

console.log("........................STEP3.....................");
console.log(arrayFruits);
let removedElement = arrayFruits.splice(4,1);
console.log(removedElement);

console.log("........................STEP4.....................");
arrayFruits.splice(6 , 0 , "Pineapple");
console.log(arrayFruits);

console.log("........................STEP5.....................");
arrayFruits.splice(4,0," Dragon Fruit");
console.log(arrayFruits);

console.log("........................STEP5.....................");
arrayFruits.splice(2,2, "Kiwi");
console.log(arrayFruits);

console.log("........................STEP5.....................");
let arraySlice = arrayFruits.slice(1,4);
console.log(arraySlice);

console.log("........................STEP 6.....................");
console.log(arrayFruits.slice(3));

