import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import Input from './input';
import history from './history';

// --------- THIS FORM IS FOR THE USER TO ENTER A BUS NAME TO THEN RETRIVE IT'S REVIEWS --------
class SearchForm extends React.Component {

  onSubmit(values) {
    const name = values.busName;
    console.log("Searching for shipping-time reviews on Business: " + name);
    history.push(`/reviews/${name}`);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <label htmlFor="busName"></label>
        <Field component={Input} type="text" name="busName" id="busName" placeholder="Business Name"/>
        <button type="submit" disabled={ this.props.pristine || this.props.submitting} >Submit</button>
      </form>
    );
  };
};

const mapStateToProps = state => {
  return {
    noData: state.busReviews.noData,
    error: state.busReviews.error
  };
}

SearchForm = connect(
  mapStateToProps
)(SearchForm);


export default reduxForm({
  form: 'search' 
})(SearchForm);