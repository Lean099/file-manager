import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import App from './App';
import reportWebVitals from './reportWebVitals';
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { ApolloProvider } from '@apollo/client'
import { client } from './graphql/ApolloClient'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Auth0ProviderWithHistory>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
