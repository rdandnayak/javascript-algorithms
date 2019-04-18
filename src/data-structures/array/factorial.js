function factorial(n) {
  let fact = n;
  while (n > 1) {
    fact = fact * (n - 1);
    n = n - 1;
  }
  return fact;
}

console.log(factorial(5));
