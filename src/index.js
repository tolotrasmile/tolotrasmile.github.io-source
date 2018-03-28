import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/main.css'
import registerServiceWorker from './registerServiceWorker'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloProvider from 'react-apollo/ApolloProvider'
import gql from 'graphql-tag'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.github.com/graphql' }),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root'))
registerServiceWorker()
