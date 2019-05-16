import React from 'react';
import './index.scss';

function HomeItem(props) {
    const item = props.homeItem;
  return(
    <span className="home-item-block">
      <img src={`img/${item.img}`} alt={item.name} />
      <h2>
        {item.name}
      </h2>
    </span>
  )
}

export {HomeItem};
