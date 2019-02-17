import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, email} from '../validators';
import {submitReview} from '../actions/bus-reviews';


// ---------------- THIS FORM IS FOR USERS TO ADD A BUSINESS SHIPPING REVIEW -------------- Used in components/bus-page
export class reviewForm extends React.Component {
    onSubmit(values) {
       return this.props.dispatch(submitReview(values));
    }

    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Message submitted successfully
                </div>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }

        return (
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {successMessage}
                {errorMessage}
                <Field
                    name="name"
                    type="text"
                    component={Input}
                    label="Name"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="email"
                    type="email"
                    component={Input}
                    label="Email address"
                    validate={[required, nonEmpty, email]}
                />
                <Field
                    name="message"
                    element="textarea"
                    component={Input}
                    label="Message"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="magicWord"
                    type="text"
                    component={Input}
                    label="What's the magic word?"
                    validate={[required, nonEmpty]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Send message
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'review',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('review', Object.keys(errors)[0]))
})(reviewForm);