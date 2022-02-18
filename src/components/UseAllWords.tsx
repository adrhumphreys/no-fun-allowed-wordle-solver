import type { Dispatch, FC, SetStateAction } from "react";

type Props = {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};

const UseAllWords: FC<Props> = ({ state, setState }) => {
  return (
    <div className="relative flex items-start">
      <div className="flex h-5 items-center">
        <input
          type="checkbox"
          id="use-all-words"
          checked={state}
          onChange={(e) => setState(e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
      </div>
      <div className="ml-3 text-sm">
        <label
          htmlFor="use-all-words"
          className="select-none font-medium text-gray-700"
        >
          Use all 5 letter words?
        </label>
      </div>
    </div>
  );
};

export default UseAllWords;
