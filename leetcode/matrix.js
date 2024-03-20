//  * Complete the 'flippingMatrix' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts 2D_INTEGER_ARRAY matrix as parameter.

function flippingMatrix(matrix) {
  // Write your code here
  const n = matrix.length;
  const halfN = n / 2;
  let sum = 0;
  for (let i = 0; i < halfN; i++) {
    for (let j = 0; j < halfN; j++) {
      sum += Math.max(matrix[i][j], matrix[i][n - 1 - j], matrix[n - 1 - i][j], matrix[n - 1 - i][n - 1 - j]);
    }
  }
  return sum;
}

const matrix = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
];

console.log(flippingMatrix(matrix)); // 414
