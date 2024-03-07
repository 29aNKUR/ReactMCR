import { useEffect, useState } from "react"


const CountdownTimer = () => {

  const [time, setTime] = useState(5400);
  const [isActive, setIsActive] = useState(false);

  const handleStart = () => {
    setTime(5400);
    setIsActive(true);
  }

  const handlePauseResume = () => {
    setIsActive((prev) => !prev);
  }

  
  const handleStop = () => {
    setTime(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval: any
    if(isActive){
      interval = setInterval(() => {
        setTime((time) => {
          if(time > 0) {
            return time - 1;
          } else {
            setIsActive(false);
            return 0;
          }
        })
      },1000)
    }

    return () => clearInterval(interval);
  },[isActive])
    

  const formatTime = (time: any) => {
    const hours = Math.floor(time / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }


  return (
    <div>
      <h1>Stopwatch</h1>
      <h1>{formatTime(time)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePauseResume}>{isActive ? 'Pause' : 'Resume'}</button>
      <button onClick={handleStop}>Stop</button>

    </div>
  )
}

export default CountdownTimer