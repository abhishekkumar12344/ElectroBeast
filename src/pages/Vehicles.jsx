import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import "./Vehicles.css";



const Vehicles = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Cycles");
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const vehicles = {
    Cycles: [
       {
      id: 1,
      name: "Electric Cycle",
      category: "Cycle",
      price: 35000,
      rating: 4,
       range: "50 km",
        speed: "25 km/h",
        battery: "Lithium-ion 36V",
      image: "/assets/products/product1.jpg"},
      {
      id: 2,
      name: "Electric Cycle",
      category: "Cycle",
      price: 30000,
      rating: 4,
       range: "50 km",
        speed: "25 km/h",
        battery: "Lithium-ion 36V",
      image: "/assets/products/product2.jpg"},
      {
      id: 3,
      name: "Electric Cycle",
      category: "Cycle",
      price: 39000,
      rating: 4,
       range: "50 km",
        speed: "25 km/h",
        battery: "Lithium-ion 36V",
      image: "/assets/products/product6.jpg"},
      {
      id: 4,
      name: "Electric Cycle",
      category: "Cycle",
      price: 99000,
      rating: 4,
       range: "50 km",
        speed: "25 km/h",
        battery: "Lithium-ion 36V",
      image: "/assets/products/product4.jpg"},
      {
      id: 5,
      name: "Electric Cycle",
      category: "Cycle",
      price: 77000,
      range: "50 km",
        speed: "25 km/h",
        battery: "Lithium-ion 36V",
      rating: 4,
      image: "/assets/products/product5.jpg"},
      {
        id: 6,
        name: "EcoRide X1",
        price: "₹35,000",
        range: "50 km",
        speed: "25 km/h",
        battery: "Lithium-ion 36V",
        image: "https://imgs.search.brave.com/-Ga95mA_CoyXo5NLQaan2Au7CNs2_pTHcrqiJujKqF8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFMRlVpM2xRWUwu/anBn",
      },
      {
        id: 7,
        name: "Urban Ride Pro",
        price: "₹45,000",
       range :"55km",
       speed :"25 km/h",
       battery:"Lithium-ion 44v",
        image: "https://imgs.search.brave.com/7wIZ39-TimS9vLBF13TK3ODTepWEE_IOhOpvNwDfx9A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/b29sLWJpY3ljbGUt/b3V0ZG9vcnNfMjMt/MjE1MDg4NDI3Mi5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw",
      },
      {
        id: 8,
        name: "EcoRide X1",
        price: "₹35,000",
        range: "50 km",
        speed: "25 km/h",
        battery: "Lithium-ion 36V",
        image: "https://imgs.search.brave.com/Hu-KnYsEnIvV0HvsPSCfqa5Cz_KjBb2Tc1lD-1rWSzs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTg5Nzg4MDYtNzMw/NzM4NDNiMTVlP2Zt/PWpwZyZxPTYwJnc9/MzAwMCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE5IeDhaV3hsWTNS/eWFXTWxNakJpYVdO/NVkyeGxmR1Z1ZkRC/OGZEQjhmSHd3",
      },
      {
        id: 9,
        name: "EcoRide X1",
        price: "₹35,000",
        range: "50 km",
        speed: "25 km/h",
        battery: "Lithium-ion 36V",
        image: "https://imgs.search.brave.com/7ysBpnDXDdzkusCuWhD4uQOc82LRSkv7VlQ9zJXqNBo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGV5YmlrZS5jb20v/Y2RuL3Nob3AvZmls/ZXMvSGV5YmlrZV9I/b3Jpem9uX1VfQmVz/dF9FbGVjdHJpY19C/aWtlX0RlYWxzX0Jl/c3RfRm9sZGluZ19G/YXRfVGlyZV9FYmlr/ZV9Pbl9TYWxlLnBu/Zz92PTE3NTQzOTA3/MzAmd2lkdGg9MjA0/OA",
      },
      {
        id: 10,
        name: "EcoRide X1",
        price: "₹66,000",
        range: "50 km",
        speed: "25 km/h",
        battery: "Lithium-ion 36V",
        image: "https://imgs.search.brave.com/vvBTMiiLQDeUaFXvAsdLS3RguzT040ifBz_uXTfNZXQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/b29sLWJpY3ljbGUt/c3R1ZGlvXzIzLTIx/NTA4ODQyNzguanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MA",
      },
    ],
    Scooters: [
      {
        id: 11,
        name: "VoltScoot S1",
        price: "₹440,000",
        range: "100 km",
        speed: "60 km/h",
        battery: "Lithium-ion 60V",
        image: "https://imgs.search.brave.com/oK0fMsjhNQWiXgHHYqtWQOr_bQ8us6_Pu9gWkFO0deM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vU2tl/cmktRWxlY3RyaWMt/U2Nvb3Rlci0yNi1G/YXQtVGlyZS1FLUJp/a2UtMTAwMFctTW90/b3ItNDhWLTEzQWgt/UmVtb3ZhYmxlLUVs/ZWN0cmljLUJpa2Ut/QWR1bHRzLTYwLU1p/bGVzLTI1LW1waC1F/bGVjdHJpYy1CaWN5/Y2xlLTctU3BlZWQt/RnJvbnQtU3VzcGVu/c2lfYjU2MDYxMzkt/Y2UzYy00ZGZmLTk4/YTctMmUwMDZjNGMz/OTMzLmU2ZmZiMDE1/MmNkYTZhZjgyNDg4/MWY0OGM3NDJiZDM4/LmpwZWc_b2RuSGVp/Z2h0PTU4MCZvZG5X/aWR0aD01ODAmb2Ru/Qmc9RkZGRkZG",
      },
    ],
    Cars: [
      {
        id: 12,
        name: "EcoCar Z",
        price: "₹5,50,000",
        range: "250 km",
        speed: "120 km/h",
        battery: "Lithium-ion 72V",
        image: "https://imgs.search.brave.com/X1H5hldk7FeX0faplZp-woE260Lt6kNSX1KKvTXYaSc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzExLzM4LzYxLzE4/LzM2MF9GXzExMzg2/MTE4ODNfeVBhM0FM/MTZOMmxmcUNVV3RZ/RUhVVGtVQldNdkNV/c3UuanBn",
      },
    ],
  };

  const testimonials = [
    { name: "Rohit Sharma", text: "The EcoRide X1 is perfect for my daily commute!", rating: 5 },
    { name: "Sneha Verma", text: "VoltScoot is so smooth and battery lasts long.", rating: 4 },
  ];

  const faqs = [
    { q: "How long does the battery last?", a: "Our batteries last 3-5 years depending on usage." },
    { q: "Do you provide warranty?", a: "Yes, all our vehicles come with 1-year warranty." },
  ];

  return (
    <div className="vehicles">
      {/* Hero Section */}
      <section className="vehicles-hero" data-aos="fade-up">
        <h1>Ride into the Future 🚀</h1>
        <p>Explore our smart, eco-friendly electric vehicles.</p>
      </section>

      {/* Tabs */}
      <div className="vehicle-tabs" data-aos="fade-right">
        {Object.keys(vehicles).map((category) => (
          <button
            key={category}
            className={activeTab === category ? "active" : ""}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Vehicle Grid */}
      <div className="vehicle-grid">
        {vehicles[activeTab].map((v, index) => (
          <div
            key={v.id}
            className="vehicle-card"
            data-aos={index % 2 === 0 ? "fade-up" : "zoom-in"}
          >
            <img src={v.image} alt={v.name} />
            <h3>{v.name}</h3>
            <p className="price">{v.price}</p>
            <p>🔋 {v.battery}</p>
            <p>⚡ Range: {v.range} | Speed: {v.speed}</p>
            <button onClick={() => navigate(`/vehicle/${v.id}`, { state: v })}>
  View Details
</button>

          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <section className="comparison" data-aos="fade-left">
        <h2>Compare Top Vehicles</h2>
        <table>
          <thead>
            <tr>
              <th>Vehicle</th>
              <th>Price</th>
              <th>Range</th>
              <th>Speed</th>
              <th>Battery</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(vehicles)
              .flat()
              .map((v) => (
                <tr key={v.id}>
                  <td>{v.name}</td>
                  <td>{v.price}</td>
                  <td>{v.range}</td>
                  <td>{v.speed}</td>
                  <td>{v.battery}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>

      {/* Testimonials */}
      <section className="testimonials" data-aos="zoom-in">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <p>"{t.text}"</p>
              <h4>- {t.name}</h4>
              <div className="stars">{"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((f, i) => (
          <div key={i} className="faq-item">
            <h4>{f.q}</h4>
            <p>{f.a}</p>
          </div>
        ))}
      </section>

      {/* Booking Form */}
      <section className="booking" data-aos="fade-right">
        <h2>Book a Test Ride</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email" required />
          <select>
            <option>Select Vehicle</option>
            {Object.values(vehicles).flat().map((v) => (
              <option key={v.id}>{v.name}</option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Quick View Modal */}
      {selectedVehicle && (
        <div className="modal" onClick={() => setSelectedVehicle(null)}>
          <div className="modal-content" data-aos="zoom-in" onClick={(e) => e.stopPropagation()}>
            <img src={selectedVehicle.image} alt={selectedVehicle.name} />
            <h2>{selectedVehicle.name}</h2>
            <p className="price">{selectedVehicle.price}</p>
            <p>Range: {selectedVehicle.range}</p>
            <p>Speed: {selectedVehicle.speed}</p>
            <p>Battery: {selectedVehicle.battery}</p>
            <button onClick={() => setSelectedVehicle(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vehicles;
