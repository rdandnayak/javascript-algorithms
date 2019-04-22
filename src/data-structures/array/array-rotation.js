function rotateArray(arr) {
  let temp = arr[0];
  let len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[i] = temp;
  return arr;
}

function gcd(a, b) {
  if (a <= 0) return b;
  let x = b - a;
  return gcd(x, a);
}

function rotateJuggling(arr, d) {
  let len = arr.length;
  for (let i = 0; i < gcd(d, len); i++) {
    let temp = arr[i];
    let j = i;
    while (1) {
      let k = j + d;
      if (k >= len) k = k - len;
      if (k === i) break;
      arr[j] = arr[k];
      j = k;
    }
    arr[j] = temp;
  }
  return arr;
}

function rotateArrayBy(arr, d) {
  for (let i = 0; i < d; i++) {
    rotateArray(arr);
  }
  return arr;
}

console.log(rotateArrayBy([1, 2, 3, 4, 5], 3));
console.log(rotateJuggling([1, 2, 3, 4, 5], 3));
