import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import './login-form.css';


// ---------------- THIS IS THE FORM FOR USERS TO LOGIN --------------

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
                    this.onSubmit(values))}>
                    {error}
                    <label htmlFor="username">Username</label>
                    <br/>
                    <Field component={Input} type="text" name="username" id="username" placeholder="demo" validate={[required, nonEmpty]} />
                    
                    <label htmlFor="password">Password</label>
                    <br/>
                    <Field component={Input} type="password" name="password" id="password" placeholder="DemoUser"validate={[required, nonEmpty]} />
                    <button disabled={this.props.pristine || this.props.submitting}> Log In </button>
                </form>
            </div>
        );
    };
};

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);