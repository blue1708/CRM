import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain= "dev-wdp08yctszgmiapp.us.auth0.com"
    clientId="Bpsb9GFbMZz27SEWb7OI1f6M7rphdSwi"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);


reportWebVitals();
