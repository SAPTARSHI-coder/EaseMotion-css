import React, { useState,useEffect } from 'react'

function CountdownTimer() {
    const [seconds,setSeconds]=useState(60)
    useEffect(()=>{
const timer=setInterval(()=>{
    setSeconds((prev)=>{
        if(prev<=0){
            clearInterval(timer)
            return 0
        }
        return prev-1
    })

            },1000)

           
    return () => clearInterval(timer);
},[])
 const min=Math.floor(seconds/60)
 const sec=seconds%60

  return (

    <div>

                <h1 className="ease-fade-in">
                        {String(min).padStart(2, "0")} :
                        {String(sec).padStart(2, "0")}
                </h1>

                {seconds===0 && <h2 className="ease-fade-in">Time's up!</h2>}

    </div>
  )
}

export default CountdownTimer
