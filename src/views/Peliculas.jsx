import React, { Component } from 'react';
import axios from 'axios';
import ListadoPeliculas from '../components/ListadoPeliculas';

class Peliculas extends Component {
  state = {
    //Inicializamos en el estado de la clase el array que contendra las peliculas de la busqueda por categoria
    peliculas: [],
    type:'',
  };

  dimeCategoria = () => {
    const type = this.props.type

    if (type === 'top_rated' || type === 'upcoming' || type === 'popular') {
      return type;
    } else {
      return 'popular';
      //La que ponemos en el default
    }
  };

  //Creamos un metodo que se conecte a la 
  getPeliculas(type) {
    let url = (_type) => `https://api.themoviedb.org/3/movie/${_type}?api_key=323112ea2281b9eb70f319f4df422c6b`;

    //Axios es un cliente HTTP que sirve para obtener las solucitudes correctamente a la API, para despues mostrarlas con el metodo GET.
    //Gastamos el metodo interno de Axios res para actualizar el estado de nuestra pagina, guardando en el array pelicula los resultados de la busqueda por categoria.

    return axios.get(url(type)).then(res => this.setState({ peliculas: res.data.results, type:type }));

  }

  // getPeliculas(type) {
  //   const { data } = await axios.get(
  //     `https://api.themoviedb.org/3/movie/${type}?api_key=}c497033d36fa09bf04774617e1f7b9f7&language=es-ES&page=${page}`,
  //   );
  //   return data;
  // }

  render() {
      // console.log(this.props);

    //Creamos una variable para comprobar si ha cambiado el estado de la Categoria de busqueda
    const nuevaCategoria = this.dimeCategoria()
    //console.log(nuevaCategoria)

    if (nuevaCategoria !== this.state.type) {
      this.getPeliculas(nuevaCategoria);
      //console.log(nuevaCategoria)
      return <h1>Cargando peliculas...</h1>
    } else {
      return (
        <div className='Peliculas'>
          <h1> {this.state.type} peliculas</h1>
          <ListadoPeliculas peliculas={this.state.peliculas} />
        </div>
      );
    }


  }
}


export default Peliculas;
