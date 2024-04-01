import { BibleBooks } from './allBooks.mjs';
import { allBooks2 } from './allBooks2.mjs';
import fs from 'fs';

let index = 0;
for (let i = 0; i < BibleBooks.length; i++) {
  for (let j = 0; j < BibleBooks[i].chapters.length; j++) {
    BibleBooks[i].chapters[j].verses = Number(allBooks2[index].verses);
    index++;
  }
}
const allBooks = BibleBooks;

fs.writeFile('./finalBible.json', JSON.stringify(allBooks, null, 2), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Data has been written to allBooks.json');
});
