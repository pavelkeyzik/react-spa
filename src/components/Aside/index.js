import React, { Component } from 'react';
import { emojify } from 'react-emojione';

export default class Aside extends Component {
  render() {
    return (
      <aside className="col-3 my-2">
        <div className="card text-center">
          <div className="card-body">
            <h5>Welcome! {emojify(':stuck_out_tongue_closed_eyes:')}</h5>
            <p className="card-text">Yuo're welcome to this SPA app!</p>
          </div>
        </div>
      </aside>
    );
  }
}