let n = 9,
  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
function sockMerchant(n, ar) {
  let length = 0;
  ar = ar.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < n; i++) {
    if (ar.slice(i + 1, n).indexOf(ar[i]) > -1) {
      length++, i++;
    }
  }
  return length;
}
console.log(sockMerchant(n, ar));
