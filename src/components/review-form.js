import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import Select from './select';
import {required, nonEmpty} from '../validators';
import {submitReview} from '../actions/bus-reviews';
import { connect } from 'react-redux';

// import './review-form.css';


// ---------------- THIS FORM IS FOR USERS TO ADD A BUSINESS SHIPPING REVIEW -------------- Used in components/bus-page
class AddReviewForm extends React.Component {
    onSubmit(values, user) {
        console.log("submitting review form");
      return this.props.dispatch(submitReview(values, user));
    }

    render() {
        let errorMessage;
        let successMessage;
        if (this.props.submitSucceeded === false) {
            errorMessage = (
                <div className="message message-error">
                    Please try again
                </div>
            );
        }
        else if (this.props.submitSucceeded === true) {
           successMessage = (
                <div className="message message-success">
                    Review submitted successfully
                </div>
            ); 
        }

        const user = this.props.created_by.username;

        return (
            <div id="review">

                <form className="review-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values, user))}>
                    {errorMessage}
                    {successMessage}
                    <label htmlFor="bus_name">Business Name</label>
                    <Field component={Input} type="text" name="bus_name" validate={[required, nonEmpty]} />
                    
                    <label htmlFor="delivery">Delivery Type</label>
                    <Field component={Select} type="select" name="delivery" validate={[required]}
                        options={{
                            Standard: "Standard",
                            "First-class": "First Class",
                            "Two-day": "Two Day",
                            Overnight: "Overnight"
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

const mapStateToProps = state => {
  return {
    created_by: state.auth.currentUser,
    submitSucceeded: state.busReviews.submitSucceeded
  }
}

AddReviewForm = connect(
  mapStateToProps
)(AddReviewForm);


export default reduxForm({
  form: 'review'
})(AddReviewForm);
