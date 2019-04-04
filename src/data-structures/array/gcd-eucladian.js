function gcd(a, b) {
  if (a === 0) return b;
  let remainder = b % a;
  return gcd(remainder, a);
}

console.log(gcd(22, 24));
