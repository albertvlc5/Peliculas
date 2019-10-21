import React from 'react';
import { Link } from '@reach/router';

const NotFound = () => (
  <div className='404'>
    <h1>ERROR 404</h1>
    <Link to="/movies/popular">Volver a Inicio</Link>
  </div>
);

export default NotFound;
