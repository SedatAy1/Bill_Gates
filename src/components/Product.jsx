import React from 'react';

const Product = ({ name, price, imageUrl, quantity, onBuy, onSell }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <div className="controls">
        <button onClick={onSell} disabled={quantity === 0}>Sell</button>
        <input type="number" value={quantity} readOnly />
        <button onClick={onBuy}>Buy</button>
      </div>
    </div>
  );
};

export default Product;