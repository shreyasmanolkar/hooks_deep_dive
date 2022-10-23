import React, { useState, useEffect } from "react";

function Clock(){

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        let timeId = setInterval(()=>{
            setTime(new Date());
        }, 1000)

        return () =>{
            clearInterval(timeId);
        }
    });

    return(
        <>
            <h1 style={{fontSize: "8rem"}}>{time.toLocaleTimeString()}</h1>
        </>
    )
}

export default Clock;