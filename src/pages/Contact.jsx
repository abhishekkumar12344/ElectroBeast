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
          <p><strong>📞 Phone:</strong> +91 98765 43210</p>
          <p><strong>📧 Email:</strong> Electrobeast@evenergy.com</p>
          <p><strong>📍 Address:</strong> Electro Beast , Durgapur, India</p>
          <p><strong>⏰ Business Hours:</strong> Mon - Sat: 9:00 AM - 6:00 PM</p>
          <div className="map-container" data-aos="zoom-in">
            <iframe title="Company Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228346.95113800953!2d85.0079566!3d25.5940947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5854f39f29e7%3A0x5d5b4c57c0e9c993!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1691399466203!5m2!1sen!2sin" width="100%" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
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
