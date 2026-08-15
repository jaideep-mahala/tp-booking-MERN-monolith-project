import './BookingPage.css';

const passengers = [
  { name: 'Aarav Sharma', age: 34, berth: 'Lower', gender: 'Male' },
  { name: 'Meera Sharma', age: 30, berth: 'Upper', gender: 'Female' }
];

function BookingPage() {
  return (
    <div className="booking-page page-shell">
      <div className="page-topbar">
        <div>
          <p className="eyebrow">Reservation</p>
          <h1>Passenger booking</h1>
        </div>
        <button className="primary-btn">Review & Pay</button>
      </div>

      <div className="booking-grid">
        <section className="booking-card">
          <h3>Journey details</h3>
          <div className="journey-summary">
            <div>
              <span>Train</span>
              <strong>12951 Rajdhani Express</strong>
            </div>
            <div>
              <span>Route</span>
              <strong>New Delhi → Mumbai Central</strong>
            </div>
            <div>
              <span>Class</span>
              <strong>AC 2 Tier</strong>
            </div>
            <div>
              <span>Date</span>
              <strong>18 Aug 2026</strong>
            </div>
          </div>

          <div className="passenger-box">
            <h4>Passenger details</h4>
            {passengers.map((person, index) => (
              <div key={index} className="passenger-row">
                <div>
                  <label>Name</label>
                  <input defaultValue={person.name} />
                </div>
                <div>
                  <label>Age</label>
                  <input defaultValue={person.age} />
                </div>
                <div>
                  <label>Berth</label>
                  <select defaultValue={person.berth}>
                    <option>Lower</option>
                    <option>Middle</option>
                    <option>Upper</option>
                  </select>
                </div>
                <div>
                  <label>Gender</label>
                  <select defaultValue={person.gender}>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="price-card">
          <h3>Fare summary</h3>
          <div className="fare-row"><span>Base fare</span><strong>₹3,460</strong></div>
          <div className="fare-row"><span>Reservation fee</span><strong>₹130</strong></div>
          <div className="fare-row"><span>GST</span><strong>₹275</strong></div>
          <div className="fare-row total"><span>Total payable</span><strong>₹3,865</strong></div>
          <button className="primary-btn full-width">Proceed to payment</button>
        </aside>
      </div>
    </div>
  );
}

export default BookingPage;
