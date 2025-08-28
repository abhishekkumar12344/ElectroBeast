import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import {  Link   , useNavigate} from "react-router-dom";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
     {/* Hero */}
<section className="hero">
  
  <div className="hero-content" data-aos="fade-up">
    <h1 className="hero-title">Innovating the Future of Mobility</h1>
    <p className="hero-subtitle">
      Discover our electric cycles powered by high-performance lithium batteries.
    </p>
    <button
      type="button"
      className="cta-btn glowing-btn"
      onClick={() => navigate("/Vehicles")}  // 👈 Navigate to Vehicles.jsx
    >
      Explore More
    </button>
  </div>
</section>


      {/* About */}
      <section id="about" className="about" data-aos="fade-up">
        <div className="about-container">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              At <b>E Vehicles</b>,Our electric cycles are designed with advanced lithium-ion battery technology to ensure long-lasting performance, 
              faster charging, and eco-friendly transportation. Built for both daily commutes and leisure rides, our EV cycles combine durability,
               modern design, and zero emissions for a sustainable future. With rising fuel costs and increasing environmental concerns, 
               electric cycles are a smart and affordable alternative, making mobility easier, cleaner, and more efficient.
            </p>
            <Link to="/about" className="btn btn-primary">Learn More</Link>
          </div>
          <div className="about-image">
            <img
              src="https://imgs.search.brave.com/-k5d8dz1bAPXG3XAHit_iHoB5yiE_zjJR5-FqeBUKLc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zdHls/aXNoLWVsZWN0cmlj/LWJpY3ljbGUtcGx1/Z2dlZC1jaGFyZ2lu/Zy1zdGF0aW9uLWdy/ZWVuLXVyYmFuLXBh/cmstc3VubnktZGF5/LWVsZWN0cmljLWJp/Y3ljbGUtY2hhcmdp/bmctMzUyMjM2NTEy/LmpwZw"
              alt="Electric Cycle"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services" data-aos="fade-up">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src="https://imgs.search.brave.com/PnAF6pmo3FsHk68IpsrSmdpGHCusM6JNuAFz9W5hpEE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEvZWxlY3RyaWMt/Y3ljbGUvay81L3ov/aHVtLWxvbmctcmFu/Z2Utc21hcnQtcGx1/cy1ibGFjay1vcmFu/Z2UtMTgtNS1tb3Rv/dm9sdC1zaW5nbGUt/b3JpZ2luYWwtaW1h/Z3A3ejZoZnN1bnVi/dS5qcGVnP3E9NzA" alt="Electric Cycle" />
            <h3>Electric Cycle Manufacturing</h3>
            <p>High-performance cycles designed for urban mobility.</p>
            <Link to="/Service" className="btn btn-primary">Know More</Link>
          </div>
          <div className="service-card">
            <img src="https://imgs.search.brave.com/Ds8ofFa4F8mHk_bxctsIdHnBPSdDI8fRclr7BaVun5o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9saWlv/bi1iYXR0ZXJ5LWJh/dHRlcmllcy1tYW55/LXNoaW55LWxpdGhp/dW0taW9uLWxpLWZv/cm0tZmFjdG9yLXVz/ZWQtZXZzLWVsZWN0/cmljLXZlaGljbGVz/LWxpa2UtdGVzbGEt/bW9kZWwtdGVhbC0x/NDQxMTI1OTYuanBn" alt="Battery" />
            <h3>Lithium Battery Technology</h3>
            <p>Durable and efficient batteries for longer rides.</p>
            <Link to="/Service" className="btn btn-primary">Know More</Link>
          </div>
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7" alt="Maintenance" />
            <h3>Maintenance & Support</h3>
            <p>Comprehensive service and technical support.</p>
            <Link to="/Service" className="btn btn-primary">Know More</Link>
          </div>
          <div className="service-card">
            <img src="https://imgs.search.brave.com/oK0fMsjhNQWiXgHHYqtWQOr_bQ8us6_Pu9gWkFO0deM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vU2tl/cmktRWxlY3RyaWMt/U2Nvb3Rlci0yNi1G/YXQtVGlyZS1FLUJp/a2UtMTAwMFctTW90/b3ItNDhWLTEzQWgt/UmVtb3ZhYmxlLUVs/ZWN0cmljLUJpa2Ut/QWR1bHRzLTYwLU1p/bGVzLTI1LW1waC1F/bGVjdHJpYy1CaWN5/Y2xlLTctU3BlZWQt/RnJvbnQtU3VzcGVu/c2lfYjU2MDYxMzkt/Y2UzYy00ZGZmLTk4/YTctMmUwMDZjNGMz/OTMzLmU2ZmZiMDE1/MmNkYTZhZjgyNDg4/MWY0OGM3NDJiZDM4/LmpwZWc_b2RuSGVp/Z2h0PTU4MCZvZG5X/aWR0aD01ODAmb2Ru/Qmc9RkZGRkZG" alt="Innovation" />
            <h3>Future Innovation</h3>
            <p>Researching advanced EV technologies for tomorrow.</p>
            <Link to="/Service" className="btn btn-primary">Know More</Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="products" data-aos="fade-up">
        <h2>Our Products</h2>
        <div className="product-cards">
          <div className="product-card">
            <img src="/assets/products/product3.jpg" alt="EcoRide X1" />
            <h3>EcoRide X1</h3>
            <p>Lightweight electric cycle with 50km range.</p>
            <Link to="/Products" className="btn btn-primary">View Details</Link>
          </div>
          <div className="product-card">
            <img src="https://imgs.search.brave.com/X1H5hldk7FeX0faplZp-woE260Lt6kNSX1KKvTXYaSc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzExLzM4LzYxLzE4/LzM2MF9GXzExMzg2/MTE4ODNfeVBhM0FM/MTZOMmxmcUNVV3RZ/RUhVVGtVQldNdkNV/c3UuanBn" alt="PowerCell Lithium" />
            <h3>PowerCell Lithium</h3>
            <p>High-capacity lithium battery for long life.</p>
            <Link to="/Products" className="btn btn-primary">View Details</Link>
          </div>
          <div className="product-card">
            <img src="https://imgs.search.brave.com/2oRjXukl5Rr03shrs6XjRZkZ2nhJ32q-DG1bEEjRuNs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kYWtv/dGFsaXRoaXVtLmIt/Y2RuLm5ldC93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wNy9E/YWtvdGEtTGl0aGl1/bS1CYXR0ZXJ5LTEy/Vi0yMEEtY2hhcmdl/ci0yLnBuZw" alt="Smart EV Charger" />
            <h3>Smart EV Charger</h3>
            <p>Fast-charging station for your vehicles.</p>
            <Link to="/Products" className="btn btn-primary">View Details</Link>
          </div>
          <div className="product-card">
            <img src="https://imgs.search.brave.com/Hu-KnYsEnIvV0HvsPSCfqa5Cz_KjBb2Tc1lD-1rWSzs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTg5Nzg4MDYtNzMw/NzM4NDNiMTVlP2Zt/PWpwZyZxPTYwJnc9/MzAwMCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE5IeDhaV3hsWTNS/eWFXTWxNakJpYVdO/NVkyeGxmR1Z1ZkRC/OGZEQjhmSHd3" alt="Future Cycle" />
            <h3>Future Cycle</h3>
            <p>Next-gen design with AI-powered performance.</p>
            <Link to="/Products" className="btn btn-primary">View Details</Link>
          </div>

          {/* Highlighted Battery */}
          <div className="product-card highlight">
            <img src="/assets/products/battry.jpg" />
            <h3>UltraPower Battery 🔋</h3>
            <p>Latest lithium tech — faster charging, lightweight & eco-friendly.</p>
            <Link to="/products/ultrapower-battery" className="btn btn-primary">Discover More</Link>
          </div>
        </div>
      </section>

      {/* ⭐ Testimonials */}
      <section className="testimonials" data-aos="fade-up">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"The EcoRide X1 changed my daily commute. Super smooth and reliable!"</p>
            <h4>- Rahul, Mumbai ⭐⭐⭐⭐⭐</h4>
          </div>
          <div className="testimonial-card">
            <p>"Lithium batteries last longer than I expected. Great innovation!"</p>
            <h4>- Priya, Delhi ⭐⭐⭐⭐☆</h4>
          </div>
          <div className="testimonial-card">
            <p>"Excellent support team, very helpful and quick to respond."</p>
            <h4>- Arjun, Bangalore ⭐⭐⭐⭐⭐</h4>
          </div>
        </div>
      </section>

      {/* 📸 Gallery */}
      <section className="gallery" data-aos="zoom-in">
        <h2>Our Showcase</h2>
        <div className="gallery-grid">
          <img src="https://imgs.search.brave.com/r7eWMmQOd7Ua_KTlMiSWLyZnXHZltqXs3ob-LNxkMsw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9lLWJp/a2UtdXBkYXRlLTAy/NTEtNjg1ZDk2ZDhi/NWFhZi5qcGc_cmVz/aXplPTk4MDoq" alt="Cycle" />
          <img src="https://imgs.search.brave.com/n1u6sjZOLaVCwenjdBtE6HVdQBHyxlrT_wEf7cjRiz8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/MjM1OTEwMi9waG90/by9saXRoaXVtLWlv/bi1iYXR0ZXJpZXMt/bWV0YWxsaWMtbGl0/aGl1bS1hbmQtZWxl/bWVudC1zeW1ib2wt/M2QtaWxsdXN0cmF0/aW9uLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1XNC1DejZR/U21aSHRjbmpsVGZX/a2Yta01rNWJ4bUdU/d3k0TWpjMlBCVDRN/PQ" alt="Battery" />
          <img src="https://imgs.search.brave.com/VwbZoSAEUKJr71OeWrJGOkbLUPlqlt9IkcORNn09rk0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzYzLzU5LzU3/LzM2MF9GXzU2MzU5/NTc2NF9COW1oZEI3/aFJGU3V6WEgyckpr/VTNWMEJmb0ZDNjlV/UC5qcGc" alt="EV" />
          <img src="https://imgs.search.brave.com/o35RV7pCNTNE3quCrM14HKKG2pnbvBCw_T8UXHUZCHE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iYXR0/ZXJ5LWZ1bGwtaWNv/bi1oYW5kLXNob3dp/bmctNjUzMDIzMjUu/anBn" alt="Technology" />
        </div>
      </section>

      {/* ❓ FAQ */}
      <section className="faq" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>🔋 How long does the battery last?</h3>
          <p>Our batteries provide up to 50–70 km range per charge.</p>
        </div>
        <div className="faq-item">
          <h3>⚡ How fast can I charge?</h3>
          <p>With our Smart EV Charger, you can get 80% charge in 1 hour.</p>
        </div>
        <div className="faq-item">
          <h3>🛠️ Do you provide maintenance?</h3>
          <p>Yes, we offer complete maintenance and after-sales support.</p>
        </div>
      </section>

      {/* 📩 Contact Form */}
      <section className="contact" data-aos="fade-right">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

     
    </div>
  );
};

export default Home;
