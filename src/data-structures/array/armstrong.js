function armstrong(n) {
  let sum = 0,
    num = n;
  while (num > 0) {
    rem = num % 10;
    sum = sum + rem * rem * rem;
    num = Math.trunc(num / 10);
  }
  if (sum === n) return 'armstrong';
  else return 'not armstrong';
}

console.log(armstrong(153));
