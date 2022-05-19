import  { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TimesUp from "./TimesUp";

function TimerCounter(){
    const location = useLocation();
    const time = location.state as any

    const [timesup,setTimesup]= useState(false);
    const [minute,setMinute] =useState<Number |any>(time.minute);
    const [second,setSecond] =useState<Number |any>(time.second);
    
    useEffect(()=>{
        let timer=  setInterval(()=>{
           if (second > 0){
            setSecond(second-1)
         }
         if (second ===0){
             if(minute ===0){
                 clearInterval(timer)
                 setTimesup(true)
             }else{
                 setMinute(minute -1)
                 setSecond(59);
             }
         }
        },1000)
        return()=>{
            clearInterval(timer)
        }
      });

            function stop(){
                setMinute(0)
                setSecond(0)
            }

    return(
        <section>
            {timesup ? ( <TimesUp text="Times up!"/> ): 
            (<section>
                 <Link className="link" to="/AnalogTimer" state={{minute,second}}>
            <h1 className="link">Change to Analog timer </h1>
            </Link>
            <article className="time">
                {minute}:
                {second}
       
                <article>

            
                <button className="abortTime" onClick={stop}>ABORT TIMER </button>
                    </article>
                    </article>
                </section>
                  
                )
            }
        
        </section>
    )
}

export default TimerCounter;