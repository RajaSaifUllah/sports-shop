import React, { useState } from 'react';
import './Football.css'; // Import a CSS file for styling
import football1 from './Footballimages/foot1.jpeg';
import football2 from './Footballimages/foot2.jpeg';
import football3 from './Footballimages/foot3.jpeg';
import football4 from './Footballimages/foot4.jpeg';
import kit1 from './Footballimages/footkit1.jpeg';
import kit2 from './Footballimages/footkit2.jpeg';
import shoes1 from './Footballimages/shoes1.jpeg';
import shoes2 from './Footballimages/shoes2.jpeg';
import shoes3 from './Footballimages/shoes3.jpeg';
import shoes4 from './Footballimages/shoes4.jpeg';
import icon1 from './Footballimages/icon1.png'; // Import the icon image

const footballItems = [
  {
    imageUrl: football1,
    name: <span style={{ color: 'blue' }}>Professional Football</span>, // Add a name property for the item
    description: <span style={{ color: 'green' }}>High-quality football for professionals.</span>,
    price: <span style={{ color: 'darkblue' }}>$20</span>,
  },
  {
    imageUrl: football2,
    name: <span style={{ color: 'blue' }}>Football Boots</span>, // Add a name property for the item
    description: <span style={{ color: 'green' }}>Professional football boots for match play.</span>,
    price: <span style={{ color: 'darkblue' }}>$50</span>,
  },
  {
    imageUrl: football3,
    name: <span style={{ color: 'blue' }}>Football Jersey</span>, // Add a name property for the item
    description: <span style={{ color: 'green' }}>Premium football jersey for serious players.</span>,
    price: <span style={{ color: 'darkblue' }}>$30.99</span>,
  },
  {
    imageUrl: football4,
    name: <span style={{ color: 'blue' }}>Training Football</span>, // Add a name property for the item
    description: <span style={{ color: 'green' }}>Training football for practice sessions.</span>,
    price: <span style={{ color: 'darkblue' }}>$15.99</span>,
  },
  {
    imageUrl: kit1,
    name: <span style={{ color: 'blue' }}>Complete Football Kit</span>, // Add a name property for the item
    description: <span style={{ color: 'green' }}>Complete football kit for all your needs.</span>,
    price: <span style={{ color: 'darkblue' }}>$75</span>,
  },
  {
    imageUrl: kit2,
    name: <span style={{ color: 'blue' }}>Beginner Football Boots</span>, // Add a name property for the item
    description: <span style={{ color: 'green' }}>Beginner football boots for those starting out.</span>,
    price: <span style={{ color: 'darkblue' }}>$25</span>,
  },
  {
    imageUrl: shoes1,
    name: <span style={{ color: 'blue' }}>quality Football Shoes</span>, // Add a name property for the item
    description: <span style={{ color: 'green' }}>Match-quality football shoes for games.</span>,
    price: <span style={{ color: 'darkblue' }}>$40</span>,
  },
  {
    imageUrl: shoes2,
    name: <span style={{ color: 'blue' }}>Football Gloves</span>, // Add a name property for the item
    description: <span style={{ color: 'green' }}>Durable football gloves for added protection.</span>,
    price: <span style={{ color: 'darkblue' }}>$12</span>,
  },
  {
    imageUrl: shoes3,
    name: <span style={{ color: 'blue' }}>Football Helmet</span>, // Add a name property for the item
    description: <span style={{ color: 'green' }}>Lightweight football helmet for safety.</span>,
    price: <span style={{ color: 'darkblue' }}>$20</span>,
  },
  {
    imageUrl: shoes4,
    name: <span style={{ color: 'blue' }}>Football Bag</span>, // Add a name property for the item
    description: <span style={{ color: 'green' }}>Football bag to carry your gear.</span>,
    price: <span style={{ color: 'darkblue' }}>$18</span>,
  },
  // Add descriptions and prices for the remaining items here
];

const Football = () => {
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
        <span className="small-heading">Shop your best football items</span>
      </h4>
      <div className="image-grid">
        {footballItems.map((item, index) => (
          <div key={index} className="image-item">
            <img
              src={item.imageUrl}
              alt={`Football Item ${index + 1}`}
              className="football-image"
            />
            <div className="item-details">
              <h3>{item.name}</h3>
              {item.description}<br></br>
              <div className="description-price">
                {item.price} <br></br>
                <button onClick={openForm}>Buy Now</button>
              </div>
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

export default Football;
  

    