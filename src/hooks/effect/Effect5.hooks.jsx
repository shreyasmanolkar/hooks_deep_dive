import React, {useState, useEffect} from "react";

function Effect5(){

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        
        let isCancelled = false;

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res=> res.json())
            .then(data => {
                if(!isCancelled){
                    setPosts(data)
                }
            }
            );

            return () => {
                isCancelled = true;
            }
    },[]);

    return(
        <>
            {posts.map(post=>(
                <p key={post.id}>{post.title}</p>
            ))}
        </>
    )
}

export default Effect5;