import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ add navigation
import AOS from "aos";
import "aos/dist/aos.css";
import "./Products.css";

const Products = () => {
  const navigate = useNavigate(); // ✅ hook for navigation

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // -------------------- PRODUCT DATA --------------------
  const products = [
    {
      id: 1,
      name: "Electric Cycle",
      category: "Cycle",
      price: 35000,
      rating: 4,
      image: "/assets/products/product1.jpg",
    },
    {
      id: 2,
      name: "Electric Cycle",
      category: "Cycle",
      price: 77000,
      rating: 4,
      image: "/assets/products/product2.jpg",
    },
    {
      id: 3,
      name: "Electric Cycle",
      category: "Cycle",
      price: 99000,
      rating: 4,
      image: "/assets/products/product6.jpg",
    },
    {
      id: 4,
      name: "Electric Cycle",
      category: "Cycle",
      price: 88000,
      rating: 4,
      image: "/assets/products/product4.jpg",
    },
    {
      id: 5,
      name: "Electric Cycle",
      category: "Cycle",
      price: 33000,
      rating: 4,
      image: "/assets/products/product5.jpg",
    },
    {
      id: 6,
      name: "EV Scooter",
      category: "Scooter",
      price: 75000,
      rating: 4,
      image:
        "https://imgs.search.brave.com/MANDowOujo0e7rnIfukc2iltjNu80Mti2BXAwnEbOGA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbGVj/c29uLnMzLmFwLXNv/dXRoLTEuYW1hem9u/YXdzLmNvbS9Ib21l/UGFnZV9DeWNsZV9N/b2RlbHMvbGFkaWVz/X3BlYWNoLnBuZw",
    },
    {
      id: 7,
      name: "Electric Cycle",
      category: "Cycle",
      price: 33000,
      rating: 4,
      image:
        "https://imgs.search.brave.com/fJe6GbczfYp_V1BLBoDHwaiKthKyUgLotP3FvCGMXgA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWJhYnlrYXJ0LmNv/bS9hc3NldHMvaW1h/Z2VzL3Byb2R1Y3Rz/LzQ2OTYyMGIxNTgx/NmQ0YWVkNDA1Y2Vl/MjhiOTk1MTg2Lmpw/Zw",
    },
    {
      id: 8,
      name: "Electric Cycle",
      category: "Cycle",
      price: 31000,
      rating: 4,
      image:
        "https://imgs.search.brave.com/jXDfkAyUYQpZgCZjwPz91BJD5-W6JnUuYPnSNQglAeA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEvZWxlY3RyaWMt/Y3ljbGUvOS9iL3kv/ZG9wZS1raWRzLWVs/ZWN0cmljY3ljbGUt/d2l0aC01LTJhaC1s/aS1pb24tcmVtb3Zl/LWJhdHRlcnktaGln/aC1vcmlnaW5hbC1p/bWFoZzczcWQ5bnRo/aHF5LmpwZWc_cT03/MA",
    },
    {
      id: 9,
      name: "Electric Cycle",
      category: "Cycle",
      price: 74000,
      rating: 4,
      image:
        "https://imgs.search.brave.com/-Ga95mA_CoyXo5NLQaan2Au7CNs2_pTHcrqiJujKqF8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFMRlVpM2xRWUwu/anBn",
    },
    {
      id: 10,
      name: "Lithium Battery Pack",
      category: "Battery",
      price: 12000,
      rating: 5,
      image: "/assets/products/battry.jpg",
    },
    {
      id: 11,
      name: "Lithium Battery Pack",
      category: "Battery",
      price: 12000,
      rating: 5,
      image:
        "https://imgs.search.brave.com/32prmdbJiiS_tk-xLy80P-sg_-1j3pppvQvUWJW6gGY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/ODgwNTYwNy9waG90/by9tb2Rlcm4tbGl0/aGl1bS1pb24tYmF0/dGVyeS10ZWNobm9s/b2d5LWNvbmNlcHQt/bWV0YWwtbGktaW9u/LWJhdHRlcnktY2Vs/bHMtd2l0aC1lbGVj/dHJpYy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cjBWWG9f/UlB4TUw4dlVkS1RP/c1NWaGlEdTFjckM2/QVBOLVl4bzNSUGpr/MD0",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // FILTERED PRODUCT LIST
  const filteredProducts = products.filter(
    (p) =>
      (filter === "All" || p.category === filter) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  // ---------------- CART FUNCTIONS ----------------
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  // ---------------- NAVIGATION TO ORDER PAGE ----------------
  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    navigate("/order", {
      state: { cart, totalPrice },
    });
  };

  const buyNow = (product) => {
    navigate("/order", {
      state: { cart: [product], totalPrice: product.price },
    });
  };

  return (
    <div className="products-page">
      {/* HERO SECTION */}
      <div className="products-hero" data-aos="fade-up">
        <h1>Explore Our EV Products</h1>
        <p>Discover premium electric cycles, batteries & chargers</p>
      </div>

      {/* FILTERS */}
      <div className="filter-search" data-aos="fade-right">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Cycle">Cycles</option>
          <option value="Battery">Batteries</option>
          <option value="Scooter">Scooters</option>
        </select>

        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* PRODUCT GRID */}
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

              <button className="buy-now" onClick={() => buyNow(product)}>
                Buy Now
              </button>

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

      {/* CART SECTION */}
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

            <button className="place-order-btn" onClick={placeOrder}>
              Place Order
            </button>
          </>
        )}
      </div>

      {/* QUICK VIEW MODAL */}
      {selectedProduct && (
        <div className="modal" onClick={() => setSelectedProduct(null)}>
          <div
            className="modal-content"
            data-aos="zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>

            <p className="price">
              ₹{selectedProduct.price.toLocaleString()}
            </p>

            <button onClick={() => addToCart(selectedProduct)}>
              Add to Cart
            </button>

            <button className="buy-now" onClick={() => buyNow(selectedProduct)}>
              Buy Now
            </button>

            <button
              className="close"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
