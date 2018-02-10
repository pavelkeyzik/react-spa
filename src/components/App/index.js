import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'material-design-icons/iconfont/material-icons.css';
import Header from '../Header';
import Aside from '../Aside';
import Footer from '../Footer';
import Home from '../Home';
import NewsList from '../NewsList';

export default class App extends Component {
  render() {
    return [
      <Header key="0" />,
      <div key="1" className="container mx-auto my-2 px-0">
        <div className="row">
          <main className="col-9">
            <section className="articles">
              <Route path="/" exact component={Home} />
              <Route path="/articles" exact component={NewsList} />
            </section>
          </main>
          <Aside />
        </div>
      </div>,
      <Footer key="3" />
    ];
  }
}