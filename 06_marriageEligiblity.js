
function marriageCriteria(gender,age){
    
    if (age>=18 && age>=21) {
        console.log(`Congratulation you are ${gender} and age is ${age} so eligible for marriage`);
    }
    else{
        console.log(' Invalid data ');
    }
} 
marriageCriteria("Male",23);
marriageCriteria("Other",41);
marriageCriteria("female",16);
marriageCriteria("Male",19);
marriageCriteria("female", 67);
marriageCriteria("female",45);
marriageCriteria("other",35);
marriageCriteria("male", 35);