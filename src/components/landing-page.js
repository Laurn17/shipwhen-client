import React from 'react';
import './landing-page.css';
import LandingForm from './landing-form';

// ------------------ THIS IS THE LANDING PAGE USERS FIRST SEE ------------------ Used in components/App
export default class LandingPage extends React.Component {

    render() {
        return (
            <div className="landing-page">
                            
              <div id="landing-header">
                <h2>Find Actual Shipping Times</h2>
              </div>
            
              <section id="landing-search">
              // INSERT COMPONENTS/LANDING-FORM SO USERS CAN SEARCH BUSINESSESS
                <LandingForm />   
              </section>
            
              <section id="landing-description">
                <p><b>shipwhen?</b> is the largest worldwide shipping times directory to look up estimated vs. actual business shipping times, built by people like YOU, the users. We have the largest, most extensive business search available for finding shipping information. By sharing information that we receive, we are compiling a free and public shipping times directory of information on when items were ordered, estimated to arrive, and actually arrvied.  Thanks to our community, we are the new shipping times directory. You may use our site's free shipping times lookup service at any time.
                <br/><br/>
                <b>Find out average business shipping times.</b> Many companies often send misleading estimated shipping times. Lookup the Business Name to see what others have experienced.
                <br/><br/>
                <b>Leave Positive or Negative Reviews:</b> Make it known if a company exaggerated their shipping pace or if your item arrived on time. Leaving a review is the best way to make shipping times public and help others avoid having that special item arrive late!</p>
              </section>
            
              <footer>
                <p>Copyright ("c") 2019 shipwhen? | All Rights Reserved</p>
              </footer>
            </div>
        );
    };
}