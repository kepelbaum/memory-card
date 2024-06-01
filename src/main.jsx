import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Memory from './memorycard.jsx'
import './styles/styles.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Memory />
  </React.StrictMode>,
)
