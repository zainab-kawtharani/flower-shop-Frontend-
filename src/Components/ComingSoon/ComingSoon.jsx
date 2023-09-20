import {React,useEffect,useRef,useState} from 'react'
import './ComingSoon.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'

const ComingSoon = () => {
  const navigate=useNavigate();
  const[timerDays,setTimerDays]=useState('00');
  const[timerHours,setTimerHours]=useState('00');
  const[timerMinutes,setTimerMinutes]=useState('00');
  const[timerSeconds,setTimerSeconds]=useState('00');

  let interval =useRef();

  const startTimer = ()=>{
    const countDownDate = new Date('January 1 2024 00:00:00').getTime();
    interval =setInterval(() => {
      const now =new Date().getTime();
      const distance =countDownDate -now;
      const days =Math.floor(distance/(1000*60*60*24));
      const hours =Math.floor((distance%(1000*60*60*24)/(100*60*60)));
      const minutes =Math.floor((distance%(1000*60*60*24))/(1000*60));
      const seconds=Math.floor( ( distance % (1000*60 ) ) /  1000 );

      if(distance<0){
         clearInterval(interval.current);
      }else{

        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)

      }
      


    }, 1000);
  };

  useEffect(()=>{
    startTimer()
    return ()=>{
      clearInterval(interval.current)
    };
  });

  return (
    <div className='comingsoon'>
      <div className='timer'>
        <div className='timer-comingsoon'>
            <h2>Countdown Timer</h2>
            <p>Countdown to the special day!!!</p>
        </div>
        <div  className='grid-time'>
            <div>
                <p>{timerDays}</p>
                <p><small>Days</small></p>
            </div>
            <span>:</span>
            <div>
                <p>{timerHours}</p>
                <p><small>Hours</small></p>
            </div>
            <span>:</span>
            <div>
                <p>{timerMinutes}</p>
                <p><small>Minutes</small></p>
            </div>
            <span>:</span><div>
                <p>{timerSeconds}</p>
                <p><small>Seconds</small></p>
            </div>
        </div>
        
      </div>
     
    </div>
  )
}

export default ComingSoon
