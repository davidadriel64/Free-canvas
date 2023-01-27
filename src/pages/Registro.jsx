import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Registro = () => {
  return (
    <div>
     <Navbar />
     <div className="container col-xl-10 col-xxl-8 px-4 py-5">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start text-white">
                    <h1 className="display-4 fw-bold lh-1 mb-3">Creá tu cuenta</h1>
                    <p className="col-lg-10 fs-4">Si registras tu cuenta vas a poder guardar todos tus proyectos</p>
        </div>
            <div className="col-md-10 mx-auto col-lg-5">
                <form className="p-4 p-md-5 border rounded-3 bg-dark">
                    <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="Nombre" />
                        <label for="floatingInput">Nombre</label>
            </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Codigo" />
                    <label for="floatingPassword">Codigo</label>
            </div>
                <button className="w-100 btn btn-lg btn-outline-secondary btnSidebar mb-2" type="submit">Enviar codigo</button>
                <button className="w-100 btn btn-lg btn-outline-secondary btnSidebar" type="submit">Registrarse</button>
        <hr className="my-4"/>
                <small className="text-muted">Al registrarse acepta nuestros terminos </small>
        </form>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Registro;
