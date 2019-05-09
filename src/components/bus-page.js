import React from 'react';
import { connect } from 'react-redux';
import Review from './review';
import ReviewFormPage from './review-form-page';
import {submitReview} from '../actions/bus-reviews';

import './bus-page.css';

class BusPage extends React.Component {
// THIS COMPONENT WILL BE TO DISPLAY THE REVIEWS OF A BUSINESS
	// submitReview(title) {
 //        this.props.dispatch(submitReview(title));
 //    }

// 	render () {
		 
// 		return (
// 			<div className="reviews1">
// 			<h1>Reviews For {this.props.bus_name}</h1>
// 				<div className="indivReview">
// 					<div className="revDetails">
// 						<p>{this.props.date_created}</p>
// 						<p>{this.props.created_by}</p>
// 					</div>
// 					<p>{this.props.bus_name}</p>
// 					<p>Delivery Type: {this.props.delivery}</p>
// 					<p>Ordered On: {this.props.order_date}</p>
// 					<p>Estimated to Arrive: {this.props.estimate_date}</p>
// 					<p>Package Arrived: {this.props.arrive}</p>
// 					<p>Arrival Date: {this.props.arrive_date}</p>
// 				</div>

// 				<section id="review-page">
// 					< ReviewFormPage />
// 				</section>
// 			</div>
// 		);
// 	}
// }

// busReviews is the name of the reducer in my Store
// const mapStateToProps = state => {
// 	return {
// 		date_created: state.busReviews.reviews[0].date_created,
// 		bus_name: state.busReviews.reviews[0].bus_name,
// 		delivery: state.busReviews.reviews[0].delivery,
// 		order_date: state.busReviews.reviews[0].order_date,
// 		estimate_date: state.busReviews.reviews[0].estimate_date,
// 		arrive: state.busReviews.reviews[0].arrive.toString(),
// 		arrive_date: state.busReviews.reviews[0].arrive_date,
// 		created_by: state.busReviews.reviews[0].created_by
// 	}
// };

// --------------------TESTING PULLING IN MY ARRAY OF REVIEWS FROM REVIEW.JS-----------------
	render() {
	        const reviews = this.props.reviews.map((review, index) => (
	            <li className="review-wrapper" key={index}>
	                <Review index={index} {...review} />
	            </li>
	        ));

	        return (
	            <div className="busPage">
	                <h1>Reviews For {this.props.busName}</h1>
	                <div className="reviews1">
	                    {reviews}
	                </div>
	                <section id="review-page">
						< ReviewFormPage />
					</section>
	            </div>
	        );
	    };
	};

const mapStateToProps = state => ({
    reviews: state.busReviews.reviews,
    busName: state.busReviews.reviews[0].bus_name
});

// --------------------------------------TESTING SECTION END--------------------------------------

export default connect(mapStateToProps)(BusPage);