import React, { useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => { AOS.init({ duration: 1000 }); }, []);

  return (
    <div className="contact-page">
      <section className="contact-hero" data-aos="fade-up">
        <h1>Contact Us</h1>
        <p>We’re here to help with your EV & Lithium Battery needs</p>
      </section>

      <section className="contact-container">
        <div className="contact-form" data-aos="fade-right">
          <h2>Send Us a Message</h2>
          <form onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info" data-aos="fade-left">
          <h2>Get in Touch</h2>
          <p><strong>📞 Phone:</strong> +91 9091748988</p>
          <p><strong>📧 Email:</strong> beastelectro0@gmail.com</p>
          <p><strong>📍 Address:</strong> Electro Beast , Durgapur, India</p>
          <p><strong>⏰ Business Hours:</strong> Mon - Sat: 9:00 AM - 6:00 PM</p>
           {/* Google Map Link Section */}

      <div className="map-link">
        <a
          href="https://www.google.com/maps/place/ELECTRO+BEAST/@23.3644055,87.980025,17z/data=!3m1!4b1!4m6!3m5!1s0x39f84d03e1b1736d:0xde255a5141542e1b!8m2!3d23.3644006!4d87.9825999!16s%2Fg%2F11lz5twx3q?hl=en-IN&entry=ttu&g_ep=EgoyMDI1MDgxOC4wIKXMDSoASAFQAw%3D%3" 
          target="_blank"
          rel="noopener noreferrer"
        >
          📍 View on Google Maps
        </a>
      </div>
    
          <div className="map-container" data-aos="zoom-in">
            <iframe title="Company Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.626250378632!2d87.2741243!3d23.5598052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f76d5a0b659987%3A0x498fd76d41e651b6!2sELECTRO%20BEAST!5e0!3m2!1sen!2sin!4v1723970736000!5m2!1sen!2sin" width="100%" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
          </div>
          <div className="social-links">
            <a href="#">🌐 Facebook</a>
            <a href="#">📸 Instagram</a>
            <a href="#">💼 LinkedIn</a>
            <a href="#">🐦 Twitter</a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
