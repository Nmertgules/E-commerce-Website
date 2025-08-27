import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './CSS/index.css'
import { Link } from "react-router-dom";





import Home from './home_page.jsx'

import App from './App.jsx'
import Showcase from './showcase.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    
    
    <App/>
     



   
    </BrowserRouter>
  </StrictMode>,
)
