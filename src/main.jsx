import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import cartSore from './Redux/Cartstore.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
  <Provider store={cartSore}> <App /></Provider>
   </BrowserRouter>
  </React.StrictMode>,
)
