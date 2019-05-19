import React from 'react';
import {InfoBlock} from '../InfoBlock';
import './index.css';

function ListItem(props) {
  const item = props.item;
  return (
    <div className="film-item-wrapper">
      <div className="film-item">
      <span className="film-item-cell">
        <h4>{item.title}</h4>
      </span>
      <span className="film-item-cell">
        <p>{item.director}</p>
      </span>
      <span className="film-item-cell">
        <p>{item.release_date}</p>
      </span>
    </div>
    <span className="film-item-description">
      <InfoBlock item={item} />
    </span>
  </div>
  )
}

export {ListItem};