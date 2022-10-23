import React, { useState, useMemo } from "react";

// optimize expensive operation
// Referential equality

function Memo(){

    const [counter, setCounter] = useState(1);
    const result = useMemo(()=>{
        return factorial(counter);
    }, [counter]);
    const [name, setName] = useState("");

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
            <DisplayName name={name}/>
        </>
    )
}

const DisplayName = React.memo(({name})=> {
    console.log("rendered");
    return <p>{`my name is ${name}`}</p>
});

function factorial(num){ 
    let i = 0;
    while(i < 200000000) i++;
    if(num <= 1)return 1;
    return num * factorial(num - 1);
}

export default Memo;