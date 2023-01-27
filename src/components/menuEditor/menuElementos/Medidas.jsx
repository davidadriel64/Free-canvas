import  React from 'react';

const Medidas = () => {
    return (
        <>
        <div className="d-flex  flex-column">
            <div className="col-12 mb-3">
                <h5 className="text-center">Medida personalizada</h5>
            <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Ancho</span>
                            <input type="number" className="form-control" id="ancho" placeholder="600" aria-label="Ancho" aria-describedby="basic-addon1"/>
                            
                            <span className="input-group-text" id="basic-addon1">Alto</span>
                            <input type="number" className="form-control" id="alto" placeholder="600" aria-label="Alto" aria-describedby="basic-addon1"/>
         </div>
        <div className="input-group mb-3 input-group mb-3 justify-content-center">
                <button type="button" className="btn btn-outline-light" id="cambiarMedidas">Cambiar medidas</button>
        </div>
            </div>
            <h5 className="text-center">Medida preseteada</h5>
            <div className="col-12 mb-3">
            <img src="https://dummyimage.com/400x400/ccc/000.jpg" alt="medidas 300x300" border="0" className="img-fluid" />
            </div>
            <div className="col-12 mb-3">
            <img src="https://dummyimage.com/600x600/ccc/000.jpg" alt="medidas 300x300" border="0" className="img-fluid" />
            </div>
            <div className="col-12 mb-3">
            <img src="https://dummyimage.com/800x800/ccc/000.jpg" alt="medidas 300x300" border="0" className="img-fluid" />
            </div>
            <div className="col-12 mb-3">
            <img src="https://dummyimage.com/1024x1024/ccc/000.jpg" alt="medidas 300x300" border="0" className="img-fluid" />
            </div>
            <div className="col-12 mb-3">
            <img src="https://dummyimage.com/1600x600/ccc/000.jpg" alt="medidas 300x300" border="0" className="img-fluid" />
            </div>
            <div className="col-12 mb-3">
            <img src="https://dummyimage.com/1600x300/ccc/000.jpg" alt="medidas 300x300" border="0" className="img-fluid" />
            </div>
            <div className="col-12 mb-3">
            <img src="https://dummyimage.com/1920x1024/ccc/000.jpg" alt="medidas 300x300" border="0" className="img-fluid" />
            </div>
            <div className="col-12 mb-3">
            <img src="https://dummyimage.com/1920x1600/ccc/000.jpg" alt="medidas 300x300" border="0" className="img-fluid" />
            </div>
        </div>
        </>
     );
};

 
export default Medidas;