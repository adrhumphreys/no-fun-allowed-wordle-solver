import { FC, useState } from "react";

type Props = {
  setGuess: (guess: string) => void;
};

const Guess: FC<Props> = ({ setGuess }) => {
  const [localGuess, setLocalGuess] = useState("");

  return (
    <form
      className="w-64"
      onSubmit={(e) => {
        e.preventDefault();
        setGuess(localGuess);
      }}
    >
      <label htmlFor="guess" className="sr-only">
        Guess
      </label>
      <div className="flex space-x-2">
        <input
          type="text"
          name="guess"
          id="guess"
          value={localGuess}
          onChange={(e) => setLocalGuess(e.target.value)}
          className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        <button
          type="submit"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Guess
        </button>
      </div>
    </form>
  );
};

export default Guess;
