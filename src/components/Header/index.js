import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

function Header() {
  return (
    <header>
      <nav className="header-navbar">
        <ul id="headerTopNav">
          <li>
            <Link to="/films">Films</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/planets">Planets</Link>
          </li>
          <li>
            <Link to="/species">Species</Link>
          </li>
          <li>
            <Link to="/starships">Starships</Link>
          </li>
          <li>
            <Link to="/vehicles">Vehicles</Link>
          </li>
        </ul>
        <button className="icon" id="menu" onClick={() => {
          var topMenu = document.getElementById('headerTopNav');
          topMenu.className === "topNav" ?
          topMenu.className += " responsive" :
          topMenu.className = "topNav";}}>
            &#9776;
        </button>
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