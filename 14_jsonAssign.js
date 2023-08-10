

let jsonDetails = `{
    
    "name": "Aleix Melon",
"id" : "E00245",
"role": ["Dev", "DBA"],
"age" : 23,
"doj" : "11-12-2019",
"married" : false,
"address" : {
      "street": "32, Laham St.",
      "city" : "Innsbruck",
      "country" : "Austria"
},
"referred-by": "E0012"
}`

let converObject = JSON.parse(jsonDetails);
console.log(converObject);
console.log(`--------------------Address-------------------------`);
console.log(converObject.address);
console.log(`--------------------Log Roll "DEV"-------------------------`);
console.log("Role :", converObject.role[0].toUpperCase());
console.log(`--------------------Last Name-------------------------`);
let firstLastName =converObject.name.split(" ");
console.log(`Full Name : ${firstLastName}`);
let lastName = firstLastName[1];
console.log("Last Name :", lastName);
console.log(`--------------------Joining Year-------------------------`);
let JoiningDate = converObject.doj.split("-");
console.log("Joining Date :",JoiningDate);
let joiningYear = JoiningDate[2];
console.log("Joining Year : ", joiningYear);







