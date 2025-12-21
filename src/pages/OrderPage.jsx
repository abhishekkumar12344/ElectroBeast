import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OrderPage.css";

const OrderPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // ✅ CART SOURCE (STATE → LOCALSTORAGE FALLBACK)
  const cart =
    state?.cart ||
    JSON.parse(localStorage.getItem("cart")) ||
    [];

  const [quantities, setQuantities] = useState(
    cart.map(() => 1)
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "COD",
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // ❌ NO CART SAFETY
  if (cart.length === 0) {
    return (
      <div className="order-empty">
        <h2>No items in your order</h2>
        <button onClick={() => navigate("/products")}>
          Back to Products
        </button>
      </div>
    );
  }

  // ✅ QUANTITY UPDATE
  const updateQty = (index, value) => {
    setQuantities((q) =>
      q.map((item, i) =>
        i === index ? Math.max(1, item + value) : item
      )
    );
  };

  // ✅ TOTAL PRICE
  const totalPrice = cart.reduce(
    (sum, item, i) => sum + item.price * quantities[i],
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ CONFIRM ORDER (FINAL FIX)
  const confirmOrder = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill all required fields");
      return;
    }

    const newOrder = {
      id: "EB" + Date.now(),
      items: cart.map((item, i) => ({
        name: item.name,
        price: item.price,
        image: item.image || null,
        quantity: quantities[i],
      })),
      total: totalPrice,
      status: "Confirmed",
      date: new Date().toLocaleDateString(),
      payment: formData.payment,
    };

    // ✅ SAVE ORDER
    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([newOrder, ...existingOrders])
    );

    // ✅ CLEAR CART AFTER ORDER
    localStorage.removeItem("cart");

    alert("🎉 Order Confirmed Successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="order-page">
      <h1 data-aos="fade-down">Checkout</h1>

      <div className="order-layout">

        {/* LEFT – ORDER SUMMARY */}
        <div className="order-summary" data-aos="fade-right">
          <h2>Your Items</h2>

          {cart.map((item, i) => (
            <div className="order-item" key={i}>
              {item.image ? (
                <img src={item.image} alt={item.name} />
              ) : (
                <div className="img-placeholder">📦</div>
              )}

              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price.toLocaleString()}</p>

                <div className="qty">
                  <button onClick={() => updateQty(i, -1)}>-</button>
                  <span>{quantities[i]}</span>
                  <button onClick={() => updateQty(i, 1)}>+</button>
                </div>
              </div>
            </div>
          ))}

          <h3 className="total">
            Total: ₹{totalPrice.toLocaleString()}
          </h3>
        </div>

        {/* RIGHT – DELIVERY FORM */}
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

            <div className="row">
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
            </div>

            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
            >
              <option value="COD">Cash on Delivery</option>
              <option value="Online">Online Payment</option>
            </select>

            <button type="submit" className="confirm-btn">
              Confirm Order
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default OrderPage;
