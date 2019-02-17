import React from 'react';-form
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LandingPage from './landing-page';
import {BusPage} from './bus-page';
import LoginPage from './login-page';
import SignupPage from './signup-page';

import './app.css';

// ---------------------- THIS IS MY ROOT COMPONENT ----------------------- Used in index.js
export default function App(props) {

        return (
            <Router>
                <div className="app">

                    <header>
                        <h1>
                            <Link to="/">shipwhen?</Link>
                        </h1>
                        <button>
                            <Link to="/login-page">Log In</Link>
                        </button>
                        <button>
                            <Link to="/signup-page">Sign Up</Link>
                        </button>

                        <div hidden>
                          <ul>
                            <a><li>Reviews</li></a>
                            <a><li>Settings</li></a>
                            <a><li>Logout</li></a>
                          </ul>
                        </div>

                    </header>

                    <main>

                        <Route exact path="/" component={LandingPage} />
                       // ------------ DO I NEED TO ADD BusPage IN THIS COMPONENT??? ---------
                        <Route exact path="/bus-page/:busId" component={BusPage} />                        
                        <Route exact path="/login-page" component={LoginPage} />
                        <Route exact path="/signup-page" component={SignupPage} />

                    </main>
                </div>
            </Router>
        );
};
