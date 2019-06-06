import React from 'react';

import './review.css';

class Review extends React.Component {
    
	render() {
	    const estimated = new Date(this.props.estimate_date);
	    let arrived;
	    let status;
	    if(this.props.arrive_date) {
	      arrived = new Date(this.props.arrive_date);
	            
	            if (arrived.getTime() === estimated.getTime()) {
	                status = <span id="blue">On Time</span>;
	            }
	            else if (arrived > estimated) {
	                status = <span id="orange">Late</span>;
	            }
	            else status = <span id="green">Early</span>;
	    }
	    else {
	    	status = <span id="red">N/A</span>;
	    }

    	return (
			<div className="reviewPage">
				<div className="indivReview">
					<div className="revDetails">
						<p className="one">{this.props.created_by}</p>
						<p className="two">{this.props.date_created}</p>
						<p className="three status">{status}</p>
					</div>
					<div className="hr"><hr /></div>
					<p>Business: {this.props.bus_name}</p>
					<p>Delivery Type: {this.props.delivery}</p>
					<p>Ordered On: {this.props.order_date}</p>
					<p><b>Estimated</b> to Arrive: {this.props.estimate_date}</p>
					<p>Package Arrived: {this.props.arrive ? "Arrived" : "Didn't Arrive"}</p>
					<p><b>Arrived:</b> {this.props.arrive_date ? this.props.arrive_date : "N/A"}</p>
				</div> 
			</div>
    	);
    };
};

export default Review;