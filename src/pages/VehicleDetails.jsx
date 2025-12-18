import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./VehicleDetails.css";

const VehicleDetails = () => {
  const { state: vehicle } = useLocation();
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [emiForm, setEmiForm] = useState({
    price: "",
    interest: 10,
    tenure: 24,
  });
  const [emiResult, setEmiResult] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  if (!vehicle) {
    return (
      <div className="vd-no-data">
        <h2>No Vehicle Details Found</h2>
        <button className="vd-btn" onClick={() => navigate("/vehicles")}>
          Go Back to Vehicles
        </button>
      </div>
    );
  }

  // ------- IMAGE CAROUSEL (auto + manual) -------
  const galleryImages = [
    vehicle.image,
    "/assets/products/product1.jpg",
    "/assets/products/product2.jpg",
  ];

  useEffect(() => {
    if (galleryImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  // ------- EMI CALCULATOR -------
  const parsePriceToNumber = (price) => {
    if (!price) return 0;
    if (typeof price === "number") return price;
    return Number(String(price).replace(/[^0-9.]/g, ""));
  };

  useEffect(() => {
    setEmiForm((prev) => ({
      ...prev,
      price: parsePriceToNumber(vehicle.price),
    }));
  }, [vehicle.price]);

  const handleEmiChange = (e) => {
    const { name, value } = e.target;
    setEmiForm((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const handleEmiCalculate = (e) => {
    e.preventDefault();
    const P = emiForm.price || 0;
    const annualRate = emiForm.interest || 0;
    const n = emiForm.tenure || 1;
    const r = annualRate / 12 / 100;

    if (P <= 0 || r <= 0 || n <= 0) {
      setEmiResult(null);
      return;
    }

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayable = emi * n;
    const totalInterest = totalPayable - P;

    setEmiResult({
      emi: emi.toFixed(0),
      totalPayable: totalPayable.toFixed(0),
      totalInterest: totalInterest.toFixed(0),
    });
  };

  // ------- STATIC REVIEWS -------
  const reviews = [
    {
      name: "Rohit Sharma",
      rating: 5,
      text: "Perfect for my office commute. Smooth ride and great battery backup.",
    },
    {
      name: "Sneha Verma",
      rating: 4,
      text: "Stylish, lightweight and the charging is fast. Value for money.",
    },
  ];

  // ------- COMPARISON DATA -------
  const compareVehicles = [
    {
      name: vehicle.name,
      price: vehicle.price,
      range: vehicle.range,
      speed: vehicle.speed,
      battery: vehicle.battery,
    },
    {
      name: "EcoRide 2X",
      price: "₹39,000",
      range: "55 km",
      speed: "27 km/h",
      battery: "Lithium-ion 44V",
    },
    {
      name: "Urban Ride Pro",
      price: "₹45,000",
      range: "60 km",
      speed: "30 km/h",
      battery: "Lithium-ion 48V",
    },
  ];

  return (
    <div className="vd-page">
      {/* Breadcrumb */}
      <div className="vd-breadcrumb">
        <span onClick={() => navigate("/")}>Home</span> /{" "}
        <span onClick={() => navigate("/vehicles")}>Vehicles</span> /{" "}
        <span className="vd-breadcrumb-active">{vehicle.name}</span>
      </div>

      <div className="vd-container">
        {/* ---------- TOP MAIN SECTION (like Amazon) ---------- */}
        <div className="vd-main">
          {/* LEFT: IMAGE AREA */}
          <div className="vd-left" data-aos="fade-right">
            <div className="vd-carousel">
              <button className="vd-nav-btn vd-prev" onClick={handlePrev}>
                ‹
              </button>
              <img
                src={galleryImages[currentSlide]}
                alt={vehicle.name}
                className="vd-main-img"
              />
              <button className="vd-nav-btn vd-next" onClick={handleNext}>
                ›
              </button>
            </div>

            <div className="vd-thumb-row">
              {galleryImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumb-${index}`}
                  className={
                    index === currentSlide
                      ? "vd-thumb-img vd-thumb-active"
                      : "vd-thumb-img"
                  }
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: DETAILS + PRICE */}
          <div className="vd-right" data-aos="fade-left">
            <h1 className="vd-title">{vehicle.name}</h1>

            <div className="vd-rating-row">
              <span className="vd-rating-badge">
                ★★★★☆ <span>4.2</span>
              </span>
              <span className="vd-rating-text"> 120 ratings & 35 reviews</span>
            </div>

            <ul className="vd-bullets">
              <li>Eco-friendly electric vehicle, perfect for city rides</li>
              <li>Long-lasting lithium battery with efficient range</li>
              <li>Comfortable design for daily use</li>
            </ul>

            <div className="vd-price-block">
              <div className="vd-price-main">{vehicle.price}</div>
              <div className="vd-price-sub">
                <span className="vd-mrp-label">M.R.P:</span>
                <span className="vd-mrp-value">
                  {typeof vehicle.price === "string"
                    ? vehicle.price.replace(/[0-9]/g, "9")
                    : `₹${(parsePriceToNumber(vehicle.price) + 8000).toLocaleString(
                        "en-IN"
                      )}`}
                </span>
                <span className="vd-price-off">Inclusive of all taxes</span>
              </div>
              <div className="vd-offer-line">
                <strong>Bank Offer:</strong> No cost EMI & 10% instant discount
                on select cards.
              </div>
            </div>

            <div className="vd-cta-row">
              <button className="vd-btn vd-btn-primary">Book Test Ride</button>
              <button className="vd-btn vd-btn-outline">Enquiry Now</button>
            </div>

            <div className="vd-mini-emi">
              <span>EMI starts from</span>
              <strong>
                {emiResult?.emi
                  ? `₹${emiResult.emi}/month`
                  : "Calculate EMI below"}
              </strong>
              <span
                className="vd-link"
                onClick={() =>
                  document
                    .getElementById("emi-section")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View EMI Options
              </span>
            </div>

            <div className="vd-warranty">
              <div>
                <strong>Warranty:</strong> 1 Year standard warranty
              </div>
              <div>
                <strong>Support:</strong> Free service for first 6 months
              </div>
            </div>

            <div className="vd-brochure">
              <a
                href="/assets/brochures/vehicle-brochure.pdf"
                download
                className="vd-link"
              >
                ⬇ Download full brochure (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* ---------- BOTTOM INFO SECTIONS ---------- */}
        <div className="vd-bottom">
          {/* LEFT BOTTOM: SPECS + REVIEWS + COMPARISON */}
          <div className="vd-bottom-left">
            {/* Specs */}
            <section className="vd-card" id="specs" data-aos="fade-up">
              <h2 className="vd-section-title">Key Specifications</h2>
              <table className="vd-spec-table">
                <tbody>
                  <tr>
                    <td>Battery</td>
                    <td>{vehicle.battery}</td>
                  </tr>
                  <tr>
                    <td>Range</td>
                    <td>{vehicle.range}</td>
                  </tr>
                  <tr>
                    <td>Top Speed</td>
                    <td>{vehicle.speed}</td>
                  </tr>
                  <tr>
                    <td>Vehicle Type</td>
                    <td>Electric</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Reviews */}
            <section className="vd-card" id="reviews" data-aos="fade-up">
              <h2 className="vd-section-title">Customer Reviews</h2>
              <div className="vd-review-summary">
                <div className="vd-review-score">4.2 ★</div>
                <div className="vd-review-meta">Based on 120 ratings</div>
              </div>
              <div className="vd-review-list">
                {reviews.map((rev, i) => (
                  <div key={i} className="vd-review-item">
                    <div className="vd-review-header">
                      <span className="vd-review-name">{rev.name}</span>
                      <span className="vd-review-stars">
                        {"★".repeat(rev.rating)}
                        {"☆".repeat(5 - rev.rating)}
                      </span>
                    </div>
                    <p className="vd-review-text">{rev.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Comparison */}
            <section className="vd-card" data-aos="fade-up">
              <h2 className="vd-section-title">Compare with similar vehicles</h2>
              <div className="vd-compare-scroll">
                <table className="vd-compare-table">
                  <thead>
                    <tr>
                      <th>Vehicle</th>
                      <th>Price</th>
                      <th>Range</th>
                      <th>Top Speed</th>
                      <th>Battery</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compareVehicles.map((v, idx) => (
                      <tr key={idx}>
                        <td>{v.name}</td>
                        <td>{v.price}</td>
                        <td>{v.range}</td>
                        <td>{v.speed}</td>
                        <td>{v.battery}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* RIGHT BOTTOM: EMI CARD */}
          <div className="vd-bottom-right">
            <section
              className="vd-card vd-emi-card"
              id="emi-section"
              data-aos="fade-left"
            >
              <h2 className="vd-section-title">EMI Calculator</h2>
              <form className="vd-emi-form" onSubmit={handleEmiCalculate}>
                <label>
                  Vehicle Price (₹)
                  <input
                    type="number"
                    name="price"
                    value={emiForm.price}
                    onChange={handleEmiChange}
                    required
                  />
                </label>
                <label>
                  Interest Rate (% per year)
                  <input
                    type="number"
                    name="interest"
                    value={emiForm.interest}
                    onChange={handleEmiChange}
                    required
                  />
                </label>
                <label>
                  Tenure (months)
                  <input
                    type="number"
                    name="tenure"
                    value={emiForm.tenure}
                    onChange={handleEmiChange}
                    required
                  />
                </label>

                <button type="submit" className="vd-btn vd-btn-primary vd-btn-full">
                  Calculate EMI
                </button>
              </form>

              {emiResult && (
                <div className="vd-emi-result">
                  <p>
                    <strong>Monthly EMI:</strong> ₹{emiResult.emi}
                  </p>
                  <p>
                    <strong>Total Interest:</strong> ₹{emiResult.totalInterest}
                  </p>
                  <p>
                    <strong>Total Payable:</strong> ₹{emiResult.totalPayable}
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>

        {/* Related */}
        <section className="vd-card vd-related" data-aos="fade-up">
          <h2 className="vd-section-title">Related Vehicles</h2>
          <div className="vd-related-grid">
            <div className="vd-related-item" onClick={() => navigate("/vehicles")}>
              <img src="/assets/products/product1.jpg" alt="Related 1" />
              <h4>Electric Cycle X</h4>
              <p>₹35,000</p>
            </div>
            <div className="vd-related-item" onClick={() => navigate("/vehicles")}>
              <img src="/assets/products/product2.jpg" alt="Related 2" />
              <h4>Urban Ride Pro</h4>
              <p>₹45,000</p>
            </div>
            <div className="vd-related-item" onClick={() => navigate("/vehicles")}>
              <img src="/assets/products/product6.jpg" alt="Related 3" />
              <h4>EcoRide 2X</h4>
              <p>₹39,000</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VehicleDetails;
