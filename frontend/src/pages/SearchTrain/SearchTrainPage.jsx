import './SearchTrainPage.css';

const trainResults = [
  {
    id: 1,
    trainNo: '12951',
    name: 'Rajdhani Express',
    from: 'New Delhi',
    to: 'Mumbai Central',
    depart: '08:20',
    arrive: '06:40',
    duration: '22h 20m',
    classes: ['1A', '2A', '3A', 'SL'],
    fare: '₹2,845',
    seats: '12 seats left',
    status: 'Confirmed'
  },
  {
    id: 2,
    trainNo: '12009',
    name: 'Shatabdi Express',
    from: 'New Delhi',
    to: 'Agra Cantt',
    depart: '06:00',
    arrive: '08:10',
    duration: '2h 10m',
    classes: ['EC', 'CC', '2S'],
    fare: '₹1,340',
    seats: '8 seats left',
    status: 'Available'
  },
  {
    id: 3,
    trainNo: '12434',
    name: 'Sampark Kranti',
    from: 'New Delhi',
    to: 'Kanpur Central',
    depart: '11:45',
    arrive: '15:45',
    duration: '4h 00m',
    classes: ['2A', '3A', 'SL'],
    fare: '₹910',
    seats: '27 seats left',
    status: 'Available'
  }
];

function SearchTrainPage() {
  return (
    <div className="search-train-page page-shell">
      <div className="search-panel">
        <div className="header-row">
          <div>
            <p className="eyebrow">IRCTC Booking</p>
            <h1>Book your train journey</h1>
          </div>
          <button className="primary-btn">Search Trains</button>
        </div>

        <div className="search-form-grid">
          <label>
            From
            <input defaultValue="New Delhi" />
          </label>
          <label>
            To
            <input defaultValue="Mumbai Central" />
          </label>
          <label>
            Date
            <input type="date" defaultValue="2026-08-18" />
          </label>
          <label>
            Class
            <select defaultValue="Sleeper">
              <option>Sleeper</option>
              <option>AC 3 Tier</option>
              <option>AC 2 Tier</option>
              <option>First Class</option>
            </select>
          </label>
        </div>
      </div>

      <div className="results-header">
        <h2>Available trains</h2>
        <span>3 results found</span>
      </div>

      <div className="train-list">
        {trainResults.map((train) => (
          <div key={train.id} className="train-card">
            <div className="train-main">
              <div>
                <p className="train-no">{train.trainNo} {train.name}</p>
                <div className="route-row">
                  <span>{train.from}</span>
                  <span>→</span>
                  <span>{train.to}</span>
                </div>
              </div>
              <span className={`status-badge ${train.status.toLowerCase() === 'confirmed' ? 'confirmed' : 'available'}`}>
                {train.status}
              </span>
            </div>

            <div className="train-meta">
              <div>
                <label>Departure</label>
                <strong>{train.depart}</strong>
              </div>
              <div>
                <label>Arrival</label>
                <strong>{train.arrive}</strong>
              </div>
              <div>
                <label>Duration</label>
                <strong>{train.duration}</strong>
              </div>
              <div>
                <label>Fare</label>
                <strong>{train.fare}</strong>
              </div>
            </div>

            <div className="booking-row">
              <div className="classes">
                {train.classes.map((cls) => (
                  <span key={cls} className="class-tag">{cls}</span>
                ))}
              </div>
              <div className="right-actions">
                <span className="seat-count">{train.seats}</span>
                <button className="secondary-btn">View Details</button>
                <button className="primary-btn">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchTrainPage;
