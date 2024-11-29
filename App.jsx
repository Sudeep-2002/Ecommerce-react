import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // Product data
  const products = [
    { id: 1, name: "Laptop", price: 999, image: "https://www.linkedin.com/in/sudeep8277394180" },
    { id: 2, name: "Headphones", price: 199, image: "https://linkedin.com" },
    { id: 3, name: "Smartphone", price: 799, image: "https://via.placeholder.com/150" },
  ];

  // Cart state
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>E-Commerce Store</h1>

      {/* Product Listing */}
      <h2>Products</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              width: "150px",
              textAlign: "center",
            }}
          >
            <img src={product.image} alt={product.name} style={{ width: "100%" }} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button
              style={{ background: "blue", color: "white", border: "none", padding: "5px 10px" }}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: "0" }}>
          {cart.map((item, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 0",
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <span>
                {item.name} - ${item.price}
              </span>
              <button
                style={{ background: "green", color: "white", border: "none", padding: "5px 10px" }}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Render the app
ReactDOM.render(<App />, document.getElementById("root"));
