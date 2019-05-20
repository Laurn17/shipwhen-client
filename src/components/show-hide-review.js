import React from 'react';
import AddReviewForm from './review-form';
import './show-hide.css';

class ShowHideReview extends React.Component {
  constructor() {
    super();
    this.state = {
      showReview: false
    };
  };

  render() {
    return (
      <div className="showHideBody">
        <div className="addButton" onClick={() => this.setState({showReview: !this.state.showReview})}>
          <i className="fas fa-plus"></i>
        </div>
        { this.state.showReview ? <AddReviewForm /> : null }
      </div>
    );
  };
};

export default ShowHideReview;
  