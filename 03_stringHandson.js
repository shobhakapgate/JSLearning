console.log("..............STEP 1.................");
function stringHandsOn(){
                console.log(string);
}
var string =  "     Hey you are doing good, keep it up     "
stringHandsOn();
console.log("..............STEP 2.................");
var strLeanth = string.length;
console.log(" String length is = ", strLeanth);
console.log("..............STEP 3.................");
var strTrim = string.trim();
var aftertrimString = strTrim.trimEnd();
var strLenth = aftertrimString.length;
console.log(`String Before Trim =, ${ string } , Sring After trim String = , ${aftertrimString}`);
console.log(` After trim length= , ${strLenth} `);
console.log("..............STEP 4.................");
var countRemvoeSpace = strLeanth-strLenth;
console.log(`Removed Spcase Count : ${countRemvoeSpace}`);
console.log("..............STEP 5.................");
var firstChar = aftertrimString.charAt(0);
var lastChar = aftertrimString.charAt(strLenth-1);
console.log(` First char of trimed string is = ${firstChar} Last Char of String is= ${lastChar}`);
console.log("..............STEP 6.................");
var totalWords = aftertrimString.split('');
var words =totalWords.length;
console.log(`Total Words of trimed String =  ${words}`);
console.log("..............STEP 7.................");
var stringIndex = aftertrimString.indexOf('good');
console.log(`index of good = ${stringIndex}`);
console.log("..............STEP 8.................");
var subString = aftertrimString.slice(4,22)
console.log(`Substring of index 22 is = ${subString}`);
console.log("..............STEP 9.................");













