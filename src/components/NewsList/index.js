import React, { Component } from 'react';
import NewsPreview from '../NewsPreview';
import newsApi from '../../hoc/news-api';

class NewsList extends Component {
  render() {
    const { data } = this.props;

    this.newsElements = data.map((article, index) =>
      <NewsPreview key={index} article={article} />
    );

    return (
      <div>
        {this.newsElements}
      </div>
    );
  }
}

export default newsApi(NewsList, 'https://newsapi.org/v2/top-headlines?apiKey=025df5017bdc4276838e82590475484c&country=us&category=business');