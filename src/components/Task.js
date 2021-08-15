import { useState } from "react";

function Task({ id }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange(e) {
    setIsChecked(e.target.checked);
  }

  return (
    <>
      <div className="items-center flex flex-grid grid-flow-col cols-2">
        <div className="pb-2.5 pr-2.5">
          <input onChange={(e) => handleChange(e)} type="checkbox"></input>
        </div>

        <input
          id={id}
          className={
            isChecked
              ? "line-through rounded-lg font-serif border-b-4 border-green-900 text-red-400 outline-none p-1 bg-green-700 mb-2 hover:bg-green-600"
              : "rounded-lg font-serif border-b-4 border-green-900 text-white outline-none p-1 bg-green-700 mb-2 hover:bg-green-600 "
          }
          type="text"
          placeholder="Enter a task"
          autoComplete="off"
        ></input>
      </div>
    </>
  );
}

export default Task;
