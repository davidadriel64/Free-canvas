import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import imagen from '../Creador.png';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div className='fondo'>
        <Navbar />
    <div className="px-4 pt-5 my-5 text-center text-white">
    <h1 className="display-4 fw-bold">Creador de banners online</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Para cualquiera que quiera diseñar, por su cuenta o en equipo. No se necesita experiencia en diseño, y es gratis por siempre.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <Link to={"/editor"}><button type="button" className="btn btn-outline-secondary btn-lg px-4 btnSidebar2">Crear banner</button></Link>
        <Link to={"/registro"}><button type="button" className="btn btn-outline-secondary btn-lg px-4 btnSidebar">Registrarme</button></Link>
      </div>
    </div>
    <div className="overflow-hidden aaaa">
      <div className="container px-5">
        <img src={imagen} className="img-fluid border rounded-3 mb-4 sombraBlanca" alt="Example image" width="700" height="500" loading="lazy" />
      </div>
    </div>
  </div>
   <Footer/>
    </div>
  );
};

export default Inicio;
