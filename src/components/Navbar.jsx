import { Link } from "react-router";
import './Navbar.css';
import { UserKey, ArrowUpRight } from "lucide-react";
function Navbar () {
    return (
          <nav className="navbar">
      <div className="logo">
        <span>🩺</span>
        <h2>MedConnect</h2>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
       
      </ul>

      <div className="nav-buttons">



   <Link to="/login"><button className="login-btn">Login<UserKey/></button></Link>
  <Link to="/signup"><button className="signup-btn">Sign Up <ArrowUpRight/></button></Link>
      

     
      </div>
    </nav>
    )
}

export default Navbar;