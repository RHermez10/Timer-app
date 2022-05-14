import  { useState } from "react";
import { useLocation } from "react-router-dom";

function TimerCounter(){
    const location = useLocation();
    const time = location.state as any

    const [fulltime,setFulltime] =useState<Number |any>();


    return(
        <section>
            {time.minute}:
            {time.second}

        </section>
    )
}

export default TimerCounter;