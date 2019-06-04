import React from 'react';

const charComp = (props) => {
    return(
        <div style={props.style} onClick={props.click}>
            {props.charInput}
        </div>
    )
}

export default charComp;