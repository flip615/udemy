import React from 'react';

const validation = (props) => {
    return (
        <div>
            {props.textLength > 4 ? <p>Text long enough</p>
            : <p>Not long enough</p>
            }        
        </div>
    )
};

export default validation;