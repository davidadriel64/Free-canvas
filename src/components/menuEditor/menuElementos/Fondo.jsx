import {useState} from 'react';

const Fondo = () => {
    const [medidaX, setMedidaX] = useState(0);
    const [medidaY, setMedidaY] = useState(0);
    return (
        <>
         <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label text-bg-dark">Color fondo</label>
                <input type="text" className="form-control text-bg-dark" defaultValue="#fff" onChange={ (e) => {document.getElementById("contenido").style.backgroundColor = e.value;}}/>
        </div>
        <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label text-bg-dark">Imagen de fondo</label>
                <input type="file" className="form-control text-bg-dark"  id="fileFondo" accept="image/*" />
        </div>
        <div className="mb-3">
            <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="fondoRadio1" value="option1"/>
                        <label className="form-check-label" for="inlineRadio1">Repetir fondo</label>
            </div>
            <div className="form-check form-check-inline">
                         <input className="form-check-input" type="radio" name="inlineRadioOptions" id="fondoRadio2" value="option2"/>
                        <label className="form-check-label" for="inlineRadio2">No repetir</label>
            </div>
        </div>
        <div className="mb-3">
            <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions2" id="fondoRadio4" value="option1"/>
                        <label className="form-check-label" for="inlineRadio1">Cubirir fondo</label>
            </div>
            <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions2" id="fondoRadio5" value="option2"/>
                        <label className="form-check-label" for="inlineRadio2">Contener fondo</label>
            </div>
        </div>
        <div className="mb-3">
                 <label for="customRange1" className="form-label">Mover fondo a los lados</label>
                <input type="range" className="form-range" defaultValue="0" onChange={ (e) => {document.getElementById("contenido").style.backgroundPositionX = e.target.value + "%"; setMedidaX(e.target.value)}}/>
        </div>
        <div className="mb-3">
                <label for="customRange1" className="form-label">Mover fondo para arriba o abajo</label>
                 <input type="range" className="form-range" defaultValue="0" onChange={ (e) => {document.getElementById("contenido").style.backgroundPositionY = e.target.value + "%"; setMedidaY(e.target.value)}}/>
        </div>
        <div className="mb-3">
                <button type="button" className="btn btn-outline-danger" id="eliminarFondo">Eliminar imagen fondo</button>
        </div>
        </>
     );
};

 
export default Fondo;