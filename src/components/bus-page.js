import React from 'react';
import {connect} from 'react-redux';
import Review from './review';
import ReviewFormPage from './review-form-page';
import {submitReview} from '../actions/bus-reviews';

import './bus-page.css';

export class BusPage extends React.Component {
// THIS COMPONENT WILL BE TO DISPLAY THE REVIEWS OF A BUSINESS
	submitReview(title) {
        this.props.dispatch(submitReview(title));
    }

	render () {
		return (
			<div className="reviews">
			<h1>Reviews For []</h1>
				<div>
					this.props.reviews.date_created
					this.props.reviews.bus_name
					this.props.reviews.delivery
					this.props.reviews.order_date
					this.props.reviews.estimate_date
					this.props.reviews.arrive
					this.props.reviews.arrive_date
					this.props.reviews.created_by 
				</div>
				<section id="review-page">
					< ReviewFormPage />
				</section>
			</div>
		)
	}
}
// busReviews is the name of the reducer in my Store
const mapStateToProps = state => ({
	reviews: state.reviews
});

export default connect(mapStateToProps)(BusPage);
