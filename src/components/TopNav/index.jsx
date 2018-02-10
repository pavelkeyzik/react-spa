import React, { Component } from 'react';
import { emojify } from 'react-emojione';
import { NavLink } from 'react-router-dom';

export default class TopNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="d-flex">
            <NavLink to="/" className="navbar-brand">React SPA {emojify(':rocket:')}</NavLink>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" exact activeClassName="active" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/articles" exact activeClassName="active" className="nav-link">Articles</NavLink>
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