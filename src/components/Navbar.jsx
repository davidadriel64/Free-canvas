import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <i className="bi bi-columns-gap text-white fs-5"> Creador de Banners</i>
        </Link>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 mx-2">
          <li><Link to="/" className="nav-link px-2 text-white">Inicio</Link></li>
          <li><Link to="/editor" className="nav-link px-2 text-white">Editor</Link></li>
          <li><Link to="/presets" className="nav-link px-2 text-white">Presets</Link></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Buscar preset" aria-label="Buscar preset" />
        </form>

        <div className="text-end">
        <Link to="/ingresar"><button type="button" className="btn btn-outline-light me-2">Ingresar</button></Link>
        <Link to="/registro"><button type="button" className="btn btn-warning btnSidebar2">Registrarse</button></Link>
        </div>
      </div>
    </div>
  </header>
    
  );
};

export default Navbar;
