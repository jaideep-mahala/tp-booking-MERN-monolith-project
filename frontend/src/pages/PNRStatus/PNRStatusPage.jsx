import './PNRStatusPage.css';

const passengers = [
  { name: 'Aarav Sharma', status: 'Confirmed', seat: 'S1/5' },
  { name: 'Meera Sharma', status: 'Confirmed', seat: 'S1/6' }
];

function PNRStatusPage() {
  return (
    <div className="pnr-page page-shell">
      <div className="page-topbar">
        <div>
          <p className="eyebrow">Passenger status</p>
          <h1>PNR status lookup</h1>
        </div>
        <button className="primary-btn">Check status</button>
      </div>

      <div className="pnr-box">
        <label>
          Enter PNR number
          <input defaultValue="4672659187" />
        </label>
      </div>

      <div className="status-panel">
        <div className="status-head">
          <div>
            <span className="small-label">Train</span>
            <strong>12951 Rajdhani Express</strong>
          </div>
          <span className="status-badge confirmed">Confirmed</span>
        </div>

        <div className="status-grid">
          <div><span>From</span><strong>New Delhi</strong></div>
          <div><span>To</span><strong>Mumbai Central</strong></div>
          <div><span>Departure</span><strong>08:20</strong></div>
          <div><span>Boarding</span><strong>NDLS</strong></div>
        </div>
      </div>

      <div className="passenger-table">
        <h3>Passenger details</h3>
        <table>
          <thead>
            <tr>
              <th>Passenger</th>
              <th>Status</th>
              <th>Seat</th>
            </tr>
          </thead>
          <tbody>
            {passengers.map((person) => (
              <tr key={person.name}>
                <td>{person.name}</td>
                <td>{person.status}</td>
                <td>{person.seat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PNRStatusPage;
