// CapituloCas1.js
import React from 'react';
import './CapituloCas1.css';  // Importa el archivo de estilos CSS

const CapituloCas1 = () => {
  return (
    <div>
      <div className="imagenes-adicionales"> {/* Imágenes de abajo */}
       <img src={`${process.env.PUBLIC_URL}/casemiro/capitulo1/cas1.png`} alt="Imagen 1" />
       <img src={`${process.env.PUBLIC_URL}/casemiro/capitulo1/cas2.png`} alt="Imagen 2" />
        <img src={`${process.env.PUBLIC_URL}/casemiro/capitulo1/cas3.png`} alt="Imagen 3" />
        <img src={`${process.env.PUBLIC_URL}/casemiro/capitulo1/cas4.png`} alt="Imagen 4" />
        <img src={`${process.env.PUBLIC_URL}/casemiro/capitulo1/cas5.png`} alt="Imagen 5" />
        <img src={`${process.env.PUBLIC_URL}/casemiro/capitulo1/cas6.png`} alt="Imagen 6" />
        <img src={`${process.env.PUBLIC_URL}/casemiro/capitulo1/cas7.png`} alt="Imagen 7" />
        <img src={`${process.env.PUBLIC_URL}/casemiro/capitulo1/cas8.png`} alt="Imagen 8" />
        <img src={`${process.env.PUBLIC_URL}/casemiro/capitulo1/cas9.png`} alt="Imagen 9" />
      </div>
    </div>
  );
};

export default CapituloCas1;
