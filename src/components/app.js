import React from 'react';-form
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LandingPage from './landing-page';
import BusPage from './bus-page';
import LoginForm from './login-form';
import SignUp from './sign-up'

import './app.css';

export default function App(props) {
    return (
        <Router>
            <div className="app">

                <header>
                    <h1>
                        <Link to="/">shipwhen?</Link>
                    </h1>
                    <button>
                        <Link to="/login-form">Log In</Link>
                    </button>
                    <button>
                        <Link to="/sign-up">Sign Up</Link>
                    </button>

                </header>
                <main>

                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/bus-page/:busId" component={BusPage} />
                    <Route exact path="/login-form" component={Login-Form} />
                    <Route exact path="/sign-up" component={SignUp} />

                </main>
            </div>
        </Router>
    );
};