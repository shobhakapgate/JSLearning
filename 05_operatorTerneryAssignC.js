
var interviewEligibility = function(gradScore, hscScore, sscScore, candidateName ){
    var result = gradScore>=70 || hscScore>= 80 || sscScore >=90 
     ? `Congrats ${candidateName} you are eligible for TCS interview.`
     :  `Unfortunately you are not eligible for interview`;
     console.log(result);
 }
 
 interviewEligibility(80, 86, 90, 'Mahi');
 interviewEligibility(70, 65, 55, 'Gill');
 interviewEligibility(60, 79, 88, 'Stew');

 console.log('.............Assesment C....................');

 function maleMarriageEligibily(gender,age,boyName){
var result = age>=21 ? `Hey ${ boyName} you are eligible for marriage` : `Hey ${ boyName} you are not eligible for marriage`;
console.log(result);
 }
 maleMarriageEligibily("male",25,"Billgates");
 maleMarriageEligibily("male",17,"Stew Jobs");