import { Routes, Route } from "react-router-dom";
import Showcase from "./showcase.jsx";
import ProductDetail from "./product.jsx";
import About from './about.jsx'
import Home from './home_page.jsx'

import Header from './header.jsx'
import Footer from './footer.jsx'

export default function App() {
  return (
    <>
    <Header/>
    <hr/>
    <Routes>
      <Route path="/" element={< Home/>} />
      <Route path="/home_page" element={< Home/>} /> 
      <Route path="/showcase" element={<Showcase />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/about" element={< About/>} />
       
    </Routes>
    <div style={{height:"50vw"}}></div>
    <hr/>
    <Footer/>
    </>
  );
}