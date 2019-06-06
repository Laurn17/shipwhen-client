import React from 'react';
import { connect } from 'react-redux';
import Review from './review';
import ReviewTogglePage from './review-toggle-page';

import './my-reviews.css';

class MyReviews extends React.Component {

	// componentDidMount() {
	// 	const bus = this.props.match.params.bus_name;
	// 	this.props.dispatch(getBus(bus));
	// }

	render() {
	    const reviews = this.props.reviews.map((review, index) => (
	        <li className="review-wrapper" key={index}>
	            <Review index={index} {...review} />
	        </li>
	    ));

	    return (
	        <div className="myReviewsPage">
	            <h1>{this.props.match.params.username}'s Reviews</h1>
	            <ul className="reviews">
	                {reviews.reverse(this.props.date_created)}
	            </ul>
	            <section id="review-page">
	                < ReviewTogglePage />			
				</section>
	        </div>
	    );
	};
};

const mapStateToProps = state => ({
    reviews: state.busReviews.reviews,
    created_by: state.auth.currentUser
});

export default connect(mapStateToProps)(MyReviews);