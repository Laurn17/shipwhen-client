import React from 'react';
import { connect } from 'react-redux';
import { BusPage } from './bus-page';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import Input from './input';
import {getBus} from '../actions/bus-reviews';
import {Redirect} from 'react-router-dom'; 

let name;
// --------- THIS FORM IS FOR THE USER TO ENTER A BUS NAME TO THEN RETRIVE IT'S REVIEWS --------
class SearchForm extends React.Component {


  onSubmit(values) {
    console.log("Searching Business");
    this.props.dispatch(getBus(values.busName));
    const name = values.busName;
    console.log(name);
  }


  render() {

// this works but I have to figure out how to clear the state or name variable so we're not stuck in this loop of constantly being re-directed
      if (name === this.props.data) {
       return <Redirect to ="/reviews/name" />
      }


    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>

          <label htmlFor="busName"></label>
          <Field component={Input} type="text" name="busName" id="busName" placeholder="Business Name"/>

          <button type="submit" disabled={this.props.pristine || this.props.submitting} >
          Submit</button>

      </form>
    );
  };
};

// IMPORTING BUS NAME FROM STATE FOR CONDITIONAL LOGIC UNDER RENDER
const mapStateToProps = state => {
  return {
    data: state.busReviews.reviews.bus_name
  }
}

SearchForm = connect(
  mapStateToProps
)(SearchForm);


export default reduxForm({
  form: 'search' 
})(SearchForm);