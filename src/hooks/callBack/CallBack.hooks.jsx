import React, { useState, useMemo, useEffect, useCallback } from "react";

// optimize expensive operation
// Referential equality

function CallBack(){
    
    const [counter, setCounter] = useState(1);

    const result = useMemo(()=>{
    return factorial(counter);
    }, [counter]);
    
    const [name, setName] = useState("");

    const displayName = useCallback(() => {
        return name;
    }, [name])

    return(
        <>
            <h1>Factorial of {counter} is: <span>{result}</span></h1>
            <div>
                <button onClick={()=> (counter === 0) ? null : setCounter(counter - 1)}>Decrement</button>
                <button onClick={()=>setCounter(counter + 1)}>Increment</button>
            </div>
            <hr />
            <div>
                <label>Enter Name</label>
                <input 
                    type="text" 
                    placeholder="enter name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <hr />
            <DisplayName displayName={displayName} />
        </>
    )
}

const DisplayName = ({ displayName })=> {
    const [value, setValue] = useState("");
    useEffect(()=>{
        setValue(displayName());
        console.log("component rendered!")
    }, [displayName]);
    return <p>{`my name is ${value}`}</p>
};

function factorial(num){ 
    let i = 0;
    while(i < 200000000) i++;
    if(num <= 1)return 1;
    return num * factorial(num - 1);
}

export default CallBack;