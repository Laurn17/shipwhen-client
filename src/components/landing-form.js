import React from 'react';
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

    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>

          <label htmlFor="busName"></label>
          <Field component={Input} type="text" name="busName" id="busName" placeholder="Business Name"/>

          <button type="submit" disabled={this.props.pristine || this.props.submitting}>Submit</button>

      </form>
    );
  };
};

export default reduxForm({
  form: 'landing' 
})(LandingForm);

// LandingForm = reduxForm({
//   form: 'landing' 
// })(LandingForm);

// LandingForm = connect(
//   state => ({
//     busName: state.busReviews.reviews
//   })
// )(LandingForm);

// export default LandingForm