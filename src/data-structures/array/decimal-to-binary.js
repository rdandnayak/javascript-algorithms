function decimalToBinary(n) {
  let a = [];
  for (let i = 0; n > 0; i++) {
    a[i] = n % 2;
    n = Math.trunc(n / 2);
  }
  return a.reverse().join('');
}
console.log(decimalToBinary(8));
