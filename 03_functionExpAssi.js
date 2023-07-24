console.log('................... STEP 1.................................');
var square = function( num1){
    var squareResult = num1*num1;
   console.log(`Squre Value of menstioned number is :  ${squareResult}`);
}
square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);

console.log('................... STEP 2..................................');
console.log('Type of Function is  :  ', typeof square);

console.log('................... STEP 3..................................');
var areaOfRect = function(length,width){
    var area = length * width;
    console.log(` Area of rectangle is : ${area}`);
    }
areaOfRect(499,917);

console.log('................... STEP 4..................................');
var swapValue = function( num1,num2){
    console.log('Befor Swap value is Num1 :', num1 , 'Num2 :', num2);
    temp = num1;
    num1 = num2;
    num2 = temp;
    console.log('Befor Swap value is Num1 :', num1 , 'Num2  :', num2);
    }
swapValue(100,200);
console.log('................... STEP 4.B ..................................');
swapValue("Mahi","Raina");
console.log('................... STEP 4.C ..................................');
swapValue(55,77);
console.log('................... STEP 5 ..................................');
var string = function(){
        console.log('Java Script is the most populer language of internet');
        }
string();
var mainString = 'Java Script is the most populer language of internet';
var result = mainString.length;
console.log(`A. Total number of character : ${result} `);

var charAtIndex = mainString.charAt(6);
console.log(`B.  Charter of index 6 is : ${charAtIndex}`);

var charAtIndex2 = mainString.charAt(13);
console.log(`C. Charter of index 11  is : ${charAtIndex2}`);

var firstChar = mainString.charAt(0);
console.log(`D. First character of string is : ${firstChar}`);

var lastChar = mainString.charAt(result-1);
console.log(`E. Last character of string is : ${lastChar}`);

var totalWords = mainString.split(" ");
var words = totalWords.length;
console.log(`F. Total number of words in string : ${words}`);
var squerOfWords = words*words;
console.log(`      Squers of words is ${squerOfWords}`);

var thirdLastChar = mainString.charAt(result-3);
console.log('G.  Third Last char of string is : ', thirdLastChar);



