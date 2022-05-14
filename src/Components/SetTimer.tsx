import {Link} from 'react-router-dom'
import { useState } from "react";

interface Time{
    min:number;
    sec:number;
}

function SetTimer({min,sec}:Time){
    const[minute,setMinute]= useState(min)
    const[second,setSecond]=useState(sec)

    function addMinute(){
        setMinute(minute +1)
    }
    function removeMinute(){
        setMinute(minute -1)

    }

    function addSecond(){
        setSecond(second +1)
    }

    function removeSecond(){
        setSecond(second -1)
    }
    return(
        <section>

  
        <article>
            <button onClick={removeMinute}>-</button>
            <h2> {minute} </h2>
            <button onClick={addMinute}>+</button>
            <h3> minutes </h3>
        </article>
        <article>
            <button onClick={removeSecond}>-</button>
            <h2> {second} </h2>
            <button onClick={addSecond}>+</button>
            <h3>Seconds</h3>
        </article>
        <article>
            <Link to="/TimerCounter" state={{minute,second}}>
      
            <button>START TIMER</button>
            </Link>
        </article>
        </section>
    )
}

export default SetTimer;