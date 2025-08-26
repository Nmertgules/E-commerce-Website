import { Routes, Route } from "react-router-dom";
import Showcase from "./showcase.jsx";
import ProductDetail from "./product.jsx";
import About from './about.jsx'
import Home from './home_page.jsx'
export default function App() {
  return (
    <Routes>
      <Route path="/showcase" element={<Showcase />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/about" element={< About/>} />
       <Route path="/home_page" element={< Home/>} />
    </Routes>
  );
}