import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {getBus} from '../actions/bus-reviews';


// --------- THIS FORM IS FOR THE USER TO ENTER A BUS NAME TO THEN RETRIVE IT'S REVIEWS --------
export class LandingForm extends React.Component {
     onSubmit(values) {
        return this.props.dispatch(getBus(values));
    }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <div>
          <label htmlFor="busName"></label>
          <Field name="busName" id="busName" component="input" type="text" placeholder="Business Name"/>
        </div>
        
        <div>
          <button type="submit" disabled={this.props.pristine || this.props.submitting}>Submit</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'landing' 
})(LandingForm);