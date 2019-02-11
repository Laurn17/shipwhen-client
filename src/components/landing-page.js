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
            // .replace(/[\s\W-]+/g, '-');
    }

    goToBusiness(event) {
        event.preventDefault();
        this.props.history.push(`/bus-page/${this.slugify(this.state.text)}`);
    }

    render() {
        return (
            <div className="home-page">
                <h2>Find Actual Shipping Times</h2>
                <form onSubmit={e => this.goToBusiness(e)}>
                    <input type="text" value={this.slugify(this.state.text)}
                        onChange={e => this.setText(e.target.value)} />
                    <button>Go to board</button>
                </form>
            </div>
        );
    }
}
