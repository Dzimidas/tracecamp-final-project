import React, { useState, useRef, useEffect } from "react";

function Timer() {
  const [userTime, setUserTime] = useState("00:00:00");
  const [displayTimer, setDisplayTimer] = useState(false);
  const [h, setH] = useState(null);
  const [m, setM] = useState(null);
  const [s, setS] = useState(null);
  const intervalRef = useRef(null);
  const [timer, setTimer] = useState("00:00:00");

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  }

  function startTimer(deadline) {
    let { total, hours, minutes, seconds } = getTimeRemaining(deadline);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    } else {
      clearInterval(intervalRef.current);
    }
  }

  function clearTimer(endtime) {
    setTimer(userTime);
    if (intervalRef.current) clearInterval(intervalRef.current);
    const id = setInterval(() => {
      startTimer(endtime);
    }, 1000);
    intervalRef.current = id;
  }

  function getDeadlineTime() {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + s);
    deadline.setMinutes(deadline.getMinutes() + m);
    deadline.setHours(deadline.getHours() + h);
    console.log(deadline);
    return deadline;
  }

  function onClickStartBtn() {
    setDisplayTimer(!displayTimer);
    clearTimer(getDeadlineTime());
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }

  function onClickStopBtn() {
    setDisplayTimer(!displayTimer);
    if (intervalRef.current) clearInterval(intervalRef.current);
    clearTimer(0);
  }

  function handleHourChange(hour) {
    setH(hour.target.value);
  }

  function handleMinChange(min) {
    setM(min.target.value);
  }

  function handleSecChange(sec) {
    setS(sec.target.value);
  }

  function calculateTime(h, m, s) {
    if (h === null) {
      setH(0);
    }
    if (m === null) {
      setM(0);
    }
    if (s === null) {
      setS(0);
    }

    setUserTime(
      (h > 9 ? h : "0" + h) +
        ":" +
        (m > 9 ? m : "0" + m) +
        ":" +
        (s > 9 ? s : "0" + s)
    );
    onClickStartBtn();
  }

  return (
    <>
      {!displayTimer && (
        <>
          <div className="text-white text-7xl bg-green-700 mx-10 grid place-items-center flex grid-flow-col px-2 border-4 border-green-900 bg-opacity-60 rounded-lg">
            <input
              type="number"
              className="bg-transparent px-2 w-32"
              placeholder="00"
              maxLength="2"
              value={h}
              onChange={(e) => handleHourChange(e)}
            ></input>
            <div>:</div>
            <input
              type="number"
              className="bg-transparent px-2 w-32"
              placeholder="00"
              maxLength="2"
              value={m}
              onChange={(e) => handleMinChange(e)}
            ></input>
            <div>:</div>

            <input
              type="number"
              className="bg-transparent px-2 w-32"
              placeholder="00"
              maxLength="2"
              value={s}
              onChange={(e) => handleSecChange(e)}
            ></input>
          </div>

          <button className="mt-4 border-4 border-green-900 bg-green-700 shadow-xl text-white rounded-full p-2 hover:bg-green-500" onClick={() => calculateTime(h, m, s)}>Start</button>
        </>
      )}

      {displayTimer && (
        <>
          <div className="w-96 text-white text-left py-2 text-7xl bg-green-700 mx-10 grid place-items-center flex grid-flow-col px-2 border-4 border-green-900 bg-opacity-60 rounded-lg">
            <div className="bg-transparent px-2">{timer}</div>
          </div>
          

          <button className="mt-4 border-4 border-green-900 bg-green-700 shadow-xl text-white rounded-full p-2 hover:bg-green-500" onClick={onClickStopBtn}>Stop</button>
        </>
      )}
    </>
  );
}
export default Timer;
