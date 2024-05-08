import fs from 'fs';

let memoizedAnagramsList: string[] | null = null;

export const anagrams = async (words: string) => {
  if(!memoizedAnagramsList) {
    const data = await fs.promises.readFile('./src/lib/wordlist.txt', 'utf-8');
    memoizedAnagramsList = data.split('\n');
  }

  const wordChars = words.split('');
  const anagrams = []

  try {
    for await (const line of memoizedAnagramsList) {
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
