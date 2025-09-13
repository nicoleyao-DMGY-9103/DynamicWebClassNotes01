//core
import React from 'react'
//browser based project
import ReactDOM from 'react-dom/client'
// so App can be rendered
import App from './App'

import './global.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

