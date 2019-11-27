import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './assets/style.bundle.css'
import './vendors/global/vendors.bundle.css'
import './assets/skins/aside/brand.css'

const Application = () =>
  <BrowserRouter>
    <App />
  </BrowserRouter>

ReactDOM.render(<Application />, document.getElementById('root'))
