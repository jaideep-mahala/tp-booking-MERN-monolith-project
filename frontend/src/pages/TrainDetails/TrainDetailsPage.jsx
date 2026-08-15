import './TrainDetailsPage.css';

const routeStops = [
  { station: 'New Delhi', time: '08:20', day: 'Day 1' },
  { station: 'Mathura', time: '10:55', day: 'Day 1' },
  { station: 'Agra Cantt', time: '12:35', day: 'Day 1' },
  { station: 'Gwalior', time: '15:10', day: 'Day 1' },
  { station: 'Bhopal', time: '20:25', day: 'Day 1' },
  { station: 'Mumbai Central', time: '06:40', day: 'Day 2' }
];

const coachInfo = [
  { name: 'AC 1 Tier', fare: '₹2,845', available: '2 berths' },
  { name: 'AC 2 Tier', fare: '₹1,730', available: '7 berths' },
  { name: 'AC 3 Tier', fare: '₹1,120', available: '15 berths' },
  { name: 'Sleeper', fare: '₹540', available: '31 berths' }
];

function TrainDetailsPage() {
  return (
    <div className="train-details-page page-shell">
      <div className="page-topbar">
        <div>
          <p className="eyebrow">Train information</p>
          <h1>Rajdhani Express 12951</h1>
        </div>
        <button className="primary-btn">Book this train</button>
      </div>

      <div className="train-summary-grid">
        <div className="summary-card">
          <span>Route</span>
          <strong>New Delhi → Mumbai Central</strong>
        </div>
        <div className="summary-card">
          <span>Duration</span>
          <strong>22h 20m</strong>
        </div>
        <div className="summary-card">
          <span>Departure</span>
          <strong>08:20 hrs</strong>
        </div>
        <div className="summary-card">
          <span>Arrival</span>
          <strong>06:40 hrs</strong>
        </div>
      </div>

      <div className="detail-layout">
        <section className="info-card">
          <h3>Route schedule</h3>
          <div className="timeline">
            {routeStops.map((stop, index) => (
              <div key={stop.station} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-head">
                    <strong>{stop.station}</strong>
                    <span>{stop.day}</span>
                  </div>
                  <small>{stop.time}</small>
                </div>
                {index !== routeStops.length - 1 && <div className="timeline-line" />}
              </div>
            ))}
          </div>
        </section>

        <section className="info-card">
          <h3>Coach availability</h3>
          <div className="coach-list">
            {coachInfo.map((coach) => (
              <div key={coach.name} className="coach-row">
                <div>
                  <strong>{coach.name}</strong>
                  <small>{coach.available}</small>
                </div>
                <span>{coach.fare}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="info-card">
        <h3>Train amenities</h3>
        <div className="amenity-grid">
          <span>Wi-Fi</span>
          <span>Water purifier</span>
          <span>AC coaches</span>
          <span>Power outlet</span>
          <span>Food on board</span>
          <span>Luggage rack</span>
        </div>
      </section>
    </div>
  );
}

export default TrainDetailsPage;
