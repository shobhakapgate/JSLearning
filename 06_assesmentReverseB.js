
var reverseString = function(str){
let reverse = "";
for (let index = str.length-1; index >=0 ; index = index - 1) {
    const char = str.charAt(index);
        
        if (char!= " ") {
            reverse = reverse.concat(char);            
        }
    }
    console.log(reverse);
}
reverseString("Hard Work Always Pays Back");
reverseString("Soon I will be IT Anguler Developer");