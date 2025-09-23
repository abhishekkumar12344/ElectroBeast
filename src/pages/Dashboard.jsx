import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Dashboard.css";

const Dashboard = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-box" data-aos="fade-down">
        <h1>Welcome, Abhishek 👋</h1>
        <p data-aos="fade-up" data-aos-delay="300">
          You are now logged in. Explore your dashboard below.
        </p>

        <div className="dashboard-widgets">
          <div className="widget" data-aos="fade-right">
            <h3>Profile</h3>
            <p>Update your personal details.</p>
          </div>
          <div className="widget" data-aos="fade-up">
            <h3>Notifications</h3>
            <p>You have 3 new messages.</p>
          </div>
          <div className="widget" data-aos="fade-left">
            <h3>Settings</h3>
            <p>Manage your preferences.</p>
          </div>
        </div>

        <button data-aos="zoom-in" data-aos-delay="600">Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
