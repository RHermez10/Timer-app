import  { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function TimerCounter(){
    const location = useLocation();
    const time = location.state as any

 
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
 
    return(
        <section>
            {minute}:
            {second}
        </section>
    )
}

export default TimerCounter;