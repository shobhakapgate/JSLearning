
var voteEligibility = function(age){
    var votAge = age;
    if (votAge<=0 || isNaN(votAge) || votAge>120) {
        console.log(`Your age is ${votAge} so invalid `);
    } else {
        if (votAge>=18) {
            console.log(`You age is ${votAge}  so eligible for vote`);
        } else {
            console.log(`Your age is ${votAge} so not eligible for vote`);
        }
}
}
voteEligibility(200);
voteEligibility(8); 
voteEligibility(0);
voteEligibility(45);
voteEligibility(undefined);
voteEligibility(20);
voteEligibility(null);
voteEligibility(17);
voteEligibility(-20);
