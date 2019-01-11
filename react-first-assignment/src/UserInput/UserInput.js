import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <p>User input:</p>
            <input onChange={props.changed} type="text" value={props.currentName}/>
        </div>
    )
};

export default userInput;