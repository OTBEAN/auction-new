import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

import NAVBAR from './components/layouts/NAVBAR.jsx'

import App from './App.jsx'

import FOOTER from './components/layouts/FOOTER.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NAVBAR/>
    <App/>
    <FOOTER/>
  </StrictMode>
)
