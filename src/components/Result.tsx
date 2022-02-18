import { FC, useMemo, useState } from "react";
import getResults, { ResultState, Result } from "../service";
import Answer from "./Answer";

type Props = {
  guess: string;
  availableWords?: string[];
};

const defaultAnswer: Result = [
  ResultState.NOT_SET,
  ResultState.NOT_SET,
  ResultState.NOT_SET,
  ResultState.NOT_SET,
  ResultState.NOT_SET,
];

const Results: FC<Props> = ({ guess, availableWords = null }) => {
  const [answer, setAnswer] = useState(defaultAnswer);
  const [selectedWord, selectWord] = useState<string | null>(null);

  const words = useMemo(
    () => getResults(guess, answer, availableWords),
    [guess, answer, availableWords]
  );

  return (
    <div className="flex flex-col space-y-2 pt-2">
      <Answer guess={guess} answer={answer} setAnswer={setAnswer} />
      <div>
        <p className="mb-2">Possible words: {words.length}</p>
        <ul className="flex flex-wrap">
          {words.map((word) => (
            <li key={word}>
              <button
                onClick={() => selectWord(word)}
                type="button"
                className="mr-2 mb-2 inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {word.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selectedWord && <Results guess={selectedWord} availableWords={words} />}
    </div>
  );
};

export default Results;
