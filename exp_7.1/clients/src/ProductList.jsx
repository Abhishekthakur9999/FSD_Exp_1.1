import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load products 😢");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px",border:"2px solid black" }}>
      <h2>🛍️ Product List</h2>
      <ul style={{ listStyle: "none", padding: 0 , display:"flex", flexDirection:"row",gap:"10px", justifyContent:"space-around"}}>
        {products.map((p) => (
          <li
            key={p.id}
            style={{
              margin: "10px 0",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              maxWidth: "300px",
            }}
          >
            <strong>{p.name}</strong>
            <br />
            ₹{p.price.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
