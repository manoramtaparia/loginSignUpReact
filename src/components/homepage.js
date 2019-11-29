import React from 'react';
import Signup from './signup'
import Login from './login'
import Toggleswitch from './toggleswitch'

class Homepage extends React.Component {
    
    constructor(props){
        super(props);
        this.state = { showSignUpComponent: true,
            showLoginComponent: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.displaySignUp = this.displaySignUp.bind(this);
        this.displayLogIn = this.displayLogIn.bind(this);
    }
    
    
    displaySignUp = () => {
        this.setState({
            showSignUpComponent: true,
            showLoginComponent: false
        })
    }
    
    displayLogIn = () => {
        this.setState({
            showSignUpComponent: false,
            showLoginComponent: true
        })
    }
    
    handleClick(event) {
        const value = event.target.textContent;
        switch(value) {
            case "Sign Up": {
                    this.displaySignUp();
                    break;
            }
            case "Log In": {
                    this.displayLogIn();
                    break;
                }  
            default: console.log("others"); 
        }
    }
    
    render() {
        return(
            <div className="container">
                <Toggleswitch value="Sign Up" handleClick = {this.handleClick} />
                <Toggleswitch value="Log In" handleClick={this.handleClick} />
                {this.state.showSignUpComponent && <Signup displaySignUp = {this.displaySignUp} />}
                {this.state.showLoginComponent && <Login displayLogIn = {this.displayLogIn} />}
            </div>
        );
    }
}

export default Homepage;