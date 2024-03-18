const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const lines = data.split('\n');

  const lastLine2Lines = lines.slice(-2);
  console.log(lastLine2Lines[0]);
  console.log(lastLine2Lines[1]);
  //the lines should in the same order as the input file
  for (let line of lines) {
    const newLine = line.replace(/[0-9]/g, '');
    fs.appendFileSync('./out.txt', newLine + '\n', (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
});
