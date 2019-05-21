import React from 'react';
import { connect } from 'react-redux';
import ReviewTogglePage from './review-toggle-page';
import './no-bus-error.css';

class NoBusError extends React.Component {
	render() {
		return (
			<div className="noBus-content">
				<div className="noBus-text">
					<h1>{this.props.busName}</h1>
		        	<img src="no-data" alt="" />
		        	<h2>No shipping-time reviews found</h2>
		        	<p>Click the "plus" icon below to submit a review and help out your community</p>
	        	</div>
	        	<section id="review-page">
					< ReviewTogglePage />
				</section>
      		</div>
		);
	};
};

const mapStateToProps = state => {
	return {
		busName: state.busReviews.bus_name
	};
};

export default connect(mapStateToProps)(NoBusError);
