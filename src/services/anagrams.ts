import fs from 'fs';
import * as readline from 'node:readline/promises';

export const anagrams = async (words: string) => {
  const wordChars = words.split('');

  const fileStream = fs.createReadStream('./src/lib/wordlist.txt');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const anagrams = []

  try {
    for await (const line of rl) {
      const lineChars = line.split('');
      if (lineChars.length === wordChars.length && lineChars.every((char) => wordChars.includes(char))) {
        anagrams.push(line);
      }
    }
  } catch (error) {
    console.error('Error reading file:', error);
  }

  return anagrams;
};
