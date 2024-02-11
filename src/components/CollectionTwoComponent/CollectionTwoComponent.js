// CollectionTwoComponent.js
import React, { useState } from 'react';
import './CollectionTwoComponent.css'; // Importa el archivo CSS
import FooterComponent from '../FooterComponent/FooterComponent';

const CollectionTwoComponent = () => {
  const [zoomedImage, setZoomedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const collections = [
    { id: 1, image: 'imagen1.png', comment: 'Canvas size: 90 (height) x 60 x 2 cm' },
    { id: 2, image: 'imagen2.jpg', comment: 'Canvas size: 105 (height) x 130 x 3 cm' },
    { id: 4, image: 'imagen3.png', comment: 'Canvas size: 107 (height) x 95 x 2 cm' },
    { id: 5, image: 'imagen4.jpg', comment: 'Canvas size: 60 (height) x 60 x 2 cm' },
    { id: 6, image: 'imagen5.png', comment: 'Canvas size: 70 (height) x 70 x 2 cm' },
    // Agrega comentarios para cada imagen según sea necesario
  ];

  const handleImageClick = (imageSrc) => {
    // Al dar clic en la imagen, se restablece el zoom
    setZoomedImage(imageSrc);
    setZoomLevel(1); // Restablece el nivel de zoom al valor inicial
  };

  const handleCloseZoom = () => {
    setZoomedImage(null);
  };

  const handleWheel = (e) => {
    // Ajusta el nivel de zoom con la rueda del mouse
    const newZoomLevel = zoomLevel + e.deltaY / 100;
    // Limita el zoom mínimo a 1
    if (newZoomLevel >= 1) {
      setZoomLevel(newZoomLevel);
    }
  };

  return (
    <div className="page-margin2">
      <div className="title-container2">
        <h1 className="collection-title2">FIRST PAINTINGS</h1>
      </div>
      <div className="collectionContainer2">
        {collections.map((collection) => (
          <div className="collectionItem2" key={collection.id}>
            <div className="collectionImage2">
              <img
                src={`/images/antiguas/${collection.image}`}
                alt={`Collection ${collection.id}`}
                onClick={() => handleImageClick(`/images/antiguas/${collection.image}`)}
              />
              <div className="commentary2">{collection.comment}</div>
            </div>
          </div>
        ))}
      </div>
      {zoomedImage && (
        <>
          <div className="darkOverlay2" onClick={handleCloseZoom}></div>
          <div
            className="zoomedImage2"
            onWheel={handleWheel}
            style={{ overflow: 'auto' }} // Agrega overflow para las barras de desplazamiento
          >
            <img
              src={zoomedImage}
              alt="Zoomed Image"
              style={{ transform: `scale(${zoomLevel})` }}
            />
          </div>
        </>
      )}
      <FooterComponent />
    </div>
  );
};

export default CollectionTwoComponent;
