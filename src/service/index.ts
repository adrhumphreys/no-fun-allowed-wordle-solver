import { actualWords } from "./data";

export enum ResultState {
  NOT_SET = "n",
  CORRECT = "h",
  MISS = "m",
  INCORRECT = "i",
}

export type Result = [
  ResultState,
  ResultState,
  ResultState,
  ResultState,
  ResultState
];

const filterWords = (
  guess: string,
  result: Result,
  possibleWords: string[]
) => {
  const guessLetters = [...guess];

  return possibleWords.reduce((prev, curr) => {
    const wordLetters = [...curr];

    const res = result.map((r, idx) => {
      switch (r) {
        case ResultState.CORRECT:
          // The result was a hit so only words with the letter in the same place
          // are correct words
          return wordLetters[idx] === guessLetters[idx];
        case ResultState.INCORRECT:
          // We need to ensure the word does not have the guessed letter in it
          return wordLetters.indexOf(guessLetters[idx]) === -1;
        case ResultState.MISS:
          // We need to make sure it's in the word, but that it is not
          // in the current index
          const indexOfGuess = wordLetters.indexOf(guessLetters[idx]);
          return indexOfGuess !== -1 && indexOfGuess !== idx;
        case ResultState.NOT_SET:
          // We dont have the info to discard the word based on this result
          return true;
      }
    });

    if (res.filter((r) => r === false).length > 0) {
      // If any item is marked as false then the word is not a cool
      // word so we won't add it to our list
      return prev;
    }

    return [...prev, curr];
  }, [] as string[]);
};

const getResults = (
  guess: string,
  result: Result,
  possibleWords: string[] | null
) => {
  const filteredWords = filterWords(
    guess,
    result,
    possibleWords ?? actualWords
  );
  return filteredWords;
};

export default getResults;
