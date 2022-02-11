import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Pelu } from './components/pelu';
import { Platos } from './components/Platos/Platos';
import { Register } from './components/Register/Register';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/pelu' element={<Pelu/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/platos' element={<Platos/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
