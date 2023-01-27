import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Presets = () => {
  return (
        <div>
            <Navbar />
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
              <div className="row align-items-center g-lg-5 py-5">
              <form className="col-12 mb-3 mb-lg-0 me-lg-3" role="search"><input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Buscar preset" aria-label="Buscar preset"/></form>
             </div>
             <div className="row align-items-center g-lg-5 py-5">
             <div className="dropstart mx-2">
        <button className="btn btn-outline-light px-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Facebook
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
          <li><h6 className="dropdown-header">Formato </h6></li>
          <li><a className="dropdown-item p-2" id="guardarTransparente" type="button" ><span className="badge text-bg-light mx-2">PNG</span> transparente </a></li>
          <li><a className="dropdown-item p-2" id="guardarFondo" type="button" ><span className="badge text-bg-light mx-2">PNG</span> con fondo </a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item p-2" id="guardarJpg" type="button" ><span className="badge text-bg-light mx-2">JPG</span> con fondo </a></li>
        </ul>
    </div>
    <select className="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option defaultValue="1">One</option>
  <option defaultValue="2">Two</option>
  <option defaultValue="3">Three</option>
</select>
            </div>
          </div>
       <Footer/>
        </div>
  );
};

export default Presets;
