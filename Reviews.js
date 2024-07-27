import React, { useState } from 'react';
import './App.css';

function App() {
  const [reviews, setReviews] = useState([
    { name: 'Reviewer name', text: 'This product is good.' },
    { name: 'Reviewer name', text: 'This product is not great.' }
  ]);

  const [newReview, setNewReview] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim()) {
      setReviews([...reviews, { name: 'Reviewer name', text: newReview }]);
      setNewReview('');
    }
    
  };

  return (
    <div className="product-page">
      <header className="header">
        <div className="logo">SVES Commerce</div>
        <input type="text" placeholder="Type here to search" className="search-bar" />
        <button className="search-button">Search</button>
        <div className="cart">Cart (3)</div>
        <div className="username">Hello, username</div>
      </header>

      <div className="product-details">
        <div className="product-image">
          <img src="/JAVASCRIPT_Logo.jpeg" alt="Product" />
        </div>
        <div className="product-info">
          <h1>Product Name</h1>
          <p>
            Description Description Description Description Description Description
            Description Description Description Description Description Description
            Description Description Description Description Description Description
          </p>
          <div className="product-price">₹500.00</div>
          <button className="add-to-cart-button">Add to cart</button>
          
        </div>
      </div>

      <div className="product-specifications">
        <h2>Product specifications</h2>
        <p>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</p>
      </div>

      <div className="reviews">
        <h2>Reviews</h2>
        <form onSubmit={handleReviewSubmit}>
          <input
            type="text"
            placeholder="Type to review"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
          <button type="submit">Add review</button>
        </form>
        <div className="review-list">
          {reviews.map((review, index) => (
            <div key={index} className="review-item">
              <strong>{review.name}</strong>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
