import React from 'react';
import {connect} from 'react-redux';
import ShowHideReview from './show-hide-review';
import ShowHideNeedLogin from './show-hide-need-login';
// import './review-form-page.css';

class ReviewFormPage extends React.Component {

  render() {
    return (
        <div className="review-form-page">
            { this.props.created_by ? < ShowHideReview /> : <ShowHideNeedLogin/> }  
        </div>
    );
  };
};

const mapStateToProps = state => ({
    created_by: state.auth.currentUser
});

export default connect(mapStateToProps)(ReviewFormPage);