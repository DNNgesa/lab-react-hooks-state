import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // Global styles
import 'bootstrap/dist/css/bootstrap.min.css' // Bootstrap styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Bootstrap JS
import 'bootstrap-icons/font/bootstrap-icons.css' // Bootstrap Icons

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App)
  )
)
