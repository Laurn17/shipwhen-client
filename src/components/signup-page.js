import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import SignupForm from './signup-form';
import './signup-page.css';

export function SignUpPage(props) {
	if (props.loggedIn) {
    return <Redirect to="/" />;
  }
	    return (
	        <div className="signup-page">
            <div className="col-6">
                <h1>Find Actual Business Shipping Times.</h1>
              <img alt="shipping truck" src="https://cdn2.iconfinder.com/data/icons/blue-transports-3/262/Untitled-2-512.png" />            </div>
            <div className="col-6">
              <h2>sign up to post helpful reviews</h2>
              <SignupForm/>  
            </div>
	        </div>
	    );

};

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignUpPage);