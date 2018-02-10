import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="card text-center">
        <div className="card-header">Home Page</div>
        <div className="card-body">
          <p className="card-text">This is home page. Please, visit page with articles for more information.</p>
          <Link to="/articles" className="btn btn-primary" exact>Go to articles</Link>
        </div>
      </div>
    );
  }
}