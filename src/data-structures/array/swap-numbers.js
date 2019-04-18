function swapNumbers(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return `${a}-${b}`;
}

console.log(swapNumbers(2, 5));
