import React from 'react';
import {ListItem} from '../ListItem';
import './index.css';

function List(props){ 
  const { items } = props.items;
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
      <div>
        {items.map(item => (
          <ListItem key={item.episode_id} item={item} />
        ))}
      </div>
    </section>
  )
}

export {List};
