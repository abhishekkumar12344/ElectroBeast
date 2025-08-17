import React, { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "./Products.css";

const Products = () => {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Electric Cycle",
      category: "Cycle",
      price: 35000,
      rating: 4,
      image: "https://imgs.search.brave.com/PnAF6pmo3FsHk68IpsrSmdpGHCusM6JNuAFz9W5hpEE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEvZWxlY3RyaWMt/Y3ljbGUvay81L3ov/aHVtLWxvbmctcmFu/Z2Utc21hcnQtcGx1/cy1ibGFjay1vcmFu/Z2UtMTgtNS1tb3Rv/dm9sdC1zaW5nbGUt/b3JpZ2luYWwtaW1h/Z3A3ejZoZnN1bnVi/dS5qcGVnP3E9NzA",
    },
    {
      id: 2,
      name: "Lithium Battery Pack",
      category: "Battery",
      price: 12000,
      rating: 5,
      image: "https://imgs.search.brave.com/X1H5hldk7FeX0faplZp-woE260Lt6kNSX1KKvTXYaSc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzExLzM4LzYxLzE4/LzM2MF9GXzExMzg2/MTE4ODNfeVBhM0FM/MTZOMmxmcUNVV3RZ/RUhVVGtVQldNdkNV/c3UuanBn",
    },
    {
      id: 3,
      name: "EV Scooter",
      category: "Scooter",
      price: 75000,
      rating: 4,
      image: "https://imgs.search.brave.com/Hu-KnYsEnIvV0HvsPSCfqa5Cz_KjBb2Tc1lD-1rWSzs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTg5Nzg4MDYtNzMw/NzM4NDNiMTVlP2Zt/PWpwZyZxPTYwJnc9/MzAwMCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE5IeDhaV3hsWTNS/eWFXTWxNakJpYVdO/NVkyeGxmR1Z1ZkRC/OGZEQjhmSHd3",
    },
    {
      id: 4,
      name: "Electric Cycle",
      category: "Cycle",
      price: 33000,
      rating: 4,
      image: "https://imgs.search.brave.com/7ysBpnDXDdzkusCuWhD4uQOc82LRSkv7VlQ9zJXqNBo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGV5YmlrZS5jb20v/Y2RuL3Nob3AvZmls/ZXMvSGV5YmlrZV9I/b3Jpem9uX1VfQmVz/dF9FbGVjdHJpY19C/aWtlX0RlYWxzX0Jl/c3RfRm9sZGluZ19G/YXRfVGlyZV9FYmlr/ZV9Pbl9TYWxlLnBu/Zz92PTE3NTQzOTA3/MzAmd2lkdGg9MjA0/OA",
    },
    {
      id: 5,
      name: "Electric Cycle",
      category: "Cycle",
      price: 31000,
      rating: 4,
      image: "https://imgs.search.brave.com/vvBTMiiLQDeUaFXvAsdLS3RguzT040ifBz_uXTfNZXQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/b29sLWJpY3ljbGUt/c3R1ZGlvXzIzLTIx/NTA4ODQyNzguanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MA",
    },
    {
      id: 6,
      name: "Electric Cycle",
      category: "Cycle",
      price: 74000,
      rating: 4,
      image: "https://imgs.search.brave.com/oK0fMsjhNQWiXgHHYqtWQOr_bQ8us6_Pu9gWkFO0deM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vU2tl/cmktRWxlY3RyaWMt/U2Nvb3Rlci0yNi1G/YXQtVGlyZS1FLUJp/a2UtMTAwMFctTW90/b3ItNDhWLTEzQWgt/UmVtb3ZhYmxlLUVs/ZWN0cmljLUJpa2Ut/QWR1bHRzLTYwLU1p/bGVzLTI1LW1waC1F/bGVjdHJpYy1CaWN5/Y2xlLTctU3BlZWQt/RnJvbnQtU3VzcGVu/c2lfYjU2MDYxMzkt/Y2UzYy00ZGZmLTk4/YTctMmUwMDZjNGMz/OTMzLmU2ZmZiMDE1/MmNkYTZhZjgyNDg4/MWY0OGM3NDJiZDM4/LmpwZWc_b2RuSGVp/Z2h0PTU4MCZvZG5X/aWR0aD01ODAmb2Ru/Qmc9RkZGRkZG",
    },
     {
      id: 7,
      name: "Lithium Battery Pack",
      category: "Battery",
      price: 12000,
      rating: 5,
      image: "https://imgs.search.brave.com/X1H5hldk7FeX0faplZp-woE260Lt6kNSX1KKvTXYaSc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzExLzM4LzYxLzE4/LzM2MF9GXzExMzg2/MTE4ODNfeVBhM0FM/MTZOMmxmcUNVV3RZ/RUhVVGtVQldNdkNV/c3UuanBn",
    },
     {
      id: 8,
      name: "Lithium Battery Pack",
      category: "Battery",
      price: 12000,
      rating: 5,
      image: "https://imgs.search.brave.com/X1H5hldk7FeX0faplZp-woE260Lt6kNSX1KKvTXYaSc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzExLzM4LzYxLzE4/LzM2MF9GXzExMzg2/MTE4ODNfeVBhM0FM/MTZOMmxmcUNVV3RZ/RUhVVGtVQldNdkNV/c3UuanBn",
    },
     {
      id: 9,
      name: "Lithium Battery Pack",
      category: "Battery",
      price: 12000,
      rating: 5,
      image: "https://imgs.search.brave.com/X1H5hldk7FeX0faplZp-woE260Lt6kNSX1KKvTXYaSc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzExLzM4LzYxLzE4/LzM2MF9GXzExMzg2/MTE4ODNfeVBhM0FM/MTZOMmxmcUNVV3RZ/RUhVVGtVQldNdkNV/c3UuanBn",
    },
     {
      id: 10,
      name: "Lithium Battery Pack",
      category: "Battery",
      price: 12000,
      rating: 5,
      image: "https://imgs.search.brave.com/X1H5hldk7FeX0faplZp-woE260Lt6kNSX1KKvTXYaSc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzExLzM4LzYxLzE4/LzM2MF9GXzExMzg2/MTE4ODNfeVBhM0FM/MTZOMmxmcUNVV3RZ/RUhVVGtVQldNdkNV/c3UuanBn",
    },

  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      (filter === "All" || p.category === filter) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="products-page">
      {/* Hero Section */}
      <div className="products-hero" data-aos="fade-up">
        <h1>Explore Our EV Products</h1>
        <p>Discover premium electric cycles, batteries & chargers</p>
      </div>

      {/* Filters & Search */}
      <div className="filter-search" data-aos="fade-right">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Cycle">Cycles</option>
          <option value="Battery">Batteries</option>
          <option value="Charger">Chargers</option>
        </select>
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="products-grid">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className="product-card"
            data-aos={index % 2 === 0 ? "zoom-in" : "fade-up"}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">₹{product.price.toLocaleString()}</p>
            <div className="stars">
              {"★".repeat(product.rating)}
              {"☆".repeat(5 - product.rating)}
            </div>
            <div className="buttons">
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <button className="buy-now">Buy Now</button>
              <button
                className="quick-view"
                onClick={() => setSelectedProduct(product)}
              >
                Quick View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div className="cart" data-aos="fade-left">
        <h2>🛒 Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items yet.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, i) => (
                <li key={i}>
                  {item.name} - ₹{item.price.toLocaleString()}
                </li>
              ))}
            </ul>
            <h3>Total: ₹{totalPrice.toLocaleString()}</h3>
          </>
        )}
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="modal" onClick={() => setSelectedProduct(null)}>
          <div
            className="modal-content"
            data-aos="zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <p className="price">₹{selectedProduct.price.toLocaleString()}</p>
            <button onClick={() => addToCart(selectedProduct)}>
              Add to Cart
            </button>
            <button className="close" onClick={() => setSelectedProduct(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
