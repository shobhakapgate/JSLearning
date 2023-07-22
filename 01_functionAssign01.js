console.log('...................ASSIGNMENT1 1...................');
function message(){
    console.log('Hello Good Mornong Team');
    console.log('Hello JAVASCRIPT learners');
}
message();
console.log('                                               ');
console.log('...................2Ans...................');
console.log('                                               ');

function personalDetails( firstName,lastName,collageName){

    console.log('First Name=',firstName,"Last Name-=",lastName,'Collage Name=',collageName)

}
personalDetails('Shobha,','Kapgate,','Sangola Collage Sangola');
console.log('                                               ');
console.log('...................3Ans...................');
console.log('                                               ');

function swapValue(agr1,arg2){
 console.log('Before Swap Argumene1=',agr1,'Argument2=',arg2);
 var temp = agr1;
 agr1 = arg2;
arg2 = temp;
console.log('After Swap Argumene1=',agr1,'Argument2=',arg2);
}
swapValue('Virat','Anushka');
swapValue('1000','2000');
console.log('                                               ');
console.log('...................4Ans...................');
console.log('                                               ');
function addThreeValues(num1,num2,num3){
     console.log('Values Are = ',num1,num2,num3,);
     var res = num1+num2+num3;
     return res;
     }
var result = addThreeValues( 10.23,600,40);
console.log('Addtion', result);
var resultName = addThreeValues('Hello','Good','Morning');
console.log('Sentance=  ', resultName);
console.log('                                               ');
console.log('...................ASSIGNMENT 2...................');
console.log('                                               '); 
function bankDetails(bankName,accountNum,location,pinCode){
  console.log('Bank Name==>',bankName,'Account Number==>',accountNum,'Location==>',location,'Pincode==>',pinCode);
}
bankDetails ('CITI BANK', 3456782345,'Pune',431202);
bankDetails('Axis Bank',7856782345,'Mumbai',441203);
bankDetails('HDFC Bank', 8956782345, 'pune',631202,'Open');