import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './CSS/index.css'
import { Link } from "react-router-dom";


import Header from './header.jsx'
import Footer from './footer.jsx'

import Home from './home_page.jsx'

import App from './App.jsx'
import Showcase from './showcase.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header />
    <hr />
    <App/>
     

    <div style={{height:"70vw"}}></div>
    <hr />
    <Footer />
    </BrowserRouter>
  </StrictMode>,
)
