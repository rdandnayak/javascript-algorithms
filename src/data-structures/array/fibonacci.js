function fibonacci(number) {
  let n1 = 0,
    n2 = 1,
    n3;
  console.log(n1);
  console.log(n2);
  for (let i = 2; i < number; ++i) {
    n3 = n1 + n2;
    console.log(n3);
    n1 = n2;
    n2 = n3;
  }
}

console.log(fibonacci(9));
