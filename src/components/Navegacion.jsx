import React from 'react';
import { Link } from '@reach/router';



function Navegacion() {

  return (
    // Creamos una clase que englobe los links de navegación de la distintas categorias internas de la Api de themovie.db, y asi poder aplicarle los estilos.
    <div className="Navegacion" >
        <Link to='/movies/top_rated'> Mejor valoración </Link>
        <Link to='/movies/popular'> Populares </Link>
        <Link to='/movies/upcoming'> Próximamente en cines</Link>
    </div>
  );

}

export default Navegacion;
