
import { useState } from "react";

const Archivos = () => {
    const [file, setFile] = useState();
    const onFileChange = (event) => {
      // Updating the state
      setFile({ file: event.target.files[0] });
    };
    const onFileUpload = async () => {
      // Client ID
      const clientId = "fd2e1e3d3d12ce1",
        auth = "Client-ID " + clientId;
    
      // Creating an object of formData
      const formData = new FormData();
    
      // Adding our image to formData
      formData.append("file", file);
    
      // Making the post request
      await fetch("https://api.imgur.com/3/image/", {
        // API Endpoint
        method: "POST", // HTTP Method
        body: formData, // Data to be sent
        headers: {
          // Setting header
          Authorization: auth,
          Accept: "application/json",
        },
      })
        // Handling success
        .then((res) => alert("image uploaded") && console.log(res)) 
        .catch((err) => alert("Failed") && console.log(err)); 
    };
    return (
      <>
    <div className="mb-3">
        <label htmlFor="formFile" className="form-label" >Subir archivo </label>
            <input className="form-control" type="file" id="formFile" onChange={onFileChange} />
                </div>
            <div className="col-auto">
        <button type="button" className="btn btn-primary mb-3" onClick={onFileUpload}>Subir</button>
    </div>
      </>
    );
  }

 
export default Archivos;