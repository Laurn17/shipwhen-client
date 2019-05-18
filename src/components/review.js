import React from 'react';
import {connect} from 'react-redux';

import './review.css';

class Review extends React.Component {
    
	render() {
		const estimated = new Date(this.props.estimate_date);
		const arrived = new Date(this.props.arrive_date);
		let status;
			
			if (arrived.getTime() === estimated.getTime()) {
				status = "On Time" ;
			}
			else if (arrived > estimated) {
				status = "Late";
			}
			else status = "Early";
 			
    	return (
			<div className="reviewPage">
				<div className="indivReview">
					<div className="revDetails">
						<p>{this.props.date_created}</p>
						<p>{this.props.created_by}</p>
						<p className="status">{status}</p>
					</div>
					<p>{this.props.bus_name}</p>
					<p>Delivery Type: {this.props.delivery}</p>
					<p>Ordered On: {this.props.order_date}</p>
					<p>Estimated to Arrive: {this.props.estimate_date}</p>
					<p>Package Arrived: {this.props.arrive ? "Arrived" : "Didn't Arrive"}</p>
					<p>Arrival Date: {this.props.arrive_date}</p>
				</div> 
			</div>
    	);
    };
};

export default Review;