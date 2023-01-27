import React from 'react';

import Presets from './menuEditor/menuElementos/Presets.jsx';
import Imagenes from './menuEditor/menuElementos/Imagenes.jsx';
import Iconos from './menuEditor/menuElementos/Iconos.jsx';
import Formas from './menuEditor/menuElementos/Formas.jsx';
import Archivos from './menuEditor/menuElementos/Archivos.jsx';
import Texto from './menuEditor/menuElementos/Texto.jsx';
import Fondo from './menuEditor/menuElementos/Fondo.jsx';
import Medidas from './menuEditor/menuElementos/Medidas.jsx';
import Proyectos from './menuEditor/menuElementos/Proyectos.jsx';



const ContenidoOffcanvas = ({titulo}) => {
  if (titulo === "Presets") {
    return (
      <div className="container">
          <div className="row">    
            <div className="col-12">
            <Presets />
            </div>
          </div>
      </div>
      );
  } else if (titulo === "Imagenes") {
    return (
      <div className="container">
          <div className="row">    
            <div className="col-12">
              <Imagenes />
            </div>
          </div>
      </div>
      );
  } else if (titulo === "Iconos") { 
    return (
      <div className="container">
          <div className="row">    
            <div className="col-12">
            <Iconos />
            </div>
          </div>
      </div>
      );
  } else if (titulo === "Formas") {
    return (
      <div className="container">
          <div className="row">    
            <div className="col-12">
            <Formas />
            </div>
          </div>
      </div>
      );
  }
  else if (titulo === "Archivos") {
    return (
      <div className="container">
          <div className="row">    
            <div className="col-12">
            <Archivos />
            </div>
          </div>
      </div>
      );
  }
  else if (titulo === "Cuenta") {
    return (
      <div className="container">
          <div className="row">    
            <div className="col-12">
              <h1>Cuenta</h1>
            </div>
          </div>
      </div>
      );
  }
  else if (titulo === "Texto") {
    return (
      <div className="container">
          <div className="row">    
            <div className="col-12">
              <Texto />
            </div>
          </div>
      </div>
      );
  }
  else if (titulo === "Fondo") {
    return (
      <div className="container">
          <div className="row">    
            <div className="col-12">
              <Fondo />
            </div>
          </div>
      </div>
      );
  }
  else if (titulo === "Medidas") {
    return (
      <div className="container">
          <div className="row">    
            <div className="col-12">
              <Medidas />
            </div>
          </div>
      </div>
      );
  }
  else if (titulo === "Proyectos") {
    return (
      <div className="container">
          <div className="row">    
            <div className="col-12">
              <Proyectos />
            </div>
          </div>
      </div>
      );
  }



  

};

export default ContenidoOffcanvas;