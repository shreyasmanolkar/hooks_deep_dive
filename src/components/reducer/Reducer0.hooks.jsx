import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
    switch (action){
        case "add":
            return state + 1;
        
        case "sub":
            return state - 1;
        
        case "reset":
            return 0;
        
        default:
            throw new Error("Unexpected action");
    }
};

function Reducer0(){

    const [count, dispatch] = useReducer(reducer, initialState);

    return(
        <>
            <h2>{count}</h2>
            <button onClick={() => dispatch("add")}>Add</button>
            <button onClick={() => dispatch("sub")}>Sub</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
        </>       
    )
}

export default Reducer0;