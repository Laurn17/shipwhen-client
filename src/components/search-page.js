import React from 'react';
import {connect} from 'react-redux';
import SearchForm from './search-form';

import "./search-page.css"

// ------------------ THIS IS THE SEARCH PAGE TO HOST THE SEARCH FORM ------------------ Used in components/Landing Page
export class SearchPage extends React.Component {

	render() {
		return (
	        <div id="searchPage">
	            <SearchForm />  
	        </div>
    	);
  	};
};

const mapStateToProps = state => ({
    data: state.busReviews.reviews
});

export default connect(mapStateToProps)(SearchPage);