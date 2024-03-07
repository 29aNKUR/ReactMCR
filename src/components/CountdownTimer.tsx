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
  },[])
    


  return (
    <div>
      <h1>Stopwatch</h1>
      <h1>{time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePauseResume}>{isActive ? 'Pause' : 'Resume'}</button>
      <button onClick={handleStop}>Stop</button>

    </div>
  )
}

export default CountdownTimer