/*
HackerRank Home
HackerRank
|
Prepare
Certify
Compete
Apply
Search
|
Switch to..
PrepareInterview Preparation Kits3 Months Preparation KitWeek 1Camel Case 4
Camel Case 4
Problem
Submissions
Leaderboard
Discussions

HackerRank
|
PrepareInterview Preparation Kits3 Months Preparation KitWeek 1Camel Case 4
Exit Full Screen View
Problem	Submissions	Leaderboard	Discussions
Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

Your task is to write a program that creates or splits Camel Case variable, method, and class names.

Input Format

Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
The operation will either be S (split) or C (combine)
M indicates method, C indicates class, and V indicates variable
In the case of a split operation, the words will be a camel case method, class or variable name that you need to split into a space-delimited list of words starting with a lowercase letter.
In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters that you need to combine into the appropriate camel case String. Methods should end with an empty set of parentheses to differentiate them from variable names.
Output Format

For each input line, your program should print either the space-delimited list of words (in the case of a split operation) or the appropriate camel case string (in the case of a combine operation).
Sample Input

S;M;plasticCup()

C;V;mobile phone

C;C;coffee machine

S;C;LargeSoftwareBook

C;M;white sheet of paper

S;V;pictureFrame

Sample Output

plastic cup

mobilePhone

CoffeeMachine

large software book

whiteSheetOfPaper()

picture frame

Explanation

Use Scanner to read in all information as if it were coming from the keyboard.

Print all information to the console using standard output (System.out.print() or System.out.println()).

Outputs must be exact (exact spaces and casing).
*/

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

      result = result.replace('()', '');
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
