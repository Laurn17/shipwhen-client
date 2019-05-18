import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import BusPage from './bus-page';
import NoBusError from './no-bus-error';
import LoginPage from './login-page';
import SignupPage from './signup-page';

import './app.css';

// ---------------------- THIS IS MY ROOT COMPONENT ----------------------- Used in index.js
export default function App(props) {

    return (
        <Router history={history}>
            <div className="app">
                <header>
                    <HeaderBar />
                </header>

                <main>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/reviews/:bus_name" component={BusPage} />
                    <Route exact path="/no-business" component={NoBusError} />                        
                    <Route exact path="/login-page" component={LoginPage} />
                    <Route exact path="/signup-page" component={SignupPage} />
                </main>
            </div>
        </Router>
    );
};
