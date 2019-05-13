import React from 'react';
import ReactDOM from 'react-dom';
import {Film} from '../Film';
import './index.css';

const callApiUrl = "https://swapi.co/api/films/"

class Films extends React.Component{
  state = {
    films: [],
  }

  componentDidMount() {
    fetch(callApiUrl).then(r => r.json()).then(filmsData => {this.setState({films: filmsData.results})})
  }

  render(){

    const { films } = this.state;

    return(
      <section className="films">
        <div className="films__headers">
          <span className="films__item-cell">
            <p>Name</p>
          </span>
          <span className="films__item-cell">
            <p>Film Director</p>
          </span>
          <span className="films__item-cell">
            <p>Release date</p>
          </span>
        </div>

        {films.map(film => (
          <Film key={film.episode_id} film={film} />
        ))}
      </section>
    )
  }
}

export {Films}; 