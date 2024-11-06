// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import ProductForm from './components/ProductForm';
import View from './ViewFile/vieafile/ViewFirst';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/product" element={<ProductForm />} />
        <Route path="/view" element={<View/>} />
      </Routes>
    </Router>
  );
}

export default App;
