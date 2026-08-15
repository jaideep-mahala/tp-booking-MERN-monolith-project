import './PaymentPage.css';

const methods = ['UPI', 'Credit Card', 'Debit Card', 'Net Banking', 'Wallet'];

function PaymentPage() {
  return (
    <div className="payment-page page-shell">
      <div className="page-topbar">
        <div>
          <p className="eyebrow">Secure checkout</p>
          <h1>Payment details</h1>
        </div>
      </div>

      <div className="payment-grid">
        <section className="payment-card">
          <h3>Select payment method</h3>
          <div className="method-list">
            {methods.map((method, index) => (
              <button key={method} className={`method-btn ${index === 0 ? 'active' : ''}`}>
                {method}
              </button>
            ))}
          </div>

          <div className="card-form">
            <label>
              Cardholder name
              <input defaultValue="Aarav Sharma" />
            </label>
            <label>
              Card number
              <input defaultValue="4521 7845 9012 9930" />
            </label>
            <div className="split-fields">
              <label>
                Expiry
                <input defaultValue="08/29" />
              </label>
              <label>
                CVV
                <input defaultValue="432" />
              </label>
            </div>
          </div>
        </section>

        <aside className="summary-card">
          <h3>Order summary</h3>
          <div className="summary-row"><span>Rajdhani Express</span><strong>₹3,460</strong></div>
          <div className="summary-row"><span>Service fee</span><strong>₹130</strong></div>
          <div className="summary-row"><span>Taxes</span><strong>₹275</strong></div>
          <div className="summary-row total"><span>Total</span><strong>₹3,865</strong></div>
          <button className="primary-btn full-width">Pay securely</button>
        </aside>
      </div>
    </div>
  );
}

export default PaymentPage;
