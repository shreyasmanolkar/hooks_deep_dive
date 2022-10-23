import React, { useState, useRef } from "react";

function Ref(){

    const [myNum, setMyNum] = useState(0);

    const inputOne = useRef()
    const inputTwo = useRef()

    const getNumBox = () => {
        console.log("Hello");
        console.log(inputOne.current);
        inputOne.current.style.width = "500px";
    };
    
    const getTextBox = () => {
        console.log("World")
        console.log(inputTwo.current);
    }

    return(
        <>
            <input ref={inputOne} type="number" value={myNum} onChange={e => setMyNum(e.target.value) } style={{width: "100px"}} />
            <input ref={inputTwo} type="text" value={myNum} onChange={e => setMyNum(e.target.value)} />
            
            <h3>Value is: {myNum}</h3>

            <button onClick={() => getNumBox()} >Rupees</button>
            <button onClick={()=> getTextBox()} >Dollars</button>
        </>
    )
}

export default Ref;