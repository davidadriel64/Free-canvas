import  React from 'react';
import data from './../../json/iconos.json';
const Iconos = () => {

 return (
    <div className="d-flex flex-wrap">
           {data.map((icon) => (
        <div className="d-flex m-2 fs-5 cursor-pointer" key={icon.name}>
          <i className={icon.name}></i>
        </div>
      ))}
    </div>
  );
}
export default Iconos;