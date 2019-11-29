import React from 'react';
import Inputfield from './inputfield';
import Button from './button';
import Error from './error';

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // firstNameError: false,
            // lastNameError: false,
            // usernameError: false,
            // emailError: false,
            // passwordError: false,
            // confirmPasswordError: false,
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        //console.log("hello");
        //debugger;
        //const value = event.target.value;
        //debugger;
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.name);
        console.log(event.target.value);
        //debugger;
    }
    
    onSubmit() {
        
     }

    render() {
        return (
            <div className="signup-form">
                <Inputfield name="firstName" emptyErrorStatus = {this.state.firstNameError} type="text" title="First Name" placeholder="Enter first name" onChange={this.handleChange}/>
                <Inputfield name="lastName" emptyErrorStatus = {this.state.lastNameError} type="text" title="Last Name" placeholder="Enter last name" onChange={this.handleChange}/>
                <Inputfield name="username" emptyErrorStatus = {this.state.usernameError} type="text" title="Username" placeholder="Choose a username" onChange={this.handleChange}/>
                <Inputfield name="email" emptyErrorStatus = {this.state.emailError} type="text" title="Email" placeholder="Enter your email address" onChange={this.handleChange}/>
                <Inputfield name="password" emptyErrorStatus = {this.state.passwordError} type="password" title="Password" placeholder="Enter password" onChange={this.handleChange}/>
                <Inputfield name="confirmPassword" emptyErrorStatus = {this.state.confirmPasswordError} type="password" title="Confirm Password" placeholder="Enter password again" onChange={this.handleChange}/>
                <Error message="Required field not entered" />
                <Button label="SIGN UP" onSubmit={this.onSubmit} />
        </div>
        );
    }
}

export default Signup;