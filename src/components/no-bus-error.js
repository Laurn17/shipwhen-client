import React from 'react';
import { connect } from 'react-redux';
import ReviewFormPage from './review-form-page';
import './no-bus-error.css';

class NoBusError extends React.Component {
	render() {
		return (
			<div className="noBus-content">
				<h1>{this.props.busName}</h1>
	        	<img src="no-data" alt="" />
	        	<h2>No shipping reviews found.</h2>
	        	<p>Click the "plus" icon below to submit a review and help out the community.</p>
	        	<section id="review-page" hidden>
					< ReviewFormPage />
				</section>
      		</div>
		);
	}
}

// I CAN'T SEEM TO PULL IN THE STATE. THERE IS UPDATED STATE, I CHECKED IN REACT DEV TOOLS AND I CAN SEE IT.
const mapStateToProps = state => {
	return {
		busName: state.busReviews.bus_name
	};
};

export default connect(mapStateToProps)(NoBusError);
