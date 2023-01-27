import  React from 'react';
import { Link } from 'react-router-dom';
import ElementoOffcanvas from '../../ElementoOffcanvas';

const MenuElemento = ({nombre, offcanvas, enlace, icono}) => {
    return (
          <li className="nav-item">
           <Link to={enlace} className="nav-link rounded-0 text-light" type="button" data-bs-toggle={offcanvas} data-bs-target={"#"+nombre} aria-controls="offcanvasElemento" ><i className={icono}></i> {nombre}</Link>
          <ElementoOffcanvas titulo={nombre} icono={icono} />
          </li>
    );
};

 
export default MenuElemento;