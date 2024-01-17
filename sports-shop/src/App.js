
// App.js
import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Home from './Home';
import Cricket from './Cricket';
import Football from './Football';
import Hockey from './Hockey';
import './App.css';



function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'cricket':
        return <Cricket />;
      case 'football':
        return <Football />;
      case 'hockey':
        return <Hockey />;
      default:
        return <Home />;
    }
  };

  return (
    
    <div className="App">
      <Header />
      <Navigation handleNavigation={handleNavigation} />
      {renderPage()}
    </div>
    
  );
}

export default App;
