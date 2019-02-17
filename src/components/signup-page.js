import React from 'react';
import SignupForm from './signup-form';
import './signup-page.css';

export default class SignUpPage extends React.Component {
	render() {
	    return (
	        <div className="signup-page">
            <div className="col-6">
                <h1>Find Actual Business Shipping Times.</h1>
              <img src="https://cdn2.iconfinder.com/data/icons/blue-transports-3/262/Untitled-2-512.png" />
            </div>
            <div className="col-6">
              <h2>sign up to post helpful reviews</h2>
              <SignupForm/>  
            </div>
	        </div>
	    );
	};
};