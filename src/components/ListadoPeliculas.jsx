import React, { Component } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const Img = styled.img`
  max-height: 200px;
  overflow: hidden;
  object-fit: cover;
`;

const Pelicula = props => (
  //Obtenemos a traves del identificador de la pelicula, el titulo y la fecha, y podemos añadir la foto si interpolamos el estilo
  <div>
  <Link className='Pelicula' to={'/movie/' + props.data.id}>
    <h2>{props.data.title} {props.data.release_data}</h2>
    <Img src={`https://image.tmdb.org/t/p/w300/${props.data.backdrop_path}`}/>
  </Link>
  </div>
);

class ListadoPeliculas extends Component {

  render() {
      return (
        <div className='ListadoPeliculas'>
          <h1>{this.props.title}</h1>
          <h2>{this.props.release_data}</h2>
          <div className='Peliculas'>
            {this.props.peliculas.map(movie => (
              <Pelicula key={movie.id} data={movie} />
            ))}
          </div>
        </div>
      );
  }
}


export default ListadoPeliculas;
