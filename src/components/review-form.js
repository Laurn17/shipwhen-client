import React from 'react';
import {reduxForm, Field, SubmissionError, focus, formValueSelector} from 'redux-form';
import Input from './input';
import Select from './select';
import {required, nonEmpty} from '../validators';
import {submitReview} from '../actions/bus-reviews';
import { connect } from 'react-redux';

import './review-form.css';


// ---------------- THIS FORM IS FOR USERS TO ADD A BUSINESS SHIPPING REVIEW -------------- Used in components/bus-page
class AddReviewForm extends React.Component {
    onSubmit(values, user) {
        console.log("submitting review form");
        this.props.toggleForm();
        return this.props.dispatch(submitReview(values, user));
    }

    render() {

        const user = this.props.created_by.username;
        function titleCase(str) {
           var splitStr = str.toLowerCase().split(' ');
           for (var i = 0; i < splitStr.length; i++) {
               // You do not need to check if i is larger than splitStr length, as your for does that for you
               // Assign it back to the array
               splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
           }
           // Directly return the joined string
           return splitStr.join(' '); 
        }
        
        return (
            <div>

                <form id="reviewForm" className="review-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values, user))}>

                    <label htmlFor="bus_name">Business Name</label>
                    <Field component={Input} type="text" name="bus_name" placeholder="Exact Business Name" validate={[required, nonEmpty]} normalize={titleCase} />
                    
                    <label htmlFor="delivery">Delivery Type</label>
                    <Field component={Select} type="select" name="delivery" validate={[required, nonEmpty]}
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

                    { this.props.arrive && (
                        <>
                            <label id="arrive-date-label" htmlFor="arrive_date">Arrival Date</label>
                            <Field component={Input} type="Date" name="arrive_date" />
                        </>
                    ) }     

                    <button type="submit" disabled={this.props.pristine || this.props.submitting}>
                        Submit
                    </button>
                </form>
            </div>
        );
    };
};

AddReviewForm = reduxForm({
  form: 'reviewForm'
})(AddReviewForm);

const selector = formValueSelector('reviewForm');

const mapStateToProps = state => {
  return {
    created_by: state.auth.currentUser,
    arrive: selector(state, 'arrive')
  }
}

export default connect(
  mapStateToProps
)(AddReviewForm);
