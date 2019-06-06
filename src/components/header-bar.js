import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {fetchReviews} from '../actions/bus-reviews';

import './header-bar.css';

export class HeaderBar extends React.Component {
    getReviews(username) {
        console.log("retrieving reviews");
        return this.props.dispatch(fetchReviews(username));
    }

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {

        let userIcon;

        if (this.props.loggedIn) {
            const username = this.props.created_by.username;
            userIcon = 
              <div>
                <button className="bthree" onClick={() => this.getReviews(username)}>Reviews</button>
                <button className="btwo" onClick={() => this.logOut()}>Log out</button>
              </div>
        }
      
        let loginSignup;
        if (this.props.loggedIn === false) {
            loginSignup =
                <div>
                    <button className="bone">
                        <Link to="/login-page">Log In</Link>
                    </button>
                    <button className="btwo">
                        <Link to="/signup-page">Sign Up</Link>
                    </button>
                </div>
        }

        return (
                <div className="header-bar">
                    <h1>
                        <Link to="/">shipwhen?</Link>
                    </h1>
                    <div className="headerButtons">
                        {loginSignup}
                        {userIcon}
                    </div>
                </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.currentUser !== null,
        created_by: state.auth.currentUser
    }
};


export default connect(mapStateToProps)(HeaderBar);