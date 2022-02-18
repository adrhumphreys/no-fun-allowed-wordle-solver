import classNames from "classnames";
import { FC } from "react";
import { Result, ResultState } from "../service";

type Props = {
  guess: string;
  answer: Result;
  setAnswer: (r: Result) => void;
};

const nextResult = (r: ResultState): ResultState => {
  if (r === ResultState.NOT_SET) return ResultState.MISS;
  if (r === ResultState.MISS) return ResultState.CORRECT;
  if (r === ResultState.CORRECT) return ResultState.INCORRECT;
  return ResultState.NOT_SET;
};

const Answer: FC<Props> = ({ guess, answer, setAnswer }) => {
  return (
    <div className="grid w-40 grid-cols-5 gap-1">
      {[...guess].map((letter, idx) => (
        <button
          key={idx}
          onClick={() => {
            const temp = [...answer];
            temp[idx] = nextResult(temp[idx]);
            setAnswer(temp as Result);
          }}
          className={classNames(
            "border-black-500 flex h-8 w-6 items-center rounded border p-1 text-center text-xl uppercase",
            {
              "bg-green-600 text-white": answer[idx] === ResultState.CORRECT,
              "bg-yellow-500 text-white": answer[idx] === ResultState.MISS,
              "bg-red-500 text-white": answer[idx] === ResultState.INCORRECT,
            }
          )}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Answer;
