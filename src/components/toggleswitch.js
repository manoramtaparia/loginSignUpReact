import React from 'react';

const Toggleswitch = (props) => {
    return(
        <div value={props.value} className="toggletab" onClick={props.handleClick}>
            {props.value}
        </div>
    );
};

export default Toggleswitch;