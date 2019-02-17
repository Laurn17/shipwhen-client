import React from 'react';
import LoginForm from './login-form';
import './login-page.css';

export default class LoginPage extends React.Component {
	render() {
	    return (
	        <div className="login-page">
	            <h1>Welcome.</h1>
	            <p><b> Leaving a Shipping Time Review Helps Users Like You! </b></p>
	            <LoginForm/>
	            
	        </div>
	    );
	};
};