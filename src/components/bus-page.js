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

//  componentDidMount() { need to add a dispatch to grab the URL address match.params.bus_name.
//  Instead of dispatching in my search form
// }

	render() {

	        const reviews = this.props.reviews.map((review, index) => (
	            <li className="review-wrapper" key={index}>
	                <Review index={index} {...review} />
	            </li>
	        ));

	        return (
	            <div className="busPage">
	                <h1>Reviews For {this.props.busName}</h1>
	                <ul className="reviews1">
	                    {reviews}
	                </ul>
	                <section id="review-page">
						< ReviewFormPage />
					</section>
	            </div>
	        );
	    };
	};

const mapStateToProps = state => ({
    reviews: state.busReviews.reviews,
    busName: state.busReviews.reviews[0].bus_name,
    created_by: state.auth.currentUser
});

export default connect(mapStateToProps)(BusPage);