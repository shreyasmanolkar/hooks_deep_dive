import React, { useReducer, useRef } from "react";
import { formReducer, INITIAL_STATE } from "./formReducer";

function Reducer4(){

    const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

    const tagRef = useRef();

    const handleChange = (e) => {
        dispatch({type: "CHANGE_INPUT", payload: {name: e.target.name, value: e.target.value}});
    };

    const handleTags = () => {
        const tags = tagRef.current.value.split(",");
        tags.forEach(tag => {
            dispatch({ type: "ADD_TAG", payload: tag })
        })
    }

    console.log(state);

    return(
        <div>
            <form>
                <input type="text" name="title" onChange={handleChange} placeholder="Title" /><br /><br />

                <input type="text" name="desc" onChange={handleChange} placeholder="Desc" /><br /><br />
                
                <input type="number" name="price" onChange={handleChange} placeholder="price"/><br /><br />
                
                <p>Category:</p>
                <select name="category" id="category" onChange={(handleChange)}>
                    <option value="sneakers">Sneakers</option>
                    <option value="tshirt">T-shirts</option>
                    <option value="jeans">Jeans</option>
                </select>
                
                <p>Tages:</p>
                
                <textarea ref={tagRef} placeholder="Seperate tags with commas..."></textarea><br /> 
                
                <button type="button" onClick={handleTags}>Add Tags</button>
                
                <div className="tags">
                    {
                        state.tags.map((tag) => (
                            <small key={tag} onClick={() => dispatch({type: "REMOVE_TAG", payload: tag})}>
                                {tag}
                            </small>
                        ))
                    }
                </div><br /><br />
                
                <div className="quantity">
                    <button type="button" onClick={() => dispatch({type: "DECREASE"})}>-</button>
                    <span>Quantity({state.quantity})</span>
                    <button type="button" onClick={() => dispatch({type: "INCREASE"})}>+</button>
                </div>
                
            </form>
        </div>
    )
}

export default Reducer4;