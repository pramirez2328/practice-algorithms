var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  let result = '',
    current;

  for (let i = 0; i < strs[0].length; i++) {
    current = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== current) {
        return result;
      }
    }
    result += current;
  }
  return result;
};

console.log(longestCommonPrefix((strs = ['flower', 'flower', 'flower', 'flower'])));
