import { useEffect, useState } from "react";

const Imagenes = () => {
        const [isLoading, setIsLoading] = useState(true);
        const [imageUrl, setImageUrl] = useState(null);
        const [imagTotal, setImagTotal] = useState(null);
        const [error, setError] = useState(null);
        const [busqueda, setBusqueda] = useState("flores");
        const [pagina, setPagina] = useState(1);
      
        useEffect(() => {
          if (isLoading) {
            async function fetchData() {
              try {
                const response = await fetch(
                "https://pixabay.com/api/?key=31553976-0411af895a2cdbbad3b2d8107&q="+busqueda+"&image_type=photo&pretty=true&per_page=20&page="+pagina
                );
                if (response.ok) {
                  const img = await response.json();
                  setImagTotal(img.totalHits);
                  setImageUrl(img.hits);
                  setError(null);
                  setIsLoading(false);
                } else {
                  setError("Hubo un error al obtener el perrito");
                }
              } catch (error) {
                setError("No pudimos hacer la solicitud para obtener el perrito");
              }
            }
            fetchData();
          }
        }, [isLoading]);
      
        const siguiente = () => {
          setPagina(pagina + 1);
          setIsLoading(true);
        };

        const anterior = () => {
          setPagina(pagina - 1);
          setIsLoading(true);
        };

        const bucarYa = () => {
          setIsLoading(true);
          setPagina(1);
        };
      
        if (isLoading) {
          return (
            <div className="App">
             <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
            </div>
          );
        }
      
        if (error) {
          return (
            <div className="App">
                 <div className="input-group mb-3">
                 <h1>{error}</h1>
                 <button className="btn btn-outline-light" onClick={bucarYa}>Buscar</button>
                 </div>
            </div>
          );
        }
                return (
                        <div className="App">
                          <div className="input-group mb-3">
                          <input className="form-control me-2" type="input" defaultValue={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Buscar"/>
                          <button className="btn btn-outline-light" onClick={bucarYa}>Buscar</button>
                          </div>
                          <div  className="d-flex flex-wrap my-3">
                          { imagTotal <= 0 ? <h3>No hay resultados</h3> : <h3>Hay {imagTotal} resultados</h3> }
                                {
                                imageUrl.map((im) =>
                                <div className="col-6" key={im.id}>
                                <div className="card bg-dark mb-3">
                                <img src={im.previewURL} alt="" className="card-img-top p-2"/>
                                </div>
                                </div>
                                ) 
                                }
                          
                        </div>
                        <div className="d-flex justify-content-center align-items-center align-content-center gap-2">
                        { pagina === 1 ? <button type="button" className="btn btn-outline-light" disabled>Atras</button> : <button type="button" className="btn btn-outline-light mx-2" onClick={anterior}>Atras</button> }
                        { imagTotal <= 20 ? <button type="button" className="btn btn-outline-light" disabled>Siguiente</button> : <button type="button" className="btn btn-outline-light" onClick={siguiente}>Siguiente</button> }
                        </div>
                        <h3 className="mt-2" >Pagina: {pagina}</h3> 
                        </div>
                        
                      );
      }
 
export default Imagenes;