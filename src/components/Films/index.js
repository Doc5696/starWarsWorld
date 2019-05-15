import React from 'react';
import {Film} from '../Film';
import './index.css';

const callApiUrl = "https://swapi.co/api/films/";

class Films extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      films: []
    }
  }

  componentDidMount() {
    fetch(callApiUrl).then(r => r.json()).then(filmsData => {this.setState({films: filmsData.results})});
  }

  renderFilm = () => {
    return (
      <div>
        {films.map(film => (
          <Film key={film.episode_id} film={film} />
        ))}
      </div>      
    )
  }

  render(){

    return(
      <section className="films">
        <div className="films-headers">
          <span className="films-item-cell">
            <p>Name</p>
          </span>
          <span className="films-item-cell">
            <p>Film Director</p>
          </span>
          <span className="films-item-cell">
            <p>Release date</p>
          </span>
        </div>
        {this.renderFilm()}
      </section>
    )
  }
}

export {Films}; 