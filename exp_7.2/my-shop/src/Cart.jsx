// src/components/Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "./cartSlice";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((s, it) => s + it.price * it.quantity, 0);

  if (items.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: 24 }}>
        <h2>Shopping Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: 24 }}>
      <h2>Shopping Cart</h2>

      <div style={{ display: "inline-block", textAlign: "left" }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              marginBottom: 12,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div style={{ width: 160 }}>
              {item.name} (${item.price})
            </div>

            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                dispatch(updateQuantity({ id: item.id, quantity: e.target.value }))
              }
              style={{ width: 60 }}
            />

            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        ))}

        <div style={{ borderTop: "1px solid #ddd", paddingTop: 8, marginTop: 8 }}>
          <strong>Total: ${total.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
}
