function rotateArray(arr) {
  let temp = arr[0];
  let len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[i] = temp;
  return arr;
}

function rotateArrayBy(arr, d) {
  for (let i = 0; i < d; i++) {
    rotateArray(arr);
  }
  return arr;
}

console.log(rotateArrayBy([1, 2, 3, 4, 5], 2));
