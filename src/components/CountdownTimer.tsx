import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState(5400);
  const [isActive, setIsActive] = useState(false);

  const handleStart = () => {
    setTime(5400);
    setIsActive(true);
  };

  const handlePauseResume = () => {
    setIsActive((prev) => !prev);
  };

  const handleStop = () => {
    setTime(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval: any;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => {
          if (time > 0) {
            return time - 1;
          } else {
            setIsActive(false);
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (time: any) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen">
    <h1 className="font-bold text-4xl">Stopwatch</h1>
    <h1 className="font-semibold text-2xl mt-4 mb-4">{formatTime(time)}</h1>
    <div className="flex justify-center mt-3">
      <button
        onClick={handleStart}
        className="bg-blue-800 text-white px-4 py-1 rounded-lg text-lg font-bold"
      >
        Start
      </button>
      <button
        onClick={handlePauseResume}
        className="ml-3 bg-blue-800 text-white px-4 py-1 rounded-lg text-lg font-bold"
      >
        {isActive ? "Pause" : "Resume"}
      </button>
      <button
        onClick={handleStop}
        className="ml-3 bg-blue-800 text-white px-4 py-1 rounded-lg text-lg font-bold"
      >
        Stop
      </button>
    </div>
  </div>
  );
};

export default CountdownTimer;
