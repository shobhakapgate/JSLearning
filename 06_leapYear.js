
var leapYear = function(year){
 var year = +year   
 if (isNaN(year) || year==="string") {
    console.log(`${year} invalid inpute`);
}
if (year%4===0 || year%400===0 || year%100!==0) {
    console.log(`This is ${year} leap year`);
} else {
    console.log(`This is ${year} not leap year`); 
}

}
leapYear("Twenty Twenty")
leapYear(2020);
leapYear(1999);
leapYear("undefined");
leapYear(1600);
leapYear(2022);
leapYear("undefined");
leapYear(1945);
leapYear(null);
