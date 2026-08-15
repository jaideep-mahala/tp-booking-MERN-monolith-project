import './AdminPage.css';
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";

const stats = [
  { label: 'Total bookings', value: '18,420' },
  { label: 'Revenue', value: '₹4.8L' },
  { label: 'Refund requests', value: '126' },
  { label: 'Active users', value: '9,540' }
];

const recentOrders = [
  { id: 'BK-1045', route: 'Delhi → Mumbai', passenger: 'Ritu', status: 'Confirmed' },
  { id: 'BK-1048', route: 'Delhi → Jaipur', passenger: 'Vikram', status: 'Pending' },
  { id: 'BK-1052', route: 'New Delhi → Ahmedabad', passenger: 'Nisha', status: 'Completed' }
];

function AdminPage() {
  return (
    <div className="admin-page page-shell">
      <Navbar />
      <div className="page-topbar">
        <div>
          <p className="eyebrow">Operations</p>
          <h1>Admin dashboard</h1>
        </div>
        <button className="primary-btn">Generate report</button>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </div>

      <div className="admin-grid">
        <section className="admin-card">
          <h3>Recent booking activity</h3>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Route</th>
                <th>Passenger</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.route}</td>
                  <td>{order.passenger}</td>
                  <td><span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <aside className="admin-card">
          <h3>Quick actions</h3>
          <ul className="action-list">
            <li>Manage train schedules</li>
            <li>Review refund requests</li>
            <li>Update fare rules</li>
            <li>Monitor cancellations</li>
          </ul>
        </aside>
      </div>
      <Footer />
    </div>
  );
}

export default AdminPage;
