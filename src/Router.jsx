import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './components/Contacto/Contacto';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Pelu } from './components/pelu';
import { Platos } from './components/Platos/Platos';
import { Register } from './components/Register/Register';
import { CrearReserva } from './components/Reserva/CrearReserva';
import { Reserva } from './components/Reserva/Reserva';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/pelu' element={<Pelu/>} />
        <Route path='/reserva' element={<Reserva/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/platos' element={<Platos/>} />
        <Route path='/crearReserva' element={<CrearReserva/>} />
        <Route path='/contacto' element={<Contacto/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
