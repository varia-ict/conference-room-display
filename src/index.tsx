import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ModalContextProvider } from '@rintsin/common-components'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </React.StrictMode>
);
