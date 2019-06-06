import React from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm} from 'redux-form';
import Input from './input';
import history from './history';
import './search-form.css';

// --------- THIS FORM IS FOR THE USER TO ENTER A BUS NAME TO THEN RETRIVE IT'S REVIEWS --------
class SearchForm extends React.Component {

  onSubmit(values) {
    const name = values.busName;
    console.log("Searching for shipping-time reviews on Business: " + name);
    history.push(`/reviews/${name}`);
  }

  render() {
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
      <div className="searchForm">
        <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <label htmlFor="busName"></label>
          <Field component={Input} type="text" name="busName" id="busName" placeholder="Search Business Name" normalize={titleCase}/>
          <button type="submit" disabled={ this.props.pristine || this.props.submitting} >Submit</button>
        </form>
      </div>
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