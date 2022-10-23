import React, { useState } from "react";

function State(){

    const [number, setNumber] = useState(0);

    const increase = () => {
        setNumber(number + 1);
    }

    // const increaseAsync = () => {        
    //  cause problems as it is going to add number + 1.
    //  but number can change between setTimeout of 2 seconds
    //     setTimeout(increase,2000);
    // }

    const increaseAsync = () => {
        setTimeout( () => setNumber((prevVal) => prevVal + 1), 2000);
    }

    return(
        <>
            <button onClick={increase}>Increase</button>
            <button onClick={increaseAsync}>Increase Async</button>
            <h1>{number}</h1>
        </>
    )
};

export default State;