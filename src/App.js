import React from 'react';
import { Router, Redirect } from '@reach/router';
import InfoPelicula from './views/InfoPelicula';
import Peliculas from './views/Peliculas';
import NotFound from './components/NotFound';
import Navegacion from './components/Navegacion';
import './App.css';

function App() {
  return (
    <div className='App'>
      {/* Llamamos al componente de Navegacion donde indicaremos la url con la categoria a buscar */}
      <Navegacion />
      {/* Creamos un Router que sera el encargado de elegir el hijo o ruta por la que navegaremos */}
      <Router className='MenuInicio' >
        <Peliculas path={'/movies/:type'} />
        <NotFound path={'/notFound'} />
        {/* Por defecto la aplicación empezara mostrando las peliculas más populares,
        ademas de permitir el redireccionamiento entre hijos ,
        gastamos noThrow para redirigir sin gastar el componentDidCatch */}
        <Redirect default from='*' to={'/movies/popular'} noThrow />
        <InfoPelicula path={'/movie/:id'} />
      </Router>
    </div>
  );
}


export default App;
