// const ROMANS = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

// function romansToDecimals(letters) {
//   let r = 0;
//   for (let i = 0; i < letters.length; i++) {
//     if (ROMANS[letters[i - 1]] < ROMANS[letters[i]]) {
//       r += ROMANS[letters[i]] - ROMANS[letters[i - 1]] * 2;
//     } else {
//       r += ROMANS[letters[i]];
//     }
//   }

//   return r;
// }

// console.log(romansToDecimals("MDCCLXXVI"));

// const a = ["aaba", "hhyu", "pedro", "andreaa"];

// function noDuplicates(arr) {
//   // let newArr = [];

//   // for (let i = 0; i < arr.length; i++) {
//   //   let r = new Set([...arr[i]]);
//   //   newArr.push([...r].join(""));
//   // }
//   const obj = new Map();

//   for (let i = 0; i < a.length; i++) {
//     obj.set(i, a[i]);
//   }

//   let final = [];
//   let r = "";

//   for (let item of obj.values()) {
//     let prev;
//     item.split("").forEach((i) => {
//       if (prev !== i) {
//         r += i;
//       }
//       prev = i;
//     });
//     final.push(r);
//     r = "";
//   }

//   console.log(final);
// }

// noDuplicates(a);

// let s = `Roman numerals are represented by symbols I, V, X, L, C, D and M.<br>`;
// let sum = 0;
// for (let i = 0; i < s.length; i++) {
//   sum++;
// }

// console.log(sum);

const table = (a, b) => {
  let first;
  let second = -1;
  let condition = true;
  let row = "";
  const result = [];
  for (let i = 1; i <= a; i++) {
    first = 0;
    second++;
    condition = true;

    for (let j = 1; j <= b; j++) {
      if (condition) {
        //second increase in every iteration
        row += j + first + second + "  ";
      } else {
        // save the multiplication
        first = j * a - j;
        row += j * a - second + "  ";
      }
      condition = !condition;
    }
    result.push(row);
    row = "";
  }
  return result;
};

const button = document.querySelector(".button");
const bottomBox = document.querySelector(".bottomWrapper");
const row = document.querySelector("#row");
const column = document.querySelector("#column");

button.addEventListener("click", () => {
  bottomBox.innerHTML = "";
  let t = table(row.value, column.value);
  row.value = "";
  column.value = "";
  t.forEach((i) => {
    let temp = i.trim().split("  ");
    let styleWidth = 95 / temp.length;
    temp.forEach((j) => {
      bottomBox.insertAdjacentHTML(
        "beforeend",
        `<div class="result" style= width:${styleWidth}%;>${j}</div>`
      );
    });
  });
});
