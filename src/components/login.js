import React from 'react';
import Inputfield from './inputfield';
import Button from './button';

const Login = () => {
    return (
        <div className="login-form">
                <Inputfield type="text" title="Email/Username" placeholder="Email or Username" />
                <Inputfield type="password" title="Password" placeholder="Enter password" />
            <Button label="LOG IN" />
        </div>
    );
};

export default Login;