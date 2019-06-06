import React from 'react';
import {connect} from 'react-redux';
import './landing-page.css';
import SearchPage from './search-page';
import ReviewTogglePage from './review-toggle-page';

// ------------------ THIS IS THE LANDING PAGE USERS FIRST SEE ------------------ Used in components/App
export class LandingPage extends React.Component {

  render() {
    return (
      <div className="landing-page">               
        <div id="landing-header">
          <h1>Actual Shipping Times Revealed</h1>
          <h2>How long will your package really take to arrive?</h2>
        </div>
            
        <section id="search-page">
          <SearchPage />   
        </section>
            
        <section id="landing-description">
          <p>
            <div className="landingIcons"><i className="fa fa-truck"></i></div>
            <b>shipwhen?</b> is the largest shipping times directory to look up <b>estimated vs. actual</b> business shipping times, built by people like YOU, the users. We have the largest, most extensive business search available for finding shipping information. Shipwhen is a free directory of information on when items were ordered, estimated to arrive, and actually arrvied.
            <br/><br/>

            <div className="landingIcons"><i className="far fa-clock"></i></div>
            <b>Find out average business shipping times.</b> Many companies often send misleading estimated shipping times. Lookup the Business Name to see what others have experienced.
            <br/><br/>

            <div className="landingIcons"><i className="fa fa-thumbs-up"></i></div>
            <b>Leave positive OR negative reviews.</b> Make it known if a company exaggerated their shipping pace or if your item arrived on time. Leaving a review is the best way to make shipping times public and help others avoid having that special item arrive late!
          </p>
        </section>
        <section id="review-page">
            < ReviewTogglePage />     
        </section>
            
        <footer>
          <p>Copyright © 2019 shipwhen? | All Rights Reserved</p>
        </footer>
      </div>
    );
  };
};

const mapStateToProps = state => ({
    data: state.busReviews.reviews
});

export default connect(mapStateToProps)(LandingPage);