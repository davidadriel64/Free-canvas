import React from 'react';
import ContenidoOffcanvas from './ContenidoOffcanvas';

const ElementoOffcanvas = ({titulo, icono}) => {
  return (
    <div className="offcanvas offcanvas-start text-bg-dark" id={titulo} aria-labelledby="offcanvasElemento">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasElemento"><i className={icono}></i> {titulo}</h5>
          <button type="button" className="btn-close-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="d-grid gap-2">
         <ContenidoOffcanvas titulo={titulo} />
          </div>
        </div>
      </div> 
  );
};

export default ElementoOffcanvas;