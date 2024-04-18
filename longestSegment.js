function maxUniqueSegmentLength(s) {
  // let index = 0,
  //   result = '',
  //   longest = 0,
  //   resultIndex;
  // while (index < str.length) {
  //   if (!result.includes(str[index])) {
  //     result += str[index];
  //   } else {
  //     if (result.length > longest) longest = result.length;
  //     resultIndex = result.indexOf(str[index]);
  //     if (resultIndex + 1 === result.length) {
  //       result = str[index];
  //     } else {
  //       result = result.slice(resultIndex + 1) + str[index];
  //     }
  //   }
  //   index++;
  // }
  // return longest;

  // Optimized solution
  // let index = 0,
  //   result = '',
  //   longest = 0,
  //   resultIndex;
  // while (index < str.length) {
  //   resultIndex = result.indexOf(str[index]);
  //   if (resultIndex !== -1) {
  //     result = result.slice(resultIndex + 1);
  //   }
  //   result += str[index];
  //   longest = Math.max(longest, result.length);
  //   index++;
  // }
  // return longest;

  // Optimized solution2

  let maxLength = 0;
  const charSet = new Set();
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Test cases
console.log(maxUniqueSegmentLength('abcabcfbb')); // Output: 4
console.log(maxUniqueSegmentLength('bbbbb')); // Output: 1
console.log(maxUniqueSegmentLength('pwwkew')); // Output: 3
