import React from 'react';
import {connect} from 'react-redux';
import Review from './review';
import ReviewFormPage from './review-form-page';
import {submitReview} from '../actions/bus-reviews';

import './bus-page.css';

class BusPage extends React.Component {
// THIS COMPONENT WILL BE TO DISPLAY THE REVIEWS OF A BUSINESS
	// submitReview(title) {
 //        this.props.dispatch(submitReview(title));
 //    }

	render () {
		return (
			<div className="reviews1">
			<h1>Reviews For {this.props.bus_name}</h1>
				<div>
					<p>{this.props.date_created}</p>
					<p>{this.props.bus_name}</p>
					<p>{this.props.delivery}</p>
					<p>{this.props.order_date}</p>
					<p>{this.props.estimate_date}</p>
					<p>{this.props.arrive}</p>
					<p>{this.props.arrive_date}</p>
					<p>{this.props.created_by}</p>
				</div>

				<section id="review-page">
					< ReviewFormPage />
				</section>
			</div>
		);
	}
}
// busReviews is the name of the reducer in my Store
const mapStateToProps = state => {
	return {
		date_created: state.busReviews.reviews[0].date_created,
		bus_name: state.busReviews.reviews[0].bus_name,
		delivery: state.busReviews.reviews.delivery,
		order_date: state.busReviews.reviews.order_date,
		estimate_date: state.busReviews.reviews.estimate_date,
		arrive: state.busReviews.reviews.arrive,
		arrive_date: state.busReviews.reviews.arrive_date,
		created_by: state.busReviews.reviews.created_by
	}
};

export default connect(mapStateToProps)(BusPage);
