import React, { useState } from "react";
import Countdown from "./Countdown";

function Timer() {
  const [displayTimer, setDisplayTimer] = useState(false);
  const [h, setH] = useState(0);
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);
  const [hoursMinsSecs, setHoursMinsSecs] = useState({
    hours: h,
    minutes: m,
    seconds: s,
  });

  function handleHourChange(hour) {
    setH(hour.target.value);
  }

  function handleMinChange(min) {
    setM(min.target.value);
  }

  function handleSecChange(sec) {
    setS(sec.target.value);
  }

  function handleTime(h, m, s) {
    setHoursMinsSecs({ hours: h, minutes: m, seconds: s });
    setDisplayTimer(!displayTimer);
  }

  return (
    <>
      {!displayTimer && (
        <>
          <div className="text-white text-7xl bg-green-700 mx-10 grid place-items-center flex grid-flow-col px-2 border-4 border-green-900 bg-opacity-60 rounded-lg">
            <input
              type="number"
              className="bg-transparent w-24 hover:bg-green-600 rounded"
              placeholder="00"
              maxLength="2"
              value={h}
              onChange={(e) => handleHourChange(e)}
            ></input>
            <div>:</div>
            <input
              type="number"
              className="bg-transparent w-24 hover:bg-green-600 rounded"
              placeholder="00"
              maxLength="2"
              value={m}
              onChange={(e) => handleMinChange(e)}
            ></input>
            <div>:</div>

            <input
              type="number"
              className="bg-transparent w-24 hover:bg-green-600 rounded"
              placeholder="00"
              maxLength="2"
              value={s}
              onChange={(e) => handleSecChange(e)}
            ></input>
          </div>

          <button className="border-4 border-green-900 bg-green-700 shadow-xl text-white rounded-full p-2 hover:bg-green-500 mt-4" onClick={() => handleTime(h, m, s)}>Start</button>
        </>
      )}

      {displayTimer && (
        <>
          <div className="text-white text-7xl bg-green-700 mx-10 grid place-items-center flex grid-flow-col p-2 px-3.5 border-4 border-green-900 bg-opacity-60 rounded-lg">
            <Countdown hoursMinSecs={hoursMinsSecs} />
          </div>
          <button className="border-4 border-green-900 bg-green-700 shadow-xl text-white rounded-full p-2 hover:bg-green-500 mt-4" onClick={() => handleTime(h, m, s)}>Stop</button>
        </>
      )}
    </>
  );
}

export default Timer;
