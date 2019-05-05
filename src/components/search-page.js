import React from 'react';
import {connect} from 'react-redux';
import './search-page.css';
import SearchForm from './search-form';

// ------------------ THIS IS THE SEARCH PAGE TO HOST THE SEARCH FORM ------------------ Used in components/Landing Page
export class SearchPage extends React.Component {


  render() {
    return (
        <div className="search-form">
            <SearchForm/>  
        </div>
    );
  };
};

const mapStateToProps = state => ({
    data: state.busReviews.reviews
});

export default connect(mapStateToProps)(SearchPage);