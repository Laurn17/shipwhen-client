import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import './login-form.css';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
          <div id="login">
                <form className="login-form" onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values) )}>
                
                        <label htmlFor="username">Username</label>
                        <br/>
                        <Field component={Input} type="text" name="username" id="username" validate={[required, nonEmpty]} />
                        <br/>
                        <label htmlFor="password">Password</label>
                        <br/>
                        <Field component={Input} type="password" name="password" id="password" validate={[required, nonEmpty]} />
                      <button disabled={this.props.pristine || this.props.submitting}> Log In </button>
                </form>

            <p>New to this? <span class="register"><Link to="/signup-form">Sign Up</Link></span></p>
        </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);