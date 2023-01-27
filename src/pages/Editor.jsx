import {useState} from 'react';
import { Link } from 'react-router-dom';
import Menu1 from '../components/menuEditor/Menu1';
import ElementoOffcanvas from '../components/ElementoOffcanvas';
import Texto  from '../components/menuEditor/menuElementos/Texto';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import Swal from 'sweetalert2';

const Editor = () => {
  const [elementosEditor, setElementosEditor] = useState([]);
  const [elementosGuardados, setElementosGuardados] = useState([]);
  const [zoom, setZoom] = useState(60);
  const [id, setId] = useState(0);

  const agregarElemento = (tipo) => {

    if (tipo === "texto") {
            let val = id+1;
            setId(val);
            let div1 = document.createElement("div");

            div1.id = "div"+val;
            let texto1 = document.createElement("p");
            texto1.id = "texto"+val;
            texto1.style.padding = "10px";
            texto1.style.fontSize = "30px";
            texto1.innerHTML = "Texto";
            texto1.className = "texto"+val;

            document.getElementById("contenido").appendChild(div1);
            div1.appendChild(texto1);

            MoverLibrementeConElMouse(div1.id);

    } else if (tipo === "imagen") {
        
    } else if (tipo === "forma") {
    
    } else if (tipo === "icono") {

    } else if (tipo === "archivo") {

    }

    
    const MoverLibrementeConElMouse = (e) => {
        let posicionX = 0;
        let posicionY = 0;
      
        let elemento = document.getElementById(e);
            elemento.addEventListener('mousedown', presionar, false);
            window.addEventListener('mouseup', soltar, false);
              const presionar = (e) => {
                let zoom = document.getElementById("contenido").style.zoom;
                zoom = zoom.replace("%", "");
                posicionX = e.clientX - elemento.offsetLeft * zoom / 100;
                posicionY = e.clientY - elemento.offsetTop * zoom / 100;
                window.addEventListener('mousemove', mover, true);
              }
            function soltar() {
              window.removeEventListener('mousemove', mover, true);
            }
        function mover(e) {
          let zoom = document.getElementById("contenido").style.zoom;
          zoom = zoom.replace("%", "");
          elemento.style.position = 'absolute';
          elemento.style.top = (e.clientY - posicionY) / zoom * 100 + 'px';
          elemento.style.left = (e.clientX - posicionX) / zoom * 100 + 'px';
          elemento.style.width = 'auto';
        }
      }



}

const guardarPngFondo = async () => {
  const canvas = await html2canvas(document.getElementById("contenido"));
  const dataURL = canvas.toDataURL('image/png');
  downloadjs(dataURL, 'download.png', 'image/png');
};
const guardarPng = async () => {
  const canvas = await html2canvas(document.getElementById("contenido"));
  const dataURL = canvas.toDataURL('image/png');
  downloadjs(dataURL, 'download.png', 'image/png');
};
const guardarJpgFondo = async () => {
  const canvas = await html2canvas(document.getElementById("contenido"));
  const dataURL = canvas.toDataURL('image/jpg');
  downloadjs(dataURL, 'download.jpg', 'image/jpg');
};


    return (
    <div>
        <header className="navbar navbar-dark flex-md-nowrap p-0 shadow headerEditor" >
      <Link to="/"  className="navbar-brand col-md-4 col-lg-3 me-0 px-3 fs-6 d-flex " >
        <div className=" sidebar d-block collapse ">
        <i className="bi bi-columns-gap text-white fs-5 "> </i>
        </div>
        <div className=" sidebar d-md-block collapse ">
        <i className="fs-5 mx-1"> Creador de Banners</i>
        </div>
      </Link>

      
    <div className="d-flex">
      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3  collapse  d-md-block" role="search"><input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Nombre del banner"/></form>
        <button  type="button" className="btn btn-outline-light mx-1 collapse  d-md-block" ><i className="bi bi-cloud "></i> Sin guardar</button>
        <button  type="button" className="btn btn-outline-light mx-1 collapse  d-md-block" ><i className="bi bi-cloud-check "></i> Guardado</button>
        <button  type="button" className="btn btn-outline-light mx-1 collapse  d-md-block" >Guardar progreso</button>
      </div>

      <div className="dropstart mx-2">
        <button className="btn btn-outline-light px-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Guardar como
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
          <li><h6 className="dropdown-header">Formato </h6></li>
          <li><a className="dropdown-item p-2" onClick={guardarPngFondo}  type="button" ><span className="badge text-bg-light mx-2">PNG</span> transparente </a></li>
          <li><a className="dropdown-item p-2" onClick={guardarPng} type="button" ><span className="badge text-bg-light mx-2">PNG</span> con fondo </a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item p-2" onClick={guardarJpgFondo} type="button" ><span className="badge text-bg-light mx-2">JPG</span> con fondo </a></li>
        </ul>
    </div>
    </header>

    <div className="d-flex">

      <Menu1 />

    <div className="container-fluid">
      <div className="row">
        <nav id="sidebar" className="col-sm-3 col-md-3 col-xl-2 col-xxl-2 d-md-block bg-new sidebar collapse">
          <div className="position-sticky pt-3 sidebar-sticky">
          <div>
            <div className="d-grid gap-2">
              <button className="btn btn-outline-light mx-1"  data-bs-toggle="offcanvas" data-bs-target="#Texto" aria-controls="Texto" type="button"><i className="bi bi-fonts"></i> Agregar Texto</button>
             <ElementoOffcanvas titulo={"Texto"} icono={"bi bi-fonts"} />
            </div>
          </div>
          <hr className="text-bg-dark my-4"/>
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center mt-4 mb-1 text-muted text-uppercase">
              <span>Editar Elementos </span>
                <a className="link-secondary" aria-label="Add a new report">
                  <i className="bi bi-grid-3x3-gap"></i>
              </a>
            </h6>
            <div className="mb-3 mt-3" id="input">
            </div>
          </div>
        </nav>

        <main className="col-sm-9 col-md-9 col-xl-10 col-xxl-10 px-0">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-2 pb-2 mb-3 border sidebarNavbar">
             <div className="btn-toolbar mb-2 mb-md-0 ">
              <div className=" me-2">
                <button type="button" className="btn mx-2 btnBlanco d-flex gap-1"  data-bs-toggle="offcanvas" data-bs-target="#Medidas" aria-controls="Medidas"><i className="bi bi-aspect-ratio"></i> <div className='collapse d-md-block '>Cambiar medidas</div></button>
                <ElementoOffcanvas titulo={"Medidas"} icono={"bi bi-aspect-ratio"} />
               </div>
             </div>
             <div className="btn-toolbar mt-2 mb-md-0">
                    <label className="form-label mx-2 text-light">{zoom + "%"}</label>
                        <div className=" me-2">
                    <input type="range" className="form-range" defaultValue="60" min="25" max="100" id="zoom" onChange={ (e) => {document.getElementById("contenido").style.zoom = e.target.value + "%"; setZoom(e.target.value)}}/>
                </div>
               </div>
             <div className="btn-toolbar mb-2 mb-md-0">
                <div className=" me-2">
                  <button type="button" className="btn btnBlanco mx-2 d-flex gap-1" data-bs-toggle="offcanvas" data-bs-target="#Fondo" aria-controls="Fondo"><i className="bi bi-pencil-square"></i> <div className='collapse d-md-block '>Editar Fondo</div></button>
                  <ElementoOffcanvas titulo={"Fondo"} icono={"bi bi-pencil-square"} />
                 </div>
               </div>
          </div>
            <div className="d-flex justify-content-center align-content-center align-items-center cssPadrecont">
                 <div className="cards cssHijocont" id="contenido" style={{zoom:"60%"}} >
                  <div id="ejey" ></div>
                  <div id="ejex" ></div>
                </div>
            </div>
            <ElementoOffcanvas off={ElementoOffcanvas} />
            <footer className="mx-4 text-muted">
              © 2022 creado por david
            </footer>
        </main>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Editor;
