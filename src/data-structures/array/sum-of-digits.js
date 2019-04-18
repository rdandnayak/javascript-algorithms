function sumOfDigits(num) {
  var sum = 0,
    rem;
  while (num > 0) {
    rem = num % 10;
    sum = sum + rem;
    num = Math.trunc(num / 10);
  }
  return sum;
}

// reverseNumber(123);
console.log(sumOfDigits(126));
