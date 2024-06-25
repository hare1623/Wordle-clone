import wordBank from "./words.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      let wordArr = result.split(/\r?\n/).map(word => word.trim().toLowerCase());
      console.log(wordArr)
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      console.log(todaysWord)
      wordSet = new Set(wordArr);
    });
  return { wordSet, todaysWord };
};