

console.log('                              Step 1                                                           ');

let professor = {
pName : "Sunil" ,
pCollageName : "Puna Collage",
pSubject :"History",
pCity : "Pune",
isMarried : true,
 degree: {
   degreeName1 : "PHD",
   degreeName2: "engineering",
   degreeName3: " Adv Computing",
   degreeName4: "BCA",
   degreeName5:"MCA",
    getDegree : function(){
   console.log(`Professor's Degress : ${this.degreeName1},${this.degreeName2},${this.degreeName3},${this.degreeName4},${this.degreeName5}`);
   }
},
certificates : ["Haker Rank Participation", " Certificate in IFE Course", "Certificate in Adv Programming"],
totalExpriance: "14 Years"

}

console.log(professor);
console.log('                              Step 2                                                           ');
console.log(professor.degree);
console.log('                              Step 3                                                           ');
professor. degree.getDegree();

console.log('                              Step 4                                                           ');
console.log(professor.certificates);
console.log('                              Step 5                                                           ');
console.log(professor.totalExpriance);
console.log('                              Step 6                                                           ');
professor.degree.degreeName5="MBA";
console.log(professor.degree);
console.log('                              Step 6                                                           ');
professor.certificates.push("Oracle certified");
console.log(professor.certificates);