import React, { Component } from 'react';
import './Login.css';
class Login extends Component {

    state = {
        email : '',
        password : '',
    }

    emailHandler = (props) => {
        this.setState({email:props.target.value});
        console.log(this.state.email);

    }
    passwordHandler = (props) => {
        this.setState({password:props.target.value});
        console.log(this.state.password);
    }
    loginButtonHandler = () => {
        fetch('http://localhost:3000',{
            method: 'post',
            headers : { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        }).then(res => res.json()).then(data => {
            console.log(data);
            if(data === 'success') {
                console.log('success');
            } else {
                console.log('oh no',data);
            }
        })
    }
    forgotPasswordHandler = () => {

    }

    render() {
        return(   
                <div className='LoginBox'>
                <p><input type='text' placeholder='Email' className='Input' onChange={(event) => this.emailHandler(event)}/></p>
                <p><input type='password' placeholder='Password' className='Input' onChange={(event) => this.passwordHandler(event)}/></p>
                <div className='alignButton'>    
                    <button className='Button' onClick={this.loginButtonHandler}>Login</button>
                    <button className='Button' onClick={this.signUpHandler}>Sign-Up</button>
                    <p className='remember'><input type='checkbox' />Remember me</p>
                    <button className='ButtonF' onClick={this.forgotPasswordHandler}>Forgot Password</button>
                </div>
                
                </div>
        );
    }

}
export default Login;