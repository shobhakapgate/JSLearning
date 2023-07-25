
console.log('................STEP 1.........................');

var greaterNumber = function(num1,num2){
num1>=num2;
var greaterNumber = num1>= num2 ? "true" : "false";
console.log("is the num1 value greater than num2 : ", greaterNumber);
}
greaterNumber(800,899);
console.log('................STEP 1.2.........................');
greaterNumber(10,-10);
console.log('................STEP 2.........................');
var evenOdd = function(num){
    var evenOrOdd = num%2==0 ? "True"  :"False";
    console.log('Please check given no is odd or even :',evenOrOdd);
}
evenOdd(29);
evenOdd(44);
evenOdd(101);
evenOdd(0);
console.log('................STEP 3.........................');

var evenOrOddWord = function(num1){
var wordlength = num1.length;
console.log(" Please Display word length is :", wordlength);
var wordEvenOrOdd = wordlength%2==0 ? "EVEN" : "ODD";
console.log('Please check word length is Even Or Odd :', wordEvenOrOdd);
}
evenOrOddWord("JavaScript");
evenOrOddWord("Developer");
evenOrOddWord("Google");





