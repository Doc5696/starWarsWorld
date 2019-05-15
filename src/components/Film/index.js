import React from 'react';
import {InfoBlock} from '../InfoBlock';
import './index.css';

function Film(props) {
  const film = props.film;
  return (
    <div className="film-item-wrapper">
      <div className="film-item">
      <span className="film-item-cell">
        <h4>{film.title}</h4>
      </span>
      <span className="film-item-cell">
        <p>{film.director}</p>
      </span>
      <span className="film-item-cell">
        <p>{film.release_date}</p>
      </span>
    </div>
    <span className="film-item-description">
      <InfoBlock film={film} />
    </span>
  </div>
  )
}

export {Film};