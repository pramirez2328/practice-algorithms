// //create an array from 1 to 10 unsorted
// const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// function binarySearch(arr, target) {
//   arr.sort((a, b) => a - b);
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch(arr, 5)); // 7 (0 is at index 7)
// console.log(binarySearch(arr, 3)); // 49 (25 is at index 49)
// console.log(binarySearch(arr, 100)); // -1 (100 is not in the array)
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) {
      return mid;
    }

    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

const arr = [0, 1, 6, 100, 10000];

console.log(binarySearch(arr, 100)); // 3
