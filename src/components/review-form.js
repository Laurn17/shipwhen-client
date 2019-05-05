import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import {submitReview} from '../actions/bus-reviews';


// ---------------- THIS FORM IS FOR USERS TO ADD A BUSINESS SHIPPING REVIEW -------------- Used in components/bus-page
export class AddReviewForm extends React.Component {
    onSubmit(values) {
        // const {username, password, firstName, lastName, email} = values;
        // const user = {username, password, firstName, lastName, email};
       return this.props.dispatch(submitReview(values));
    };

    render() {
        return (
            <div id="review">
            // THESE ARE TEMPORARY ADD REVIEW FIELDS, NEED TO UPDATE WITH ACTUAL
                <form
                    className="review-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values))}>

                    <label htmlFor="firstName">First Name</label>
                    <Field component={Input} type="text" name="firstName" />
                    <label htmlFor="lastName">Last Name</label>
                    <Field component={Input} type="text" name="lastName" />
                    <label htmlFor="username">Username</label>
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <label htmlFor="email">E-mail</label>
                    <Field component={Input} type="email" name="email" validate={[required]} />
                    <label htmlFor="password">Password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        validate={[required, isTrimmed]}
                    />
                    <button type="submit" disabled={this.props.pristine || this.props.submitting}>
                        Register
                    </button>
                </form>
            </div>
        );
    };
};

export default reduxForm({
    form: 'review',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('review', Object.keys(errors)[0]))
})(AddReviewForm);