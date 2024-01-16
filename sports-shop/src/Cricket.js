import React, { useState } from 'react';
import './Cricket.css'; // Import a CSS file for styling
import cricketBat1 from './bat1.jpeg';
import cricketBall1 from './ball1.jpg';
import cricketBat2 from './bat2.jpeg';
import cricketBall2 from './ball2.jpg';
import cricketKit1 from './kit1.jpeg';
import cricketBat3 from './bat3.jpeg';
import cricketBall3 from './ball3.jpg';
import cricketKit2 from './kit2.jpeg';
import cricketBat4 from './bat4.jpeg';
import cricketBall4 from './ball4.jpeg';
import icon1 from './icon1.jpeg'; // Import the icon image

const cricketItems = [
  {
    imageUrl: cricketBat1,
    name: <span style={{ color: 'blue' }}>Bat Mate</span>, // Add a name property with a span for styling
    description: <span style={{ color: 'green' }}>High-quality cricket bat for professionals.</span>,
    price: <span style={{ color: 'darkblue'}}>$100</span>,
  },
  {
    imageUrl: cricketBall1,
    name: <span style={{ color: 'blue' }}>Ducks</span>, // Add a name property with a span for styling
    description: <span style={{ color: 'green' }}>Professional cricket ball for match play cricket.</span>,
    price: <span style={{ color: 'darkblue' }}>$15</span>,
  },
  {
    imageUrl: cricketBat2,
    name: <span style={{ color: 'blue' }}>Bat Finder</span>, // Add a name property with a span for styling
    description: <span style={{ color: 'green' }}>Premium cricket bat for serious players.</span>,
    price: <span style={{ color: 'darkblue' }}>$120</span>,
  },
  {
    imageUrl: cricketBall2,
    name: <span style={{ color: 'blue' }}>SG</span>, // Add a name property with a span for styling
    description: <span style={{ color: 'green' }}>Training cricket ball for practice sessions of cricket.</span>,
    price: <span style={{ color: 'darkblue' }}>$10</span>,
  },
  {
    imageUrl: cricketKit1,
    name: <span style={{ color: 'blue' }}>Little Sporty</span>, // Add a name property with a span for styling
    description: <span style={{ color: 'green' }}>Complete cricket kit for all your needs.</span>,
    price: <span style={{ color: 'darkblue' }}>$250</span>,
  },
  {
    imageUrl: cricketBat3,
    name: <span style={{ color: 'blue' }}>Aztec Bat</span>, // Add a name property with a span for styling
    description: <span style={{ color: 'green' }}>Beginner cricket bat for those starting out.</span>,
    price: <span style={{ color: 'darkblue' }}>$50</span>,
  },
  {
    imageUrl: cricketBall3,
    name: <span style={{ color: 'blue' }}>Kookabura</span>, // Add a name property with a span for styling
    description: <span style={{ color: 'green' }}>Match cricket ball for competitive games.</span>,
    price: <span style={{ color: 'darkblue' }}>$12</span>,
  },
  {
    imageUrl: cricketKit2,
    name: <span style={{ color: 'blue' }}>Sport Hub</span>, // Add a name property with a span for styling
    description: <span style={{ color: 'green' }}>Junior cricket kit for young players in cricket.</span>,
    price: <span style={{ color: 'darkblue' }}>$80</span>,
  },
  {
    imageUrl: cricketBat4,
    name: <span style={{ color: 'blue' }}>playMaster</span>, // Add a name property with a span for styling
    description: <span style={{ color: 'green' }}>Youth cricket bat for aspiring cricketers.</span>,
    price: <span style={{ color: 'darkblue' }}>$70</span>,
  },
  {
    imageUrl: cricketBall4,
    name: <span style={{ color: 'blue' }}>LG</span>, // Add a name property with a span for styling
    description: <span style={{ color: 'green' }}>Practice cricket ball for skill improvement in cricket.</span>,
    price: <span style={{ color: 'darkblue' }}>$8</span>,
  },
  // Add descriptions for the remaining images here
];
const Cricket = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [purchaseCount, setPurchaseCount] = useState(0);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const increaseCount = () => {
    setPurchaseCount(prevCount => prevCount + 1);
  };

  const decreaseCount = () => {
    if (purchaseCount > 0) {
      setPurchaseCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div>
      {isFormOpen && (
        <div className="buy-product-form">
          <h3>
            <img src={require('./trolly.jpeg')} alt="Trolley" className="trolley-icon" />
            Buy Product
          </h3>
          <form>
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <input type="text" id="productName" name="productName" required />
            </div>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" required />
            </div>
            <div className="form-actions">
              <button onClick={closeForm}>Cancel</button>
              <button type="submit">Buy</button>
            </div>
          </form>
          <div className="purchase-info">
            <span>Purchased Items: {purchaseCount}</span>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
          </div>
        </div>
      )}

      <h4>
        <img src={icon1} alt="Icon" className="small-icon" />
        <span className="small-heading">Shop your best cricket items</span>
      </h4>
      <div className="image-grid">
        {cricketItems.map((item, index) => (
          <div key={index} className="image-item">
            <img
              src={item.imageUrl}
              alt={`Cricket Item ${index + 1}`}
              className="cricket-image"
            />
            <div className="item-details">
              {item.name}
              {item.description}
              <div className="description-price">
                {item.price}
                <button onClick={openForm}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Contact Information and Copyright */}
      <div className="contact-info">
        <span>Contact Information:</span> Location:Pakistan/Islamabad/E14/street-20, Email:cricshop@gmail.com, Phone:+92 3185444491
      </div>

      <div className="copyright-info">
        <span>&copy; 2023 sports-shop</span> All Rights Reserved
      </div>
    </div>
  );
};

export default Cricket;

