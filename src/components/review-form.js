import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import Select from './select';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import {submitReview} from '../actions/bus-reviews';

import './review-form.css';


// ---------------- THIS FORM IS FOR USERS TO ADD A BUSINESS SHIPPING REVIEW -------------- Used in components/bus-page
export class AddReviewForm extends React.Component {
    onSubmit(values) {
        console.log("submitting review form");
      return this.props.dispatch(submitReview(values));
    }

    render() {
        // let successMessage;
        // if (this.props.submitSucceeded) {
        //     successMessage = (
        //         <div className="message message-success">
        //             Message submitted successfully
        //         </div>
        //     );
        // }

        return (
            <div id="review">

                <form className="review-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>

                    <label htmlFor="bus_name">Business Name</label>
                    <Field component={Input} type="text" name="bus_name" validate={[required, nonEmpty]} />
                    
                    <label htmlFor="delivery">Delivery Type</label>
                    <Field component={Select} type="select" name="delivery" validate={[required]}
                        options={{
                            standard: "Standard",
                            firstclass: "First Class",
                            twoday: "Two Day"
                        }}
                    />
                    
                    <label htmlFor="order_date">Ordered On</label>
                    <Field component={Input} type="Date" name="order_date" validate={[required, nonEmpty]} />
                    
                    <label htmlFor="estimate_date">Estimated to Arrive</label>
                    <Field component={Input} type="Date" name="estimate_date" validate={[required, nonEmpty]} />
                                 
                    <label htmlFor="arrive">Package Arrived</label>
                    <Field component={Input} type="checkbox" name="arrive" />

                    <label htmlFor="arrive_date">Arrival Date</label>
                    <Field component={Input} type="Date" name="arrive_date" />

                    <button type="submit" disabled={this.props.pristine || this.props.submitting}>
                        Submit
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