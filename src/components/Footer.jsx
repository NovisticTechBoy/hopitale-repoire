import { Link } from "react-router";
import './Footer.css';

function Footer() {
    return (
        <div>
         
             <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>🩺 MedConnect</h2>
          <p>
            Connecting patients with trusted healthcare
            professionals anytime, anywhere.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-section">
          <h3>Services</h3>

          <a href="/doctors">Find Doctors</a>
          <a href="/appointments">Appointments</a>
          <a href="/emergency">Emergency Care</a>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>+234 XXX XXX XXXX</p>
          <p>medconnect@gmail.com</p>
          <p>Ibadan, Nigeria</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 MedConnect. All rights reserved.</p>
      </div>
    </footer>

        </div>
    );
}


export default Footer;