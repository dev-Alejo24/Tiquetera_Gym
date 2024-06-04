import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseAppProvider } from 'reactfire';
import App from './App';
import firebaseConfig from './firebase-config';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirebaseAppProvider>,
);
