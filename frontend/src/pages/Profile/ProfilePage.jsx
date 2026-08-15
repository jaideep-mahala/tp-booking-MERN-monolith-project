import './ProfilePage.css';

const recentTrips = [
  { route: 'New Delhi → Mumbai', date: '12 Aug 2026', ticket: 'PNR 4672659187' },
  { route: 'Delhi → Agra', date: '02 Aug 2026', ticket: 'PNR 7812145576' },
  { route: 'Delhi → Jaipur', date: '18 Jul 2026', ticket: 'PNR 9128534061' }
];

function ProfilePage() {
  return (
    <div className="profile-page page-shell">
      <div className="profile-header">
        <div className="avatar">AS</div>
        <div>
          <p className="eyebrow">My account</p>
          <h1>Aarav Sharma</h1>
          <small>Member since 2023</small>
        </div>
      </div>

      <div className="profile-grid">
        <section className="profile-card">
          <h3>Personal information</h3>
          <div className="info-grid">
            <label>Email<input defaultValue="aarav.sharma@gmail.com" /></label>
            <label>Phone<input defaultValue="+91 98765 43210" /></label>
            <label>Date of birth<input defaultValue="14 Sep 1991" /></label>
            <label>Gender<input defaultValue="Male" /></label>
          </div>
        </section>

        <section className="profile-card">
          <h3>Preferences</h3>
          <ul className="check-list">
            <li>SMS alerts enabled</li>
            <li>Seat preference: Lower berth</li>
            <li>Food preference: Vegetarian</li>
            <li>Travel class: AC 2 Tier</li>
          </ul>
        </section>
      </div>

      <section className="profile-card">
        <h3>Recent trips</h3>
        <div className="trip-list">
          {recentTrips.map((trip) => (
            <div key={trip.ticket} className="trip-item">
              <div>
                <strong>{trip.route}</strong>
                <small>{trip.date}</small>
              </div>
              <span>{trip.ticket}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
