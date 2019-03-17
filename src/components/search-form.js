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
// I WANT TO CLEAR THE STATE BEFORE AND/OR AFTER THE USER SEARCHES A BUS
// componentWillMount(){
//   state = undefined
// }
// componentDidMount() {
//   state = undefined
// }

  onSubmit(values) {
    const name = values.busName;
    console.log("Searching for Business: " + name);
    this.props.dispatch(getBus(values.busName));
  }

  render() {

// THIS SHOULD WORK IF I CAN FIGURE OUT HOW TO CLEAR THE STATE
      // if (this.props.noData === true) {
      //   return <Redirect to ="/not-found" />
      // }
      // if (this.props.error === "Something went wrong") {
      //   return <Redirect to ="/not-found" />
      // }
      // else {
      //   return <Redirect to ="/reviews/name" />
      // }

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
    data: state.busReviews.reviews.bus_name,
    noData: state.busReviews.noData,
    error: state.busReviews.error
  }
}

SearchForm = connect(
  mapStateToProps
)(SearchForm);


export default reduxForm({
  form: 'search' 
})(SearchForm);