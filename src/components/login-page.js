import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import LoginForm from './login-form';
import './login-page.css';

export function LoginPage(props) {
	
	if (props.loggedIn) {
   		return <Redirect to="/" />;
    }
	    return (
	        <div className="login-page">
	            <h1>Welcome.</h1>
	            <p><b> Leaving a Shipping Time Review Helps Users Like You! </b></p>
	            <LoginForm /> 
	        </div>
	    );

};

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);