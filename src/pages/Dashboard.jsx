import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Dashboard.css";

const Dashboard = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="dash-header" data-aos="fade-down">
        <h1>Welcome, Abhishek 👋</h1>
        <p>Manage your orders and shopping activity</p>
      </div>

      {/* STATS */}
      <div className="dash-stats">
        <div className="stat-card" data-aos="zoom-in">
          <span>Total Orders</span>
          <h2>12</h2>
        </div>
        <div className="stat-card" data-aos="zoom-in" data-aos-delay="100">
          <span>In Progress</span>
          <h2>2</h2>
        </div>
        <div className="stat-card" data-aos="zoom-in" data-aos-delay="200">
          <span>Delivered</span>
          <h2>9</h2>
        </div>
        <div className="stat-card" data-aos="zoom-in" data-aos-delay="300">
          <span>Wishlist</span>
          <h2>5</h2>
        </div>
      </div>

      {/* RECENT ORDERS */}
      <section className="dash-section" data-aos="fade-up">
        <h3>Recent Orders</h3>

        <div className="order-row">
          <img src="https://via.placeholder.com/70" alt="" />
          <div>
            <h4>Wireless Headphones</h4>
            <small>Order #EB1023</small>
          </div>
          <span className="status delivered">Delivered</span>
        </div>

        <div className="order-row">
          <img src="https://via.placeholder.com/70" alt="" />
          <div>
            <h4>Smart Watch</h4>
            <small>Order #EB1031</small>
          </div>
          <span className="status shipped">Shipped</span>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <div className="dash-actions">
        <div className="action-card" data-aos="fade-right">
          <h4>Wishlist</h4>
          <p>5 items saved</p>
          <button>View Wishlist</button>
        </div>

        <div className="action-card" data-aos="fade-left">
          <h4>Cart</h4>
          <p>3 items in cart</p>
          <button>Go to Cart</button>
        </div>
      </div>

      {/* RECOMMENDED */}
      <section className="dash-section" data-aos="fade-up">
        <h3>Recommended for You</h3>

        <div className="product-grid">
          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="" />
            <h4>Bluetooth Speaker</h4>
            <p>₹2,199</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="" />
            <h4>Gaming Mouse</h4>
            <p>₹1,499</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="" />
            <h4>Power Bank</h4>
            <p>₹999</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Dashboard;
