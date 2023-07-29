console.log(`..................... STEP 3 .............................`);
function evenOdd(num1){
var numValue = num1;
if (numValue%2==0) {
    console.log(` Given no ${numValue} = is EVEN`);
} else {
    console.log( ` Given number ${ numValue } = is ODD`);
}
}
evenOdd(45);
evenOdd(70);
evenOdd(67);
evenOdd(98);
console.log(`..................... STEP 3 .............................`);
 
function string(name){
var stringName = name;
var stringLength = stringName.length;
if (stringLength>=10) {
    console.log(`Yes given string ${stringName} is more than 10 character`);
} else {
    console.log(`No given string ${stringName} is not more than 10 character`);
}
}
string("JavaScript-ES6");
string("Sanvi");
console.log(`..................... STEP 3 .............................`);

function stringName(name){
    var strName = name;
    if (strName.startsWith("Java")) {
        console.log(`Yes, string " ${strName}" start with "Java"`);
    } else {
        console.log(`No, string does not "${strName}" start with "Java"`);
 
    }
}
stringName("JavaScript Language");
stringName("Anguler Developer")