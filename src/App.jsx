import React, { useState } from 'react';
import Product from './components/Product';
import "./App.css";
import Receipt from './Receipt';

const App = () => {
  const [balance, setBalance] = useState(100000000000);
  const [products, setProducts] = useState([
    { id: 1, name: "Big Mac", price: 2, quantity: 0, imageUrl: "https://picsum.photos/100?1" },
    { id: 2, name: "Flip Flops", price: 3, quantity: 0, imageUrl: "https://picsum.photos/100?2" },
    { id: 3, name: "Coca-Cola Pack", price: 5, quantity: 0, imageUrl: "https://picsum.photos/100?3" },
    { id: 4, name: "Movie Ticket", price: 12, quantity: 0, imageUrl: "https://picsum.photos/100?4" },
    { id: 5, name: "Book", price: 15, quantity: 0, imageUrl: "https://picsum.photos/100?5" },
    { id: 6, name: "Lobster Dinner", price: 45, quantity: 0, imageUrl: "https://picsum.photos/100?6" },
    { id: 7, name: "Video Game", price: 60, quantity: 0, imageUrl: "https://picsum.photos/100?7" },
    { id: 8, name: "Amazon Echo", price: 99, quantity: 0, imageUrl: "https://picsum.photos/100?8" },
    { id: 9, name: "Year of Netflix", price: 100, quantity: 0, imageUrl: "https://picsum.photos/100?9" }  
    // Add more products as needed
  ]);

  const handleBuy = (productId) => {
    setProducts(products.map(product => {
      if (product.id === productId && balance >= product.price) {
        setBalance(balance - product.price);
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    }));
  };

  const handleSell = (productId) => {
    setProducts(products.map(product => {
      if (product.id === productId && product.quantity > 0) {
        setBalance(balance + product.price);
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    }));
  };

  return (
    <div className="app">
      <header>
        <h1>Spend Bill Gates' Money</h1>
        <h2>${balance.toLocaleString()}</h2>
      </header>
      <div className="product-list">
        {products.map(product => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            quantity={product.quantity}
            onBuy={() => handleBuy(product.id)}
            onSell={() => handleSell(product.id)}
          />
        ))}
      </div>
      <Receipt products={products} />
    </div>
  );
};

export default App;