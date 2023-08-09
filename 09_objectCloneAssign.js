
const arrayNumbers =[20,3,4,56,90,400,49];

console.log(`Orignal Arrary = ${arrayNumbers}`);

let array1 = [20,3,4,56,90,400,49];

array1.push(55,66);

console.log(`Updated cloned array = ${array1}`);

 arrayNumbers.push(10,25);

console.log(`Updated Orignal array = ${arrayNumbers}`);

let Clone = [...arrayNumbers,...array1];
console.log(Clone);

let arrayEven = [2,30,14,8];
let mergeArray = arrayNumbers.concat(arrayEven);

console.log(mergeArray);

const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli ,431202",

        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    Mobiles:["+91 8600 3456 88","1800-4567 32","+91-9096 5678 77"]
}

let month = JSON.parse(JSON.stringify(employee_info)); //DEEP close
month.salary.july_month = "800000INR";
console.log(`Employee Details are : ${employee_info.salary.july_month}`);
let newCounty = JSON.parse(JSON.stringify(employee_info));
//newCountry.address.country = "UK";
//console.log(`Employee Details: ${employee_info.address.locality.country}`);
//console.log(`Employee Details: ${employee_info.address.country}`);
//console.log(`New Employee Details: ${newCountry.address.country}`);