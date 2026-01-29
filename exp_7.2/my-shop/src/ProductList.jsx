// src/components/ProductList.js
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

const PRODUCTS = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 45 },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Products</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
        {PRODUCTS.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              padding: 16,
              borderRadius: 8,
              width: 160,
            }}
          >
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
