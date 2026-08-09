import { Link } from "react-router";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>🩺 MedConnect</h2>
          <p>
            Connecting patients with trusted healthcare professionals anytime, anywhere.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/appointments">My Appointments</Link>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <a href="/#doctors">Find Doctors</a>
          <Link to="/appointments">Book Consultations</Link>
          <Link to="/signup">Create Account</Link>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📞 +234 800 MEDCONNECT</p>
          <p>✉️ support@medconnect.health</p>
          <p>📍 Healthcare HQ, Ibadan, Nigeria</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MedConnect. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;