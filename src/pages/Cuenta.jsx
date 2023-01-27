import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cuenta = () => {
  return (
    <div>
    <Navbar />
    <div className="bg-dark text-secondary px-4 py-5 text-center">
    <div className="py-5">
      <h1 className="display-5 fw-bold text-white"> :O Error!</h1>
      <div className="col-lg-6 mx-auto">
        <p className="fs-5 mb-4">Parece que la pagina que buscas no existe</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Regresar al inicio</button>
          <button type="button" className="btn btn-outline-light btn-lg px-4">Ingresar a tu cuenta</button>
        </div>
      </div>
    </div>
  </div>
<Footer/>
</div>
  );
};

export default Cuenta;
