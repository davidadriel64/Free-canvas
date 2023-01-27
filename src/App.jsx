import React from 'react';
import  {BrowserRouter, Routes, Route } from 'react-router-dom';
import AppCss from './App.css';
import FormasCss from './Formas.css';
import Editor from './pages/Editor';
import Inicio from './pages/Inicio';
import Error404 from './pages/Error404';
import Presets from './pages/Presets';
import Ingresar from './pages/Ingresar';
import Registro from './pages/Registro';
import Cuenta from './pages/Cuenta';

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/presets" element={<Presets />} />
      <Route path="/ingresar" element={<Ingresar />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/cuenta" element={<Cuenta />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
