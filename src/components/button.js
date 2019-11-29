import React from 'react';

const Button = (props) => {
    return (
        <input className="button" type = "button" value = {props.label} />
    );
};

export default Button;