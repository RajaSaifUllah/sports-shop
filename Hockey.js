import React, { useState } from 'react';
import './Hockey.css'; // Import a CSS file for styling
import hockey1 from './Hockeyimages/hockey1.jpeg';
import hockey2 from './Hockeyimages/hockey2.jpeg';
import hockey3 from './Hockeyimages/hockey3.jpeg';
import hockey4 from './Hockeyimages/hockey4.jpeg';
import kit1 from './Hockeyimages/kit1.jpeg';
import kit2 from './Hockeyimages/kit2.jpeg';
import shoes1 from './Hockeyimages/shoes1.jpeg';
import shoes2 from './Hockeyimages/shoes2.jpeg';
import shoes3 from './Hockeyimages/shoes3.jpeg';
import shoes4 from './Hockeyimages/shoes4.jpeg';
import icon1 from './Hockeyimages/icon1.png'; // Import the icon image

const hockeyItems = [
  {
    imageUrl: hockey1,
    name: <span style={{ color: 'orange' }}>Ultra Hockey Stick</span>, // Add a name property for the item
    description: <span style={{ color: 'green' }}>High-quality hockey stick for professionals.</span>,
    price: <span style={{ color: 'darkblue' }}>$10</span>,
  },
  {
    imageUrl: hockey2,
    name: <span style={{ color: 'orange' }}>Hockey Puck</span>, // Add a name property for the item
    description: <span style={{ color: 'green' }}>Professional hockey puck for match play.</span>,
    price: <span style={{ color: 'darkblue' }}>$15</span>,
  },
  {
    imageUrl: hockey3,
    name: <span style={{ color: 'orange' }}>Premium Hockey Stick</span>, // Add a name property for the item
    description: <span style={{ color: 'green' }}>Premium hockey stick for serious players.</span>,
    price: <span style={{ color: 'darkblue' }}>$19.99</span>,
  },
  {
    imageUrl: hockey4,
    name: <span style={{ color: 'orange' }}>Training Hockey Puck</span>, // Add a name property for the item
    description: <span style={{ color: 'green' }}>Training hockey puck for practice sessions.</span>,
    price: <span style={{ color: 'darkblue' }}>$25.99</span>,
  },
  {
    imageUrl: kit1,
    name: <span style={{ color: 'orange' }}>Complete Hockey Kit</span>, // Add a name property for the item
    description: <span style={{ color: 'green' }}>Complete hockey kit for all your needs.</span>,
    price: <span style={{ color: 'darkblue' }}>$21</span>,
  },
  {
    imageUrl: kit2,
    name: <span style={{ color: 'orange' }}>Beginner Hockey Stick</span>, // Add a name property for the item
    description: <span style={{ color: 'green' }}>Beginner hockey stick for those starting out.</span>,
    price: <span style={{ color: 'darkblue' }}>$16</span>,
  },
  {
    imageUrl: shoes1,
    name: <span style={{ color: 'orange' }}>quality Hockey Shoes</span>, // Add a name property for the item
    description: <span style={{ color: 'green' }}>Match-quality hockey shoes for games.</span>,
    price: <span style={{ color: 'darkblue' }}>$8</span>,
  },
  {
    imageUrl: shoes2,
    name: <span style={{ color: 'orange' }}>Durable Hockey Gloves</span>, // Add a name property for the item
    description: <span style={{ color: 'green' }}>Durable hockey gloves.</span>,
    price: <span style={{ color: 'darkblue' }}>$10</span>,
  },
  {
    imageUrl: shoes3,
    name: <span style={{ color: 'orange' }}> Hockey Helmet</span>, // Add a name property for the item
    description: <span style={{ color: 'green' }}>Lightweight hockey helmet for safety.</span>,
    price: <span style={{ color: 'darkblue' }}>$7</span>,
  },
  {
    imageUrl: shoes4,
    name: <span style={{ color: 'orange' }}>Hockey Bag</span>, // Add a name property for the item
    description: <span style={{ color: 'green' }}>Hockey bag to carry your gear.</span>,
    price: <span style={{ color: 'darkblue' }}>$9</span>,
  },
  // Add descriptions and prices for the remaining items here
];

const Hockey = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
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
        </div>
      )}
      <h4>
        <img src={icon1} alt="Icon" className="small-icon" />
        <span className="small-heading">Shop your best hockey items</span>
      </h4>
      <div className="image-grid">
        {hockeyItems.map((item, index) => (
          <div key={index} className="image-item">
            <img
              src={item.imageUrl}
              alt={`Hockey Item ${index + 1}`}
              className="hockey-image"
            />
            <div className="item-details">
              <h3>{item.name}</h3>
              {item.description}<br></br> {/* Display the description */}
              <div className="description-price">
                {item.price} <br></br>{/* Display the price */}
              </div>
              <button onClick={openForm}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
   
     {/* Contact Information and Copyright */}
     <div className="contact-info">
  <span>Contact Information:
    </span> Location:Pakistan/Islamabad/E14/street-20,
     Email:cricshop@gmail.com,
      Phone:+92 3185444491
</div>

<div className="copyright-info">
  <span>&copy; 2023 sports-shop</span> All Rights Reserved
</div>
    </div>
  );
};

export default Hockey;
  

    
