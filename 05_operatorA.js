console.log('................STEP 1 ........................');

function squareOfWordLength(arg1){

    console.log('Word is :', arg1 );
    
}
squareOfWordLength("JavaScript");
console.log('................STEP 1.1 ........................');
var word = "JavaScript";
var length = word.length;
console.log("Word length is : ",length);

console.log('................STEP 1.2 ........................');
var squre = length*length;
console.log('Squre of word is :', squre);
console.log('................STEP 1.3 ........................');
squareOfWordLength('JavaScript');
squareOfWordLength('Google Chrome');
squareOfWordLength('Developer Smart');
console.log('................STEP 2 ........................');
var string = function(){
    console.log(" I am Anguler Developer ");
}
string();
console.log('................STEP 2.1 ........................');
var mainString = "I am Anguler Developer";
var words = mainString.split(" ");
var strLength = mainString.length;
var devide = length/4;
console.log('String length is : ',strLength,  "and String", words," Devisible result is: ",devide);
console.log('................STEP 2.2 ........................');
var strMultily = length*4;
console.log('Multiply the string length to words result is :',strLength);
