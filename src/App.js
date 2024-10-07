import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import React from 'react';

import MainLayout from './Components/MainLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import { BreadcromProvider } from './hooks/ContextAPI/Breadcrum';
import ProductHome from './Components/ProductList';

function App() {

  
  
  return (
    <>
   <BreadcromProvider>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout content={<Home />} />} />
        <Route path="/about" element={<MainLayout content={<About />}/>} />
        <Route path="/contact" element={<MainLayout content={<Contact/>}/>}/>
        <Route path="/product-list" element={<MainLayout content={<ProductHome/>} />} />
      </Routes>
    </Router>
    </BreadcromProvider>
    </>
  );
}

export default App;
