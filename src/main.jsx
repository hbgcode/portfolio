import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './reducer/sidebarContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider> 
      <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
   