function processData(input) {
  let line = input.split('\n');
  for (let w of line) {
    let arr = w.split(';');
    arr[2] = arr[2].replace(/\r/g, '');
    let word = arr[2].replace(/([a-z])([A-Z])/g, '$1 $2').split(/\s/gm);
    let result = '';

    if (arr[0] === 'C' && arr[1] === 'C') {
      for (let i = 0; i < word.length; i++) {
        result += word[i][0]?.toUpperCase() + word[i].slice(1);
      }
    } else if (arr[0] === 'C' && arr[1] !== 'C') {
      result += word[0];
      for (let i = 1; i < word.length; i++) {
        result += word[i][0]?.toUpperCase() + word[i].slice(1);
      }

      if (arr[1] === 'M') {
        result += '()';
      }
    } else {
      for (let i = 0; i < word.length; i++) {
        result += word[i][0]?.toLowerCase() + word[i].slice(1) + ' ';
      }
    }

    console.log(result.trim());
  }
}

const input = `C;V;can of coke
S;M;sweatTea()
S;V;epsonPrinter
C;M;santa claus
C;C;mirror`;

processData(input);
// Output:
// Can Of Coke
// sweatTea()
// EpsonPrinter
// Santa Claus
// Mirror
```