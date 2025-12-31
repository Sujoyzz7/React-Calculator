import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Clear the existing HTML content
document.body.innerHTML = '<div id="root"></div>';

// Create a root.
const root = createRoot(document.getElementById('root'));

// Initial render: Render the <App /> to the root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
