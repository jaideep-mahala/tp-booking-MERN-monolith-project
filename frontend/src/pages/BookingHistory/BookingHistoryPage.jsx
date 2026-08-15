import './BookingHistoryPage.css';

const bookings = [
  { id: 'PNR 4672659187', train: '12432 Rajdhani Express', date: '12 Aug 2026', status: 'Confirmed', amount: '₹2,180' },
  { id: 'PNR 7812145576', train: '12859 Shatabdi', date: '02 Aug 2026', status: 'Completed', amount: '₹1,260' },
  { id: 'PNR 9128534061', train: '12019 Duronto', date: '21 Jul 2026', status: 'Cancelled', amount: '₹0' }
];

function BookingHistoryPage() {
  return (
    <div className="history-page page-shell">
      <div className="page-topbar">
        <div>
          <p className="eyebrow">Travel records</p>
          <h1>Booking history</h1>
        </div>
        <button className="primary-btn">Download PDF</button>
      </div>

      <div className="filter-row">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Confirmed</button>
        <button className="filter-btn">Completed</button>
        <button className="filter-btn">Cancelled</button>
      </div>

      <div className="history-list">
        {bookings.map((item) => (
          <div key={item.id} className="history-card">
            <div className="history-main">
              <div>
                <p className="booking-id">{item.id}</p>
                <h3>{item.train}</h3>
              </div>
              <span className={`status-badge ${item.status.toLowerCase()}`}>{item.status}</span>
            </div>
            <div className="history-meta">
              <span>Travel date: {item.date}</span>
              <span>Total: {item.amount}</span>
            </div>
            <div className="history-actions">
              <button className="secondary-btn">View ticket</button>
              <button className="secondary-btn">Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingHistoryPage;
