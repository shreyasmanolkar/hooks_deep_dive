import React, {useEffect, useState} from "react";

function Effect3(){
     
    const [number, setNumber] = useState(0);

    // useEffect(()=>{
    //     console.log("effect");
    //     setInterval(()=>{
    //         setNumber(number + 1);
    //     }, 1000);
    // }, [number]);

    // useEffect(()=>{
    //     console.log("effect");
    //     setInterval(()=>{
    //         setNumber(prev => prev + 1);
    //     }, 1000);
    // }, []);

    useEffect(()=>{
        console.log("effect");
        
        const interval = setInterval(()=>{
            setNumber(prev => prev + 1);
        }, 1000);

        return ()=>{
            clearInterval(interval);
        }
        
    }, []);

    return(
        <>
            {number}
        </>
    )
}

export default Effect3;