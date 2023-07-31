function monthOfYear(month) {
  switch (month) {
    case 1:
      console.log(`${month} - January`);
      break;
    case 2:
      console.log(`${month} - Febuary`);
      break;
    case 3:
      console.log(`${month} - March`);
      break;
    case 4:
      console.log(`${month} - April`);
      break;
    case 5:
      console.log(`${month} - May`);
      break;
    case 6:
      console.log(`${month} - June`);
      break;
    case 7:
      console.log(`${month} - July`);
      break;
    case 8:
      console.log(`${month} - Auguest`);
      break;
    case 9:
      console.log(`${month} - September`);
      break;
    case 10:
      console.log(`${month} - Octomber`);
      break;
    case 11:
      console.log(`${month} - November`);
      break;
    case 12:
      console.log(`${month} - December`);
      break;
    default:
      console.log(`${month} - Invalid input value`);
      break;
      console.log(`End Switch statement`);
  }
}
monthOfYear(2);
monthOfYear(4);
monthOfYear(3); 
monthOfYear(7);
monthOfYear(9);
monthOfYear(13);
monthOfYear("Null");
monthOfYear(12);
monthOfYear(1);
monthOfYear(6);
