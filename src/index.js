import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';
import 'bootstrap/dist/css/bootstrap.css';
import 'material-design-icons/iconfont/material-icons.css';

class App extends Component {
  render() {
    return [
      <Header key="0"/>,
      <div key="1" className="row container mx-auto my-2 px-2">
        <main className="col-9">
          <section className="articles">
            <article className="card my-2">
              <div className="card-body">
                <h5>Article Title</h5>
                <p className="card-text">Some people has a real problem..</p>
                <a href="" className="btn btn-primary">Read more</a>
              </div>
            </article>
          </section>
        </main>
        <Aside />
      </div>,
      <Footer key="3"/>
    ];
  }
}

ReactDOM.render(<App />, document.getElementById('root'));