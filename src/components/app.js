import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HeaderBar from './header-bar';
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
                        <HeaderBar />
                    </header>

                    <main>

                        <Route exact path="/" component={LandingPage} />

                        <Route exact path="/reviews/:bus_name" component={BusPage} />                        
                        <Route exact path="/login-page" component={LoginPage} />
                        <Route exact path="/signup-page" component={SignupPage} />

                    </main>
                </div>
            </Router>
        );
};
