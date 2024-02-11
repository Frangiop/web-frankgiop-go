// ArtistaPage.jsx
import React from 'react';
import { Parallax } from 'react-parallax';
import './ArtistaPage.css';
import FooterComponent from '../components/FooterComponent/FooterComponent';
import { useTranslation } from 'react-i18next';


const ArtistaPage = () => {
  const { t } = useTranslation();


  const capitulos = [
    { image: 'casemiro/capitulo1/cas1.png', link: '/capitulo1', title: 'CHAPTER 70' },
    { image: 'casemiro/cap2/1.png', link: '/capitulo2', title: 'CHAPTER 77' },
    { image: 'casemiro/cap3/1.png', link: '/capitulo3', title: 'CHAPTER 75' },
    { image: 'casemiro/cap4/1.png', link: '/capitulo4', title: 'CHAPTER 78' },
    // Agrega más capítulos según sea necesario
  ];

  return (
    
    <div className="inicio-page " style={{ marginTop: '120px' }}>
      
      {/* Video de fondo */}
      <video autoPlay loop className="video-overlay">
        <source src="/video/s.mp4" type="video/mp4" />
        Tu navegador no admite el elemento de video.
      </video>

      {/* Contenedor de imágenes artísticas */}
      <div className="contenedor-imagenes-artisticas">
        <h1 className="titulo-principal">CASEMIRO</h1>
        <a href="https://www.instagram.com/fran.giop" target="_blank" rel="noopener noreferrer">
        <img src="casemiro/paralax/caseinsta.png" alt="Instagram" className="imagen-instagram" />
    <p>Instagram</p>
   
  </a>
  <div className="div-click">{t('Click to see a complete chapter')}</div>

      
        <div className="imagenes-artisticas">
          {capitulos.map((item, index) => (
            <div key={index} className="imagen-con-titulo">
              <p className="titulo-imagen">{item.title}</p>
              <a href={item.link}>
                <img src={item.image} alt={item.title} />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Texto entre imágenes */}
      <div className="texto-entre-imagenes">
      <p>{t('Embark on a journey through the world of Casemiro, an imaginative character shaped by diverse experiences in the modern world')}</p>
      </div>

      {/* Parallax con imagen de fondo */}
      <Parallax bgImage={`${process.env.PUBLIC_URL}/casemiro/paralax/casemiroparalax.png`} strength={500}>
        <div style={{ height: '50vh' }}>
          {/* Contenido aquí */}
        </div>
      </Parallax>

      {/* Texto de estilo artístico */}
      <div className="texto-estilo-artistico">
        <p>
          <span className="artistic-text">
"Beginnings, First Casemiros"</span>
        </p>
      </div>

      {/* Contenedor de imágenes estilo que yo quiero */}
      <div className="contenedor-casemiro">
  {Array.from({ length: 18 }, (_, index) => (
    <div key={`imagen${index + 1}`} className={`imagen-casemiro imagen${index + 1}`}>
      <img src={`${process.env.PUBLIC_URL}/casemiro/imagenes/${index + 1}.png`} alt={`Imagen ${index + 1}`} />
    </div>
  ))}
</div>

  {/* Pie de página */}
  <FooterComponent/>
    </div>
  );
};

export default ArtistaPage;
