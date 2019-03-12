import React from 'react';
import { connect } from 'react-redux';
import BusPage from './bus-page';
import { Field, reduxForm } from 'redux-form';
import Input from './input';
import {getBus} from '../actions/bus-reviews';

// --------- THIS FORM IS FOR THE USER TO ENTER A BUS NAME TO THEN RETRIVE IT'S REVIEWS --------
export class LandingForm extends React.Component {

  onSubmit(values) {
    console.log("Searching Business");
    this.props.dispatch(getBus(values.busName));
  }

  render() {
// if(busName === busStateName) {
//   <Redirect to = "/BusPage" />
// }
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>

          <label htmlFor="busName"></label>
          <Field component={Input} type="text" name="busName" id="busName" placeholder="Business Name"/>

          <button type="submit" disabled={this.props.pristine || this.props.submitting}>Submit</button>

      </form>
    );
  };
};

// IMPORTING BUS NAME FROM STATE FOR CONDITIONAL LOGIC UNDER RENDER
LandingForm = reduxForm({
  form: 'landing' 
})(LandingForm);

LandingForm = connect(
  state => ({
    busStateName: state.busReviews.reviews.bus_name
  })
)(LandingForm);

export default LandingForm