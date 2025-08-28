import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const navigate = useNavigate();
  useEffect(() => { AOS.init({ duration: 1000 }); }, []);

  return (
    <div className="about-page">
      <section className="about-hero" data-aos="fade-up">
        <h1>About Us</h1>
        <p>Driving the Future with Sustainable Energy</p>
      </section>

      <section className="about-story" data-aos="fade-right">
        <div className="about-text">
          <h2>Our Journey</h2>
          <p>We started with a vision to revolutionize the future of mobility by making transportation eco-friendly and sustainable. Our electric vehicles and high-performance lithium batteries are designed to power a cleaner tomorrow.</p>
        </div>
        <div className="about-image">
          <img src="/assets/products/battry.jpg" alt="EV Charging" />
        </div>
      </section>

      <section className="about-vision" data-aos="zoom-in">
        <h2>Our Vision & Mission</h2>
        <div className="vision-mission">
          <div className="vision-box">
            <h3>🌍 Vision</h3>
            <p>A world where every vehicle runs on clean energy.</p>
          </div>
          <div className="vision-box">
            <h3>⚡ Mission</h3>
            <p>To provide affordable EVs and advanced lithium battery solutions for a sustainable future.</p>
          </div>
        </div>
      </section>

      <section className="about-choose" data-aos="fade-up">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✅ High-performance lithium batteries</li>
          <li>✅ Affordable & sustainable EVs</li>
          <li>✅ Innovative & reliable technology</li>
          <li>✅ Customer-first approach</li>
        </ul>
      </section>

      <section className="about-achievements" data-aos="fade-left">
        <h2>Our Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-card">🏆 ISO Certified Products</div>
          <div className="achievement-card">🌱 100% Eco-Friendly Materials</div>
          <div className="achievement-card">⚡ 5000+ EVs Delivered</div>
          <div className="achievement-card">🤝 Trusted by 200+ Partners</div>
        </div>
      </section>

      <section className="about-cta" data-aos="zoom-in-up">
        <h2>Ready to Explore the Future?</h2>
        {/* <button className="cta-btn">Explore Our Vehicles</button> */}
        <button
          className="cta-btn"
          onClick={() => navigate("/Vehicles")}
        >
          Explore Our Vehicles
          
        </button>
      </section>
    </div>
  );
};
export default About;
