/*A numeric string, , is beautiful if it can be split into a sequence of two or more positive integers, , satisfying the following conditions:

 for any  (i.e., each element in the sequence is  more than the previous element).
No  contains a leading zero. For example, we can split  into the sequence , but it is not beautiful because  and  have leading zeroes.
The contents of the sequence cannot be rearranged. For example, we can split  into the sequence , but it is not beautiful because it breaks our first constraint (i.e., ).
The diagram below depicts some beautiful strings:

image

Perform  queries where each query consists of some integer string . For each query, print whether or not the string is beautiful on a new line. If it is beautiful, print YES x, where  is the first number of the increasing sequence. If there are multiple such values of , choose the smallest. Otherwise, print NO.

Function Description

Complete the separateNumbers function in the editor below.

separateNumbers has the following parameter:

s: an integer value represented as a string
Prints
- string: Print a string as described above. Return nothing.

Input Format

The first line contains an integer , the number of strings to evaluate.
Each of the next  lines contains an integer string  to query.*/

function separateNumbers(s) {
  // Write your code here
  let len = s.length;
  let result = 'NO';
  for (let i = 1; i <= len / 2; i++) {
    let first = s.slice(0, i);
    let num = parseInt(first);
    let temp = first;
    while (temp.length < s.length) {
      temp += num + 1;
      num++;
    }
    if (temp === s) {
      result = `YES ${first}`;
      break;
    }
  }
  return result;
}

// console.log(separateNumbers('1234')); // YES 1
// console.log(separateNumbers('91011')); // YES 9
console.log(separateNumbers('99100')); // YES 99
