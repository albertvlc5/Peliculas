import React from 'react';
import { Link } from '@reach/router';

const NotFound = () => (
  <div className='404'>
    <h1>ERROR 404</h1>
    <h2>No he podido encontrar informacion sobre la pelicula deseada...</h2>
    <Link to="/movies/popular">Volver a Inicio</Link>
  </div>
);

export default NotFound;
