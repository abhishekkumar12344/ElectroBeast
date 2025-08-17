import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Battery.css";

const Battery = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const products = [
    {
      id: 1,
      name: "PowerCell 48V",
      desc: "Lightweight 48V lithium battery with 50km range.",
      img: "https://imgs.search.brave.com/f3ayko6xLev3D2nMYv0totCEo6q-sfmI_Lblb9tuZ5c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODE0MzM0/MTk3NDctZjVjMTE0/NDMwYWI1P2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1U/TjhmR3hwZEdocGRX/MGxNakJwYjI0bE1q/QmlZWFIwWlhKNWZH/VnVmREI4ZkRCOGZI/d3c",
      price: "₹15,000",
      specs: "48V | 10Ah | 2 Year Warranty"
    },
    {
      id: 2,
      name: "UltraLife 60V",
      desc: "High-capacity 60V lithium battery for longer rides.",
      img: "https://imgs.search.brave.com/yLrZqcOw2YZ8JWU44h1jWM3dHOx8vy8JjZWYp2PE8_M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y3L2Qx/LzUxL2Y3ZDE1MWM4/MDRjM2VlMzZhZWYy/N2U4ZmI2MDFmM2M0/LmpwZw",
      price: "₹22,000",
      specs: "60V | 15Ah | 3 Year Warranty"
    },
    {
      id: 3,
      name: "Smart BMS Pack",
      desc: "Advanced battery pack with Smart BMS and fast charging.",
      img: "https://imgs.search.brave.com/5c7pxVzRplIeB5F2hRu5XPzjGCiHHznhP3ifdv2NLMw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTQv/MDg3Lzg0OC9zbWFs/bC9hLXBpbGUtb2Yt/bGl0aGl1bS1iYXR0/ZXJpZXMtd2l0aC1k/YXJrLWJhY2tncm91/bmQtcGhvdG8uanBn",
      price: "₹28,000",
      specs: "72V | 20Ah | 3 Year Warranty"
    },
     {
      id: 4,
      name: "UltraLife 60V",
      desc: "High-capacity 60V lithium battery for longer rides.",
      img: "https://imgs.search.brave.com/yLrZqcOw2YZ8JWU44h1jWM3dHOx8vy8JjZWYp2PE8_M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y3L2Qx/LzUxL2Y3ZDE1MWM4/MDRjM2VlMzZhZWYy/N2U4ZmI2MDFmM2M0/LmpwZw",
      price: "₹22,000",
      specs: "60V | 15Ah | 3 Year Warranty"
    },
     {
      id: 5,
      name: "UltraLife 60V",
      desc: "High-capacity 60V lithium battery for longer rides.",
      img: "https://imgs.search.brave.com/yLrZqcOw2YZ8JWU44h1jWM3dHOx8vy8JjZWYp2PE8_M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y3L2Qx/LzUxL2Y3ZDE1MWM4/MDRjM2VlMzZhZWYy/N2U4ZmI2MDFmM2M0/LmpwZw",
      price: "₹22,000",
      specs: "60V | 15Ah | 3 Year Warranty"
    },
  ];

  return (
    <div className="battery-page">
      {/* Hero Section */}
      <section className="battery-hero">
        <div className="hero-overlay">
          <h1 data-aos="fade-up">Powering the Future with Lithium</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            High-performance, eco-friendly, and long-lasting lithium batteries for your EVs.
          </p>
           <button 
            className="learn-more-btn"
            onClick={() => navigate("/Products")}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="battery-features">
        <h2 data-aos="fade-right">Why Choose Our Batteries?</h2>
        <div className="features-grid">
          <div className="feature-card" data-aos="zoom-in">
            🔋 <h3>Long Life Cycle</h3>
            <p>Over 1000 charge cycles with consistent performance.</p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="100">
            ⚡ <h3>Fast Charging</h3>
            <p>80% charge in just 1 hour with fast charging tech.</p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="200">
            🔒 <h3>Safety Certified</h3>
            <p>Built with advanced BMS for complete safety.</p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="300">
            🌍 <h3>Eco Friendly</h3>
            <p>Zero emissions and recyclable materials.</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="battery-products">
        <h2 data-aos="fade-left">Our Battery Range</h2>
        <div className="product-grid">
          {products.map((prod) => (
            <div className="product-card" key={prod.id} data-aos="fade-up">
              <img src={prod.img} alt={prod.name} />
              <h3>{prod.name}</h3>
              <p>{prod.desc}</p>
              <p className="price">{prod.price}</p>
              <button onClick={() => setSelectedProduct(prod)}>Quick View</button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Quick View */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.img} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.desc}</p>
            <p><strong>Specs:</strong> {selectedProduct.specs}</p>
            <p className="price">{selectedProduct.price}</p>
            <button onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Comparison Table */}
      <section className="battery-compare">
        <h2 data-aos="fade-right">Compare Our Batteries</h2>
        <table data-aos="fade-up">
          <thead>
            <tr>
              <th>Model</th>
              <th>Capacity</th>
              <th>Range</th>
              <th>Warranty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PowerCell 48V</td>
              <td>10Ah</td>
              <td>50km</td>
              <td>2 Years</td>
              <td>₹15,000</td>
            </tr>
            <tr>
              <td>UltraLife 60V</td>
              <td>15Ah</td>
              <td>70km</td>
              <td>3 Years</td>
              <td>₹22,000</td>
            </tr>
            <tr>
              <td>Smart BMS Pack</td>
              <td>20Ah</td>
              <td>90km</td>
              <td>3 Years</td>
              <td>₹28,000</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* FAQ */}
      <section className="battery-faq">
        <h2 data-aos="fade-left">FAQ</h2>
        <div className="faq-item" data-aos="fade-up">
          <h3>How long does the battery last?</h3>
          <p>Our batteries last 1000+ cycles, which means 3-5 years of usage.</p>
        </div>
        <div className="faq-item" data-aos="fade-up" data-aos-delay="100">
          <h3>Is it safe to charge at home?</h3>
          <p>Yes, all our batteries come with certified chargers and BMS.</p>
        </div>
        <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
          <h3>Do you provide warranty?</h3>
          <p>Yes, 2–3 years warranty depending on the model.</p>
        </div>
      </section>
    </div>
  );
};

export default Battery;
