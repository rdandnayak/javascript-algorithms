function reverseNumber(num) {
  var reverse = 0,
    rem;
  while (num !== 0) {
    rem = num % 10;
    // console.warn(num);
    reverse = reverse * 10 + rem;
    num = Math.trunc(num / 10);
  }
  return reverse;
}

// reverseNumber(123);
console.log(reverseNumber(12345));
