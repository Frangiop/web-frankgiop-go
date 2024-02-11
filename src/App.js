
import { Route, Routes } from 'react-router-dom';
import './App.css';
import GiopPage from './pages/GiopPage';
import ArtistaPage from './pages/ArtistaPage';
import ColeccionPage from './pages/ColeccionPage';
import NavigationComponent from './components/NavigationComponent/NavigationComponent';
//import FooterComponent from './components/FooterComponent/FooterComponent';
import CollectionsComponent from './components/CollectionsComponent/CollectionsComponent';
import CollectionTwoComponent from './components/CollectionTwoComponent/CollectionTwoComponent';
import CapituloCas1 from './pages/CapituloCas1';
import CapituloCas2 from './pages/CapituloCas2';
import CapituloCas3 from './pages/CapituloCas3';
import CapituloCas4 from './pages/CapituloCas4';



function App() {
  return (
<div>
  
<NavigationComponent></NavigationComponent>
     <Routes>
    <Route exact path="/" element={<GiopPage/>}>Giop</Route> 
    <Route exact path="/artista" element={<ArtistaPage/>}>Artista</Route>
    <Route exact path="/colecciones" element={<ColeccionPage/>}>Colecciones</Route>
  

    {/* Segundos enlaces */}

    <Route exact path="/multicollections" element={<CollectionsComponent/>} />
    <Route exact path="/multicollections2" element={<CollectionTwoComponent/>}/>

        {/* capitulos casemiro en artistpage  */}
       <Route path="/capitulo1" element={<CapituloCas1/>} />
        <Route path="/capitulo2" element={<CapituloCas2/>} />
        <Route path="/capitulo3" element={<CapituloCas3/>} />
        <Route path="/capitulo4" element={<CapituloCas4/>} />
   
        </Routes>
   
        </div>
  );
}

export default App;




