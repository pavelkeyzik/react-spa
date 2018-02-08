import React, { Component } from 'react';
import { emojify } from 'react-emojione';

export default class TopNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="d-flex">
            <a href="" className="navbar-brand">React SPA {emojify(':rocket:')}</a>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a href="" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">Articles</a>
              </li>
            </ul>
          </div>
          <button className="d-flex align-items-center btn btn-light disabled">
            <i className="material-icons mr-1">exit_to_app</i>
            <span>Sign In</span>
          </button>
        </div>
      </nav>
    );
  }
}