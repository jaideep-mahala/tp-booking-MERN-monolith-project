import './SignupPage.css';
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";

function SignupPage() {
  return (

    <div className="signup-page page-shell">
      <Navbar />
      <div className="signup-layout">
        <div className="signup-copy">
          <p className="eyebrow">Create account</p>
          <h1>Register for easy train bookings</h1>
          <ul>
            <li>Fast booking and instant ticket access</li>
            <li>Digital wallet and saved traveler profiles</li>
            <li>Rail updates and special offers on your email</li>
          </ul>
        </div>

        <form className="signup-form">
          <h2>Sign up</h2>
          <label>
            Full name
            <input defaultValue="Aarav Sharma" />
          </label>
          <label>
            Mobile number
            <input defaultValue="9876543210" />
          </label>
          <label>
            Email address
            <input defaultValue="aarav@example.com" />
          </label>
          <label>
            Password
            <input type="password" defaultValue="password123" />
          </label>
          <label>
            Confirm password
            <input type="password" defaultValue="password123" />
          </label>
          <button type="button" className="primary-btn full-width">Create account</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignupPage;
