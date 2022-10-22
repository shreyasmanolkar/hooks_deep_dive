import React, { useReducer } from "react";
import { ACTION_TYPES } from "./postActionTypes";
import { INITIAL_STATE, postReducer } from "./PostReducer";

function Reducer(){

    const [state, dispatch] =  useReducer(postReducer, INITIAL_STATE)

    const handleFetch = () => {

        dispatch({type: ACTION_TYPES.FETCH_START});
        
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => res.json())
        .then(data => {
            dispatch({type: ACTION_TYPES.FETCH_SUCCESS , payload: data});
        })
        .catch((err)=>{
            dispatch({type: ACTION_TYPES.FETCH_ERROR});
        })
    }

    return(
        <>
            <button onClick={handleFetch}>
                {state.loading ? "Wait..." : "Fetch the Post" }
            </button>
            <p>{ state.posts?.title}</p>
            <span>{ state.error && "something went wrong!" }</span>
        </>
    )
}

export default Reducer;