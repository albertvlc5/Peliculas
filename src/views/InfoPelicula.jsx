import React from 'react';
import Axios from 'axios';

class InfoPelicula extends React.Component {
  state = {
    pelicula: null,
    id:null
  };
  

  getData() {
    const url = `https://api.themoviedb.org/3/movie/${this.props.id}?api_key=c497033d36fa09bf04774617e1f7b9f7&language=es-ES`;
    Axios.get(url)
      .then(res => this.setState({ pelicula: res.data, id: this.props.id }))
      .catch(() => this.props.navigate('/notFound'));

  }

  render() {
    if(this.props.id !== this.state.id ) {
      this.getData();
       return <h1>Cargando...</h1>;
    } else {
      let { pelicula } = this.state;

      if (!pelicula)  {
        return <h1>Cargando pelicula ..</h1>;
      }

      let { poster_path, title,release_date,homepage, overview, vote_average, budget, popularity } = pelicula;
      return (
        <div className='InfoPelicula'>
            <div className='Pelicula'>
              <img className='Portada' src={'https://image.tmdb.org/t/p/w300/' + poster_path} alt='' />
              <h1>{title}</h1>
              <div className='Fecha'>{release_date}</div>
              <a href={homepage} target='_blank' rel='noopener noreferrer'> {homepage} </a>

              
              <p>Resumen: </p><p>{overview}</p>

              <div className='Nota'> Nota media/usuario: {vote_average}</div>
              <div className='Visitas'>Visitas: {popularity}</div>
              <div className='Ventas'>Ventas: $ {budget}</div>
              </div>
            </div>
      );
    }


  }
}

export default InfoPelicula;
