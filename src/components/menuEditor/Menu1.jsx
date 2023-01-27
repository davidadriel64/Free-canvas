import  React from 'react';
import MenuElemento from './menuElementos/MenuElemento';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { redirect } from 'react-router-dom';

const Menu1 = () => {

    const executeExample = (name) => {
    Swal.fire({
        title: 'Si sales del editor se perderán los cambios no guardados',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `Salir sin guardar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Guardado!', '', 'success')
          redirect('/')
        } else if (result.isDenied) {
          Swal.fire('Se perderán los cambios', '', 'info')
          redirect('/')
        }
      })
    }

    return (
        <div className="collapse d-md-block flex-column flex-shrink-0 bg-new menuIconos " style={{width: "6rem"}}>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center menu1">
            <li className="nav-item">
           <div className="nav-link rounded-0 text-light" type="button" onClick={executeExample} ><i className="bi bi-house-door fs-4"></i> Home</div>
             </li>
            <MenuElemento nombre={"Presets"} icono={"bi bi-grid-3x3-gap fs-4"} offcanvas="offcanvas" enlace={""} />
            <MenuElemento nombre={"Imagenes"} icono={"bi bi-images fs-4"} offcanvas="offcanvas" enlace={""} />
            <MenuElemento nombre={"Iconos"} icono={"bi bi-front fs-4"} offcanvas="offcanvas" enlace={""} />
            <MenuElemento nombre={"Formas"} icono={"bi bi bi-brush fs-4"} offcanvas="offcanvas" enlace={""} />
            <MenuElemento nombre={"Archivos"} icono={"bi bi-cloud-arrow-up fs-4"} offcanvas="offcanvas" enlace={""} />
            <MenuElemento nombre={"Proyectos"} icono={"bi bi-archive fs-4"} offcanvas="offcanvas" enlace={""} />
            <MenuElemento nombre={"Cuenta"} icono={"bi bi-person-circle fs-4"} offcanvas="offcanvas" enlace={""} />
        </ul>
      </div>
    );
};

 
export default Menu1;