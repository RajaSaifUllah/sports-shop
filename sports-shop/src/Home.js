
// Home.js
import React from 'react';
import abcImage from './abc.jpg'; // Import your image
import './App.css';

const Home = () => {
  return (
    <div>
      <h4 className="welcome-heading">Welcome to sports---Shop</h4>
      <p>
        At sports---Shop, we offer a wide range of sports equipment and gear to
        cater to your sporting needs. Whether you're passionate about cricket,
        football, or hockey, we have you covered.
      </p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p>
            Explore our extensive collection of cricket bats, footballs, hockey
          sticks, balls, protective gear, and accessories. We have top-quality
          products for both professionals and beginners. Gear up and get ready to
          dominate the field!
        </p>
        <img src={abcImage} alt="Sports Equipment" width="250" />
      </div>
    </div>
  );
};

export default Home;
