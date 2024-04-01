//read from verses.txt line by line
// Genesis 1: 31	31
// Genesis 2: 25	25
// Genesis 3: 24	24
// Genesis 4: 26	26
// Genesis 5: 32	32
// Genesis 6: 22	22
// Genesis 7: 24	24 etc
// and return an array of objects with the following structure

import fs from 'fs';
import path from 'path';

const currentFilePath = new URL(import.meta.url).pathname;
const currentDirectory = path.dirname(currentFilePath);
const filePath = path.join(currentDirectory, 'verses.txt');

const readAllBooks = () => {
  const data = fs.readFileSync(filePath, 'utf8');
  const lines = data.split('\n');
  const books = [];
  lines.forEach((eachLine) => {
    const line = eachLine.trim().split(':');
    let left = line[0].trim().split(' ');
    let book, chapter;

    if (left.length === 4) {
      book = left.slice(0, 3).join(' ');
      chapter = left.pop();
    } else if (left.length === 3) {
      book = left.slice(0, 2).join(' ');
      chapter = left.pop();
    } else {
      book = left[0];
      chapter = left.pop();
    }

    const verses = line[1].trim().split('\t')[0];
    const obj = {
      book,
      chapter,
      verses,
    };
    books.push(obj);
  });
  return books;
};

const allBooks = readAllBooks();

fs.writeFile('./allBooks.json', JSON.stringify(allBooks, null, 2), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Data has been written to allBooks.json');
});
