console.log('----------------------------STEP 1-----------------------------------');

let sbiBank = {
    bankName: "SBI Bank",
    location : "pune",
    accountNumber: 123456789,
    ifsc :"SBI1234",
    intrestRate : 8,
    showDetails : function(){
 console.log(`SBI Bank Details: ${this.bankName}, Location : ${this.location}, Account Number: ${this.accountNumber},IFSC Code: ${this.ifsc},Intrst Rate: ${this.intrestRate}`);
    }
}
sbiBank.showDetails();
console.log('----------------------------STEP 2-----------------------------------');

let axisBank = {
    bankName: "Axis Bank",
    location : "Solapur",
    accountNumber: 8888888888,
    ifsc :"AXIS123434",
    intrestRate : 7,
    showDetails : function(){
 console.log(`Axis Bank Details: ${this.bankName}, Location : ${this.location}, Account Number: ${this.accountNumber},IFSC Code: ${this.ifsc},Intrst Rate: ${this.intrestRate}`);
    }
}
axisBank.showDetails();

console.log('----------------------------STEP 3-----------------------------------');

let hdfcBank = {
    bankName: "HDFC Bank",
    location : "Mumbai",
    accountNumber: 99999999999,
    ifsc :"HDFC15555",
    intrestRate : 6,
    showDetails : function(){
 console.log(`HDFC Bank Details: ${this.bankName}, Location : ${this.location}, Account Number: ${this.accountNumber},IFSC Code: ${this.ifsc},Intrst Rate: ${this.intrestRate}`);
    }
}
hdfcBank.showDetails();
console.log('----------------------------STEP 4-----------------------------------');

let yesBank = {
    bankName: "YES Bank",
    location : "Hadpsar",
    accountNumber: 345678965,
    ifsc :"YES15555",
    intrestRate : 9,
    showDetails : function(){
 console.log(`YES Bank Details: ${this.bankName}, Location : ${this.location}, Account Number: ${this.accountNumber},IFSC Code: ${this.ifsc},Intrst Rate: ${this.intrestRate}`);
    }
}
yesBank.showDetails();
yesBank.location="Dehli";
yesBank.showDetails();
