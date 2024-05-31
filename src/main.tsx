import { StrictMode } from 'react';

import ReactDOM from 'react-dom/client';
import 'regenerator-runtime';

import { App } from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
