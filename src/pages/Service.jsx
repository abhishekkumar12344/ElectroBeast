import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
    const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-overlay">
          <h1 data-aos="fade-up">Redefining Mobility with Innovation</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            From electric cycles to advanced lithium battery technology – we
            power the future of mobility.
          </p>
            <button
          className="cta-btn"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
        </div>
      </section>

      {/* 360° Showcase */}
      <section className="showcase" data-aos="fade-up">
        <h2>360° Product Showcase</h2>
        <div className="showcase-container">
          <div className="viewer">
            <h3>Electric Cycle</h3>
            <img
              src="/assets/products/product3.jpg"
              alt="Electric Cycle"
              className="rotate-img"
            />
          </div>
          <div className="viewer">
            <h3>Lithium Battery</h3>
            <img
              src="https://imgs.search.brave.com/7Qe3yTv4OE7IjlnOetX4Kfo0APevmT4aHYmFIhzP2Lg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/OTAzNzkyMS9waG90/by8zZC1yZW5kZXIt/d2hpdGUtYmx1ZS1s/aXRoaXVtLWJhdHRl/cmllcy1hYnN0cmFj/dC1jb25jZXB0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1W/ZVNaeVEwRXBRYnNl/ZlcxNVpudEdfSnJC/YWV3TjFKZlU3RFNB/ZFliWFBjPQ"
              alt="Lithium Battery"
              className="rotate-img"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid" data-aos="fade-up">
        <h2>Our Services</h2>
        <div className="grid-container">
          <div className="service-card" data-aos="flip-left">
            <img
              src="/assets/products/product.jpg"
              alt="Cycle Manufacturing"
            />
            <h3>Electric Cycle Manufacturing</h3>
            <p>High-performance cycles designed for urban mobility.</p>
            <button className="service-btn">Know More</button>
          </div>
          <div className="service-card" data-aos="flip-left" data-aos-delay="200">
            <img
              src="/assets/products/battry.jpg"
              alt="Battery Technology"
            />
            <h3>Lithium Battery Technology</h3>
            <p>Durable and efficient batteries for longer rides.</p>
            <button className="service-btn">Know More</button>
          </div>
          <div className="service-card" data-aos="flip-left" data-aos-delay="400">
            <img
              src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
              alt="Maintenance"
            />
            <h3>Maintenance & Support</h3>
            <p>Comprehensive service and technical support.</p>
            <button className="service-btn">Know More</button>
          </div>
          <div className="service-card" data-aos="flip-left" data-aos-delay="600">
            <img
              src="https://imgs.search.brave.com/H0yRUdOMm1zZrJQQBLrQfG4bECx1bNnp9uzh-JH8BdE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxU0lWaUUyd3pM/LmpwZw"
              alt="Innovation"
            />
            <h3>Future Innovation</h3>
            <p>Researching advanced EV technologies for tomorrow.</p>
            <button className="service-btn">Know More</button>
          </div>
        </div>
      </section>

       {/* Why Choose Us */}
      <section className="why-choose" data-aos="fade-up">
        <h2>Why Choose Us?</h2>
        <div className="stats">
          <div className="stat-card">
            <h3>🌍 Eco-Friendly</h3>
            <p>Clean and sustainable technology for a better future.</p>
          </div>
          <div className="stat-card">
            <h3>🚴 1000+</h3>
            <p>Happy Riders enjoying our products worldwide.</p>
          </div>
          <div className="stat-card">
            <h3>⚡ 10+ Years</h3>
            <p>Experience in electric mobility solutions.</p>
          </div>
          <div className="stat-card">
            <h3>📞 24/7</h3>
            <p>Support team ready to assist you anytime.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials" data-aos="fade-up">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"The best electric cycle I’ve ever used. Lightweight and powerful!"</p>
            <h4>- Rohan Mehta</h4>
          </div>
          <div className="testimonial-card">
            <p>"The battery lasts so long! Perfect for my daily commute."</p>
            <h4>- Priya Sharma</h4>
          </div>
          <div className="testimonial-card">
            <p>"Excellent support team, always ready to help with quick service."</p>
            <h4>- Aarav Singh</h4>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" data-aos="zoom-in">
        <h2>Ready to Switch to Clean Mobility?</h2>
        <button
          className="cta-btn"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </section>
    </div>
    
    
  );
};

export default Services;
