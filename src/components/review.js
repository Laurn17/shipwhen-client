import React from 'react';
import {connect} from 'react-redux';

import './review.css';

class Review extends React.Component {
    
	render() {
    	return (
			<div className="reviewPage">
				<div className="indivReview">
					<div className="revDetails">
						<p>{this.props.date_created}</p>
						<p>{this.props.created_by}</p>
					</div>
					<p>{this.props.bus_name}</p>
					<p>Delivery Type: {this.props.delivery}</p>
					<p>Ordered On: {this.props.order_date}</p>
					<p>Estimated to Arrive: {this.props.estimate_date}</p>
					<p>Package Arrived: {this.props.arrive}</p>
					<p>Arrival Date: {this.props.arrive_date}</p>
				</div>
			</div>
    	);
    }
}

const mapStateToProps = state => {
	return {
		date_created: state.busReviews.reviews[0].date_created,
		bus_name: state.busReviews.reviews[0].bus_name,
		delivery: state.busReviews.reviews[0].delivery,
		order_date: state.busReviews.reviews[0].order_date,
		estimate_date: state.busReviews.reviews[0].estimate_date,
		arrive: state.busReviews.reviews[0].arrive.toString(),
		arrive_date: state.busReviews.reviews[0].arrive_date,
		created_by: state.busReviews.reviews[0].created_by
	}
};

export default connect(mapStateToProps)(Review);