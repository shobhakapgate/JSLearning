console.log('................... STEP 1....................');
var vowalCount = function(str){
let count = 0;
for (let index = 0; index <= str.length; index++) {
    let char = str.charAt(index);
if (char == "a" || char == "e" || char == "i" || char == "o" || char =="u"||
    char == "A" || char == "E" || char == "I" || char == "O" || char =="U") {
    console.log(char);
    count = count + 1;
}    
}
}
vowalCount("I am very good IT Developer ");
console.log('................... STEP 2....................');
var cubNumber = function(){ 
for (let index = 1; index <=5; index++) {
    //console.log(index);
    let sum = index * index * index;    
    console.log(sum);
}
}
cubNumber();
console.log('................... STEP 3....................');

var oddPositionChars = function(str){
    
    for (let index = 0; index <= str.length; index++) {
        const char = str.charAt(index);
        
        if (index%2 == 1 && char!== " ") {
            console.log(char); 
        }
         
      }
      
    }
    oddPositionChars("Hard Work always pays back");
    oddPositionChars("Soon I will be Anguler IT Champ");
    
    console.log('................... STEP 4....................');

function countVowal(str){
    let index = 0;
    while (index<=str.length) {
         let char = str.charAt(index);   
        if (char == "a" || char == "e" || char == "i" || char == "o" || char =="u"||
        char == "A" || char == "E" || char == "I" || char == "O" || char =="U") {
            console.log(char);
            
        }
        index = index + 1;
        }
}
countVowal("I am Very good IT developer");
