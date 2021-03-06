import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ListProvider } from './context/ListProvider';

render(
  <React.StrictMode>
    <ListProvider>
      <App />
    </ListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
