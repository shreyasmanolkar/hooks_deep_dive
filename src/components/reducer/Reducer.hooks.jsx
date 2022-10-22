import React, { useState } from "react";

function Reducer(){

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState({});
    const [error, setError] = useState(false);

    const handleFetch = () => {

        setLoading(true);
        setError(false);

        // fetch("")
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => res.json())
        .then(data => {
            setPosts(data);
            setLoading(false);
        })
        .catch((err)=>{
            setError(true);
            setLoading(false);
        })
    }

    return(
        <>
            <button onClick={handleFetch}>
                {loading ? "Wait..." : "Fetch the Post" }
            </button>
            <p>{posts?.title}</p>
            <span>{ error && "something went wrong!" }</span>
        </>
    )
}

export default Reducer;