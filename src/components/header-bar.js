import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let userIcon;
        if (this.props.loggedIn) {
            userIcon = 
              <div>
                <button>Reviews</button>
                <button onClick={() => this.logOut()}>Log out</button>
              </div>
        }
      
        let loginSignup;
        if (this.props.loggedIn === false) {
            loginSignup =
                <div>
                    <button>
                        <Link to="/login-page">Log In</Link>
                    </button>
                    <button>
                        <Link to="/signup-page">Sign Up</Link>
                    </button>
                </div>
        }

        return (
                <div className="header-bar">
                    <h1>
                        <Link to="/">shipwhen?</Link>
                    </h1>
                    {loginSignup}
                    {userIcon}
                </div>
        );
    };
};

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);