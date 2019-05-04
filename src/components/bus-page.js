import React from 'react';
import {connect} from 'react-redux';
import NoBusError from './no-bus-error.js';
import ReviewForm from './review-form';

import {addReview, getBus} from '../actions/bus-reviews';

import './bus-page.css';

export class BusPage extends React.Component {
// THIS COMPONENT WILL BE TO DISPLAY THE REVIEWS OF A BUSINESS

	render () {
		return (
			<div className="reviews">
				<div>
				 	this.props.busName
					this.props.review.date_created
					this.props.review.bus_name
					this.props.review.delivery
					this.props.review.order_date
					this.props.review.estimate_date
					this.props.review.arrive
					this.props.review.arrive_date
					this.props.review.created_by 
				</div>
			</div>
		)
	// Need to insert the /components/add-review form
	}
}
// busReviews is the name of the reducer in my Store
const mapStateToProps = state => {
	return {
		review: state.reviews
	}
};

export default connect(mapStateToProps)(BusPage);
