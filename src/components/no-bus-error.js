import React from 'react';
import {connect} from 'react-redux';

export class NoBusError extends React.Component {
	
	render() {
		return (
			<div className="single-content">
				<h1>this.props.busName</h1>
	        	<img src="no-data" alt="" />
	        	<h2>No shipping reviews found.</h2>
	        	<p>Click the "plus" icon below to submit a review and help out the community.</p>
      		</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		busName: state.busReviews.bus_name
	};
};

export default connect(mapStateToProps)(NoBusError);
