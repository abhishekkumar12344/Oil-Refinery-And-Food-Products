import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';



import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
      
       
        <Route path="/contact" element={<Contact />} />
          
      </Routes>
      <WhatsAppButton />
     
      <Footer />
    </Router>
    
  );
}

export default App;