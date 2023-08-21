
function primeNum(num) {
    let isPrime = true;
    for (let index = 2; index < num; index++) {
      if (num % index == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`${num} is prime number`);
    } else {
      console.log(`Is not prime number ${num}`);
    }
  }
  primeNum(21);
  primeNum(11);