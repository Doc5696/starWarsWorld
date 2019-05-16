import React from 'react';
import './index.css';

function Header() {
  return (
    <header>
      <nav className="header-navbar">
        <ul id="headerTopNav">
          <li>
            <a>Films</a>
          </li>
          <li>
            <a>People</a>
          </li>
          <li>
            <a>Planets</a>
          </li>
          <li>
            <a>Species</a>
          </li>
          <li>
            <a>Starships</a>
          </li>
          <li>
            <a>Vehicles</a>
          </li>
          <li>
            <a href="#" class="icon" id="menu" onClick={() => {var topMenu = document.getElementById('headerTopNav');
                                                               topMenu.className === "topNav" ? topMenu.className += " responsive" : topMenu.className = "topNav";}}>&#9776;</a>
          </li>
        </ul>
        
      </nav>
      <h1 className="header-logo">
        <span>welcome to </span>
        <br />
        <span className="yellow">star wars </span>
        <span>world</span>
      </h1>
    </header>
  )
}

export {Header};