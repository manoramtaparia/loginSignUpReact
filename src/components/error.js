import React from 'react';

const Error = (props) => {
    return(
        <div className="errorMessage">
            {props.message}
        </div>
    );
};

export default Error;