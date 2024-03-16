var isValid = function (s) {
  if (s.length == 1) return false;
  let sArr = [],
    i = 1;
  sArr.push(s[0]);

  while (i < s.length) {
    c = s[i];
    last = sArr[sArr.length - 1];
    if ((last == '(' || last == '[' || last == '{') && (c == ')' || c == ']' || c == '}')) {
      if ((last == '(' && c === ']') || (last == '(' && c === '}')) {
        return false;
      } else if ((last == '[' && c === ')') || (last == '[' && c === '}')) {
        return false;
      } else if ((last == '{' && c === ')') || (last == '{' && c === ']')) {
        return false;
      } else {
        sArr.pop();
      }
    } else if (c == '(' || c == '[' || c == '{') {
      sArr.push(c);
    }
    i++;
  }
  return !(sArr.length > 0);
};
let s = '([)]';

console.log(isValid(s)); // false
