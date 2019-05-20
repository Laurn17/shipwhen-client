import React from 'react';
import NeedLogin from './need-login';
import './show-hide.css';

class ShowHideNeedLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      showNeedLogin: false
    };
  };

  render() {
    return (
      <div className="showHideBody">
        <div className="addButton" onClick={() => this.setState({showNeedLogin: !this.state.showNeedLogin})}>
          <i className="fas fa-plus"></i>
        </div>
        { this.state.showNeedLogin ? <NeedLogin /> : null }
      </div>
    );
  };
};

export default ShowHideNeedLogin;