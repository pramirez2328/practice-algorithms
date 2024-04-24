//insertion sort, create comments before each line of code to explain what is happening in each line of code

function insertionSort(arr) {
  let len = arr.length; // get the length of the array
  for (let i = 1; i < len; i++) {
    // loop through the array starting from the second element
    let key = arr[i]; // get the current element
    let j = i - 1; // get the previous element
    while (j >= 0 && arr[j] > key) {
      // loop through the array from the current element to the first element
      arr[j + 1] = arr[j]; // move the current element to the next element
      j = j - 1; // move to the previous element
    }
    arr[j + 1] = key; // insert the current element in the correct position
  }
  return arr; // return the sorted array
}

console.log(insertionSort([3, 2, 1, 5, 4])); // [1, 2, 3, 4, 5]
