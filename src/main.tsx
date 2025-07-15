import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// Global styles (fonts, theme overrides, base)
import './index.css';
import './App.css'; // If you have global app styles

// Create root and render app
const rootElement = document.getElementById('root') as HTMLElement;

if (!rootElement) {
  throw new Error('Root element not found. Please check your index.html file.');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
