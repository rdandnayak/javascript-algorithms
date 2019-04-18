function isPalindrome(n) {
  let revString = 0,
    rem,
    temp;
  temp = n;
  while (n > 0) {
    rem = n % 10;
    revString = revString * 10 + rem;
    n = Math.trunc(n / 10);
  }
  if (temp !== revString) return 'not palindrome';
  else return 'is palindrome';
}

console.log(isPalindrome(1231));
