import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { AppProvider } from './Components/AppContext/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
