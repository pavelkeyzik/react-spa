import React, { Component } from 'react';

class NewsPreview extends Component {

  render() {
    const {article} = this.props;
    
    return(
      <article className="card my-2">
        <div className="card-body">
          <h5>{article.title}</h5>
          <p className="card-text">{article.description}</p>
          <a href={article.url} target="_blank" className="btn btn-primary">Read more</a>
        </div>
      </article>
    );
  }
}

export default NewsPreview;