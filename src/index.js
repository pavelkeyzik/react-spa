import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';
import 'bootstrap/dist/css/bootstrap.css';
import 'material-design-icons/iconfont/material-icons.css';
import NewsList from './components/NewsList'

class App extends Component {
  render() {
    return [
      <Header key="0" />,
      <div key="1" className="container mx-auto my-2 px-0">
        <div className="row">
          <main className="col-9">
            <section className="articles">
              <NewsList />
            </section>
          </main>
          <Aside />
        </div>
      </div>,
      <Footer key="3" />
    ];
  }
}

ReactDOM.render(<App />, document.getElementById('root'));