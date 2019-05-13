import React from 'react';
import './index.css';

class Film extends React.Component {
  handleDecriptionClick() {

  }

  render(){
    const film = this.props.film;
    let descVisibility = false;
    return(
      <div className="film__item-wrapper">
        <div className="film__item">
        <span className="film__item-cell">
          <h4>{film.title}</h4>
        </span>
        <span className="film__item-cell">
          <p>{film.director}</p>
        </span>
        <span className="film__item-cell">
          <p>{film.release_date}</p>
        </span>
      </div>
      {descVisibility ? (
        <span className="film__item-description">
          <p>{film.opening_crawl}</p>
        </span>
      ) : (
        <a onClick={() => descVisibility = !descVisibility}>Show decsription</a>
      )}
      </div>
    )
  }
}

export {Film};