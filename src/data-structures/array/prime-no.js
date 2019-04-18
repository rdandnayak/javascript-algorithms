function ifPrime(n) {
  let flag = 0;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      flag = 1;
    }
  }
  if (flag == 0) return 'Is Prime';
  else return 'not prime';
}

console.log(ifPrime(9));
