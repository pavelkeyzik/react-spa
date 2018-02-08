import React from 'react';
import axios from 'axios';

function newsApi(Component, apiUrl) {
  class NewsApi extends React.Component {
    state = {
      data: []
    };

    componentDidMount() {
      this.get();
    }

    get = () => {
      axios.get(apiUrl)
        .then((response) => response.data.articles)
        .then((data) => this.setState({ data }));
    }

    render() {
      return (
        <Component data={this.state.data}
          {...this.props} />
      );
    }
  }

  NewsApi.displayName = `NewsApi(${Component.displayName || Component.name || 'Component'})`;

  return NewsApi;
}

export default newsApi;