import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';
import './styles.css';

const client = Client.buildClient({
  storefrontAccessToken: '8b7ff59fd43e5cb22bedf6582f057f09',
  domain: 'eyelitesesdev.myshopify.com'
});

ReactDOM.render(
  <App 
    client={client}
  />,

  document.getElementById('root')
  );
