import React from 'react';
import { connect } from 'react-redux';
import Review from './review';
import ReviewTogglePage from './review-toggle-page';
import {getBus} from '../actions/bus-reviews';

import './bus-page.css';

class BusPage extends React.Component {

	componentDidMount() {
		const bus = this.props.match.params.bus_name;
		this.props.dispatch(getBus(bus));
	}

	render() {
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

export default connect(mapStateToProps)(BusPage);