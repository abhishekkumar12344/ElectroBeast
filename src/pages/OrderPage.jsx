import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OrderPage.css";

const OrderPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const cart = state?.cart || [];
  const initialTotal = state?.totalPrice || 0;

  // Quantity state
  const [quantities, setQuantities] = useState(
    cart.map(() => 1)
  );

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "COD",
  });

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  // Update form
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Update quantity
  const updateQuantity = (index, amount) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === index ? Math.max(1, q + amount) : q))
    );
  };

  // Total calculation
  const totalPrice = cart.reduce(
    (sum, item, i) => sum + item.price * quantities[i],
    0
  );

  // Confirm Order
  const confirmOrder = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill all required fields.");
      return;
    }

    alert("🎉 Order Placed Successfully!");

    navigate("/products");
  };

  // If user goes to order page without cart
  if (cart.length === 0) {
    return (
      <div className="order-page empty-order">
        <h2>No items in your order.</h2>
        <button onClick={() => navigate("/products")}>Back to Products</button>
      </div>
    );
  }

  return (
    <div className="order-page">
      <h1 data-aos="fade-up">Checkout & Order Summary</h1>

      <div className="order-content">

        {/* LEFT SIDE — ORDER SUMMARY */}
        <div className="order-items" data-aos="fade-right">
          <h2>Your Items</h2>

          {cart.map((item, i) => (
            <div className="item-card" key={i} data-aos="zoom-in">
              <img src={item.image} alt={item.name} />

              <div className="item-info">
                <h3>{item.name}</h3>
                <p>₹{item.price.toLocaleString()}</p>

                {/* Quantity Counter */}
                <div className="quantity-box">
                  <button onClick={() => updateQuantity(i, -1)}>-</button>
                  <span>{quantities[i]}</span>
                  <button onClick={() => updateQuantity(i, 1)}>+</button>
                </div>
              </div>
            </div>
          ))}

          <h3 className="total">Total: ₹{totalPrice.toLocaleString()}</h3>
        </div>

        {/* RIGHT SIDE — DELIVERY FORM */}
        <div className="order-form" data-aos="fade-left">
          <h2>Delivery Details</h2>

          <form onSubmit={confirmOrder}>
            <input
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
            />

            <textarea
              name="address"
              placeholder="Full Address *"
              value={formData.address}
              onChange={handleChange}
            />

            <input
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />

            <input
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
            />

            {/* PAYMENT METHOD */}
            <label className="payment-label">Payment Method</label>
            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              className="payment-select"
            >
              <option value="COD">Cash on Delivery</option>
              <option value="Online">Online Payment</option>
            </select>

            <button className="confirm-order-btn" type="submit">
              Confirm Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
