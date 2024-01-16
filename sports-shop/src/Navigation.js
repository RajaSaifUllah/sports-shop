
// Navigation.js
import React from 'react';
import icon4 from './icon4.png'; // Import the icon image
import './App.css';
const Navigation = ({ handleNavigation }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => handleNavigation('home')}>Home</li>
        <li onClick={() => handleNavigation('cricket')}>Cricket</li>
        <li onClick={() => handleNavigation('football')}>Football</li>
        <li onClick={() => handleNavigation('hockey')}>Hockey</li>
      </ul>
      <div className="nav-icon-container">
        <img src={icon4} alt="Icon4" className="nav-icon" />
      </div>
    </nav>
  );
};

export default Navigation;
