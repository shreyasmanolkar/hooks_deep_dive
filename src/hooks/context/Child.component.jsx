import React, {useContext} from "react";
import { UserContext } from "./Context2.hook";
import GrandChild from "./GrandChild.component";

function Child(){

    const user = useContext(UserContext);

    return(
        <>
            <h1>This is Child Component</h1>
            <p>This is the proof: <br /> {user.firstName} <br /> {user.lastName} <br /> { user.age } <br /> { user.subscribed.toString() }</p>
            <GrandChild/>
        </>
    )
}

export default Child;