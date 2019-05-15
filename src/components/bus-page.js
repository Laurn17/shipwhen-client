import React from 'react';
import { connect } from 'react-redux';
import Review from './review';
import ReviewFormPage from './review-form-page';
import {submitReview} from '../actions/bus-reviews';
import {getBus} from '../actions/bus-reviews';

import './bus-page.css';

class BusPage extends React.Component {
// THIS COMPONENT WILL BE TO DISPLAY THE REVIEWS OF A BUSINESS
	// submitReview(title) {
 //        this.props.dispatch(submitReview(title));
 //    }

	componentDidMount() {
		const bus = this.props.match.params.bus_name;
	 	console.log(bus);
		this.props.dispatch(getBus(bus));
	}

	render() {
			console.log(this.props.reviews.map);
	        const reviews = this.props.reviews.map((review, index) => (
	            <li className="review-wrapper" key={index}>
	                <Review index={index} {...review} />
	            </li>
	        ));

	        return (
	            <div className="busPage">
	                <h1>Reviews For {this.props.match.params.bus_name}</h1>
	                <ul className="reviews1">
	                    {reviews}
	                </ul>
	                <section id="review-page">
	                	{ this.props.created_by && < ReviewFormPage /> }			
					</section>
	            </div>
	        );
	    };
	};

const mapStateToProps = state => ({
    reviews: state.busReviews.reviews,
    created_by: state.auth.currentUser
});

export default connect(mapStateToProps)(BusPage);