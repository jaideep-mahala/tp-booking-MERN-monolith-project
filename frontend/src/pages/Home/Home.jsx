import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import LoginPage from "../Login/login.jsx";


function Home() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    class: "SL",
    passengers: "1",
  });

  // Set minimum date to today
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setFormData((prev) => ({ ...prev, date: today }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with your actual API call
    console.log("Search payload:", formData);
    alert(`Searching trains from ${formData.from} to ${formData.to} on ${formData.date}`);
  };

  return (
    <div className="home">
      <Navbar />

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">INDIAN RAILWAYS</h1>
            <p className="hero-sub">
              Safety | security | punctuality 
            </p>

            <div className="search-card">
              <div className="search-title">Plan your journey</div>
              <form className="search-form" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="from">From</label>
                  <input
                    className="input"
                    id="from"
                    name="from"
                    placeholder="Enter source station"
                    value={formData.from}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="to">To</label>
                  <input
                    className="input"
                    id="to"
                    name="to"
                    placeholder="Enter destination station"
                    value={formData.to}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="date">Date</label>
                  <input
                    className="input"
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="class">Class</label>
                  <select
                    className="select"
                    id="class"
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                  >
                    <option value="SL">Sleeper (SL)</option>
                    <option value="3A">3A (AC 3 Tier)</option>
                    <option value="2A">2A (AC 2 Tier)</option>
                    <option value="1A">1A (AC First)</option>
                    <option value="CC">CC (AC Chair Car)</option>
                    <option value="2S">2S (Second Sitting)</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="passengers">Passengers</label>
                  <select
                    className="select"
                    id="passengers"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
                <button className="btn-search" type="submit">
                  Search Trains
                </button>
              </form>

              <div className="quick-actions">
                <a className="chip" href="#pnr">Check PNR</a>
                <a className="chip" href="#live">Live Train Status</a>
                <a className="chip" href="#availability">Seat Availability</a>
                <a className="chip" href="#cancel">Cancel Ticket</a>
              </div>
            </div>
          </div>         
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚆</div>
              <div className="feature-title">Fast Train Search</div>
              <div className="feature-desc">
                Find trains by route, date, and class in real time.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎫</div>
              <div className="feature-title">Easy Booking</div>
              <div className="feature-desc">
                Simple steps from search to confirmed ticket.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <div className="feature-title">Live Status</div>
              <div className="feature-desc">
                Track running status and platform numbers.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <div className="feature-title">Secure Payments</div>
              <div className="feature-desc">
                Multiple payment options with strong security.
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      
    </div>
  );
}

export default Home;