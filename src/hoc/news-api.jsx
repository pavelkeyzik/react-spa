import React from 'react';
import axios from 'axios';

let CancelToken = axios.CancelToken;
let cancelRequest;

function newsApi(Component, apiUrl) {
  class NewsApi extends React.Component {
    state = {
      data: []
    };

    componentDidMount() {
      this.get();
    }

    componentWillUnmount() {
      cancelRequest();
    }

    get = () => {
      axios.get(apiUrl, {
        cancelToken: new CancelToken((c) => cancelRequest = c)
      })
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