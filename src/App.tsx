import { FC, useState } from "react";
import Guess from "./components/Guess";
import Result from "./components/Result";
import UseAllWords from "./components/UseAllWords";
import { actualWords, allowedWords } from "./service/data";

type Props = {};

const App: FC<Props> = ({}) => {
  const [guess, setGuess] = useState("");
  const [useAllWords, setUseAllWords] = useState(false);
  const startWords = useAllWords ? allowedWords : actualWords;

  return (
    <div className="flex flex-col space-y-2 p-5">
      <Guess setGuess={(input: string) => setGuess(input.toLowerCase())} />
      <UseAllWords state={useAllWords} setState={setUseAllWords} />
      {guess.length === 5 && (
        <Result guess={guess} availableWords={startWords} />
      )}
    </div>
  );
};

export default App;
