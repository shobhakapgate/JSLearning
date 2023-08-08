
let personalDetails = {
    FullName : "Shobha Kapgate",
    Address : "Pune",
    Mobile : 9049920505,
    EmailId : "maushobha@gmailcom" 
}
console.log(personalDetails);

let collegeDetails = {
    CollegeName : "Sangola college Sangola",
    DegreeName : "MCA",
    PassoutYear : 2027,
    CollegeAddress : "Sangola "
}
console.log(collegeDetails);
console.log('----------------------Merged two object with shallow method --------------------------');

let mergedObject = Object.assign( {} , personalDetails,collegeDetails);
//console.table(`The personal and college details are: ${mergedObject}`);
console.log(mergedObject);

console.log('----------------------Created Array and freezed it --------------------------');

let array = ["Sarika","Sunil","Sanvi","Siddharth", "Ketan"];
let result = Object.freeze(array);
console.log(result);
console.log('----------------------Traverse the array --------------------------');
for (const element of array) {
    console.log(element);
}
console.log('----------------------Reverse the string --------------------------');
let str = "Codemind Teconology";
let reverse = " ";
let reversestr = str.slice(9);
console.log(str);
let result2 =str.slice(9);
for(var index=result2.length-1;index>=0;index--){
    const char = result2.charAt(index);
   reverse = reverse.concat(char);
}
console.log(`The expected output :${reverse}`);
