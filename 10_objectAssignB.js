

let sbiBank = {
    BankName : " SBI Bank",
    AccountNo : 34567898,
    Location : "Hadpsar",
    IFSC : "IFSC1267"
}
let bankLocation = {
    Street : " Shivaji Nagar",
    City : " Pune ",
    PinCode : "42180"
}

let mergedObject = Object.assign({}, sbiBank , bankLocation);
console.table(mergedObject);

let rateOfIntrest = {
    HomeLoanIntrest : 8.0,
    PersonalLoanIntrest : 11.0,
    DueIntrest : 7.0
}

   let sbiDetails = Object.assign({} , sbiBank , bankLocation , rateOfIntrest);
    console.table(sbiDetails);
    
   for (const key in sbiDetails) {

    console.log(`${key} = ${sbiDetails[key]}`);
   }
   let Bank = { ...sbiBank, ...bankLocation};
   console.log(sbiBank,bankLocation,Bank);
   console.log(Bank);
   