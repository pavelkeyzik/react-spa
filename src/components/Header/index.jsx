import React, { Component } from 'react';
import TopNav from '../TopNav';

class Header extends Component {
  render() {
    return [
      <TopNav key="0" />,
      <header key="1" className="my-2 container jumbotron text-center">
        <h1 className="display-4">React SPA</h1>
        <p className="lead">My first SPA project on React.js and Bootstrap 4</p>
      </header>
    ];
  }
}

export default Header;