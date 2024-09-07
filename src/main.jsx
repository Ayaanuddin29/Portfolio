import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Correct import
import App from './App';
import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } else {
    console.error('Root element not found');
  }
});
