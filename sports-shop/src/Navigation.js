
// Navigation.js
import React from 'react';
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
    </nav>
  );
};

export default Navigation;
