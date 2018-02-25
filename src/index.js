import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import gql from 'graphql-tag';

const client = new ApolloClient({
	link: new HttpLink( { uri: 'http://localhost:5000/graphql'} ),
	cache: new InMemoryCache()
});

client.query( { query: gql`{ 
	query {
		allEntries {
		  edges {
		    node {
		      projectName
		      resource
		      activity
		      taskname
		      entryDate
		      stop
		      start
		      hoursWorked
		      hourlyRate
		      total
		    }
	  	  }
		}
	} 
}` } ).then(console.log);

ReactDOM.render(<ApolloProvider client={client}>
	<App />
	</ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
