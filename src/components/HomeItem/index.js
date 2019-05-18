import React from 'react';
import './index.scss';

function HomeItem(props) {
    const item = props.homeItem;
    var itemStyle = {
      background: `linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5) ), url(img/${item.img}) 100% 100% no-repeat`
    }
  return(
    <span className="home-item-block" style={itemStyle}>
      <h2>
        {item.name}
      </h2>
    </span>
  )
}

export {HomeItem};
