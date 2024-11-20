// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import ProductForm from './components/ProductForm';
import View from './ViewFile/vieafile/ViewFirst';
import ProductFormPre from './components/ProductFormPre';
import ProductFormChe from './components/ProductFormChe'
import ProductFormSel from './components/ProductFormSel'
import ProductFormOut from './components/ProductFormOut'

import HomePages from './HomePages'
import IbyinjiyePage from './pages/viewfiles/IbyinjiyePage';
import IbishyashyaPage from './pages/viewfiles/IbishyashyaPage';
import IbyagurishijwePage from './pages/viewfiles/IbyagurishijwePage'
import IbyasohotsePage from './pages/viewfiles/IbyasohotsePage';
import IbisanzwePage from './pages/viewfiles/IbisanzwePage'
import GutunganyaPage from './pages/viewfiles/GutunganyaPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/product" element={<ProductForm />} />
        <Route path="/ProductFormPre" element={<ProductFormPre />} />
        <Route path="/ProductFormChe" element={<ProductFormChe />} />
        <Route path="/ProductFormSel" element={<ProductFormSel />} />
        <Route path="/ProductFormOut" element={<ProductFormOut />} />
        <Route path="/view" element={<View/>} />

        {/* viewreort */}
        <Route path="/HomePages" element={< HomePages/>} />
        <Route path="/Ibishyashya" element={<IbishyashyaPage />} />
        <Route path="/Gutunganya" element={<GutunganyaPage />} />
        <Route path="/Ibyinjiye" element={<IbyinjiyePage />} />
        <Route path="/Ibyagurishijwe" element={<IbyagurishijwePage />} />
        <Route path="/Ibyasohotse" element={<IbyasohotsePage />} />
        <Route path="/Ibisanzwe" element={<IbisanzwePage />} />
      
      </Routes>
    </Router>
  );
}

export default App;
