import React from 'react';
import {connect} from 'react-redux';
// import './review-form-page.css';
import AddReviewForm from './review-form';

// ------------------ THIS IS THE SEARCH PAGE TO HOST THE SEARCH FORM ------------------ Used in components/Landing Page
export class ReviewFormPage extends React.Component {


  render() {

    return (
        <div className="review-form">
            <AddReviewForm/>  
        </div>
    );
  };
};

const mapStateToProps = state => ({
    created_by: state.auth.currentUser
});

export default connect(mapStateToProps)(ReviewFormPage);