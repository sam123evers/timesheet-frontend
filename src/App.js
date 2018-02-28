import React, { Component } from 'react';
import { 
  Route,
  Link,
  HashRouter 
} from 'react-router-dom';
import './App.css';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import HomeView from './views/homeView';
import TimeView from './views/timeView';



export const client = new ApolloClient({
  link: new HttpLink( { uri: 'http://localhost:5000/graphql' } ),
  cache: new InMemoryCache()
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <HashRouter>
          <div className="App">
            <Route path="//" component={HomeView} />
            <Route path="/time" component={TimeView} />
          </div>
        </HashRouter>
      </ApolloProvider>
    )
  }
};

export default App;
