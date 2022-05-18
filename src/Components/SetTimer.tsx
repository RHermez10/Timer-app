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
        <section className="center">

  
        <article className="flex">
            <button className="arrow" onClick={removeMinute}>&#60;</button>
            <h2> {minute} </h2>
            <button className="arrow"  onClick={addMinute}> &#62;</button>
        </article>
              <h3> minutes </h3>
        <article className="flex">
            <button className="arrow"  onClick={removeSecond}>&#60;</button>
            <h2> {second} </h2>
            <button className="arrow"  onClick={addSecond}>&#62;</button>
        </article>
         <h3>Seconds</h3>
        <article>
            <Link to="/TimerCounter" state={{minute,second}}>
      
            <button className="startBTN">START TIMER</button>
            </Link>
        </article>
        </section>
    )
}

export default SetTimer;