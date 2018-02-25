import React, { Component } from 'react';

import './App.css';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import Dashboard from './dashboard'
import TimeEntryWidget from './timeEntryWidget'


export const client = new ApolloClient({
  link: new HttpLink( { uri: 'http://localhost:5000/graphql' } ),
  cache: new InMemoryCache()
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Dashboard />
          <TimeEntryWidget />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
