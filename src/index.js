import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  ApolloProvider
} from "@apollo/client";
import {
  Provider as AlertProvider
} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import reportWebVitals from './reportWebVitals';

//internal imports
import { client } from './utils/graphQlEndPoint';
import { options } from './utils/alertOptions';







ReactDOM.render(

  <ApolloProvider client={client}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
