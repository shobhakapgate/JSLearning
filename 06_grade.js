function gradeCalculation(marks) {
  var markNum = marks;
  if (markNum >= 90 && markNum<=100) {
    console.log(`Fantastic Marks : ${markNum}% Your grade is A+`);
  } else {
    if (markNum >= 75 && markNum < 90) {
      console.log(`Excellent Marks ${markNum}% your grade is A`);
    } else {
      if (markNum >= 50 && markNum < 75) {
        console.log(`Good Marks ${markNum}% your grade is B`);
      } else {
        if (markNum >= 35 && markNum < 50) {
          console.log(`Marks is ${markNum}% your grade is C , need Improvement`);
        } else {
            if ( markNum = 0 ||markNum <= 0 || markNum>100) {
                    console.log(`Please enter valid data`);
            } else {
                
            }
        }
      }
    }
  }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(35);
gradeCalculation(0);
gradeCalculation(64);
gradeCalculation(-7);
gradeCalculation(49);
gradeCalculation("Seventy");
gradeCalculation(91);
gradeCalculation(150);
