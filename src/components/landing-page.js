import React from 'react';
import './landing-page.css';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Some Business Name'
        }
    }

    setText(text) {
        this.setState({
            text
        });
    }

    slugify(text) {
        return text
            .toString()
            // .toLowerCase()
            // .replace(/[\s\W-]+/g, '-');
    }

    goToBusiness(event) {
        event.preventDefault();
      // I'm going to have to make a get request to the API for this Bus name and send the user to the Bus Page or an Error Page
        this.props.history.push(`/board/${this.slugify(this.state.text)}`);
    }

    render() {
        return (
            <div className="landing-page">
                            
                  <div id="landing-header">
                    <h2>Find Actual Shipping Times</h2>
                  </div>
            
                  <section id="landing-search">
                  <form onSubmit={e => this.goToBusiness(e)}>
                      <input type="text" placeholder="Business Name" value={this.slugify(this.state.text)}
                          onChange={e => this.setText(e.target.value)} />
                      <button>Go to Business</button>
                  </form>
                  
                </section>
            
                <section id="landing-description">
                  <p> <b>shipwhen?</b> is the largest worldwide shipping times directory to look up estimated vs. actual business shipping times, built by people like YOU, the users. We have the largest, most extensive business search available for finding shipping info. By sharing information that we receive, we are compiling a free and public shipping times directory of information on when items were ordered, estimated to arrive, and actually arrvied.  Thanks to our community, we are the new shipping times directory. You may use our site's free shipping times lookup service at any time.
                  <br/>
                  <b> Find out average business shipping times</b> Scammers, Mobile Marketers, and many other companies often send texts pretending to be a company they're not. Lookup the number you received a text from to see what others have experienced.
                  Report scam and spam texts: You have to opt in for companies to legally include you in their text message campaigns. Make it known if a company is disturbing you and not following regulation. Reporting the number is the best way to make it publicly aware and help others avoid being scammed themselves.</p>
                </section>
            
                <footer role="content-info">
                  <p>footer content</p>
                </footer>
            </div>
        );
    };
}