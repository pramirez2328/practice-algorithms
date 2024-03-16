// const romanValues = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };

// var romanToInt = function (s) {
//   let result = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (romanValues[s[i]] < romanValues[s[i + 1]]) {
//       result += romanValues[s[i + 1]] - romanValues[s[i]];
//       i++;
//     } else {
//       result += romanValues[s[i]];
//     }
//   }
//   return result;
// };

// console.log(romanToInt('MCMXCIV'));
const romans = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
};

function romanizer(numbers) {
  return numbers.map((number) => {
    let result = '';
    let romanKeys = Object.keys(romans).reverse();
    let i = 0;
    while (number > 0) {
      if (number >= romanKeys[i]) {
        result += romans[romanKeys[i]];
        number -= romanKeys[i];
      } else {
        i++;
      }
    }
    return result;
  });
}

console.log(romanizer([1, 49, 23])); // [ 'I', 'XLIX', 'XXIII' ]
