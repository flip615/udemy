import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>First Paragraph by {props.username}</p>
            <p>Second Paragraph</p>
        </div>
    )
};

export default userOutput;