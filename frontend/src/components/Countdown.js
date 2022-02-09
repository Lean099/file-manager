import { useContext, useState, useRef, useEffect } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import { Context } from './FileManager'
import { TYPES } from '../actions/viewAction'

export const Countdown = ()=>{

  const context = useContext(Context)
  const [num, setNum] = useState(5)
  const [pause, setPause] = useState(false)
  let intervalRef = useRef();
  let numRef = useRef(num)

  useEffect(() => {
      setPause(false)
      intervalRef.current = setInterval(decreaseNum, 1000);
      if(numRef.current==1){
        clearInterval(intervalRef.current)
        context.viewDispatch({type: TYPES.COUNTDOWN})
        if(context.filesViewState.delete_one_file){
          context.viewDispatch({type: TYPES.DELETE_ONE_FILE})
        }
      }
      return () => clearInterval(intervalRef.current);
    }, [num]);

  const decreaseNum = () => {
    setNum((prev) => prev - 1)
    numRef.current = num
  };

  return(
    <div id="countdownDiv">
      <CountdownCircleTimer
        isPlaying
        duration={5}
        colors='#198754'
        size={28}
        strokeWidth={3}
        >
        {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
    </div>
  )
}