import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { UserKey, ArrowUpRight, LogOut, Sun, Moon, Calendar } from "lucide-react";
import { supabase } from "../supabaseClient";
import { useTheme } from "../context/ThemeContext";
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user || null);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'inherit' }}>
          <span>🩺</span>
          <h2>MedConnect</h2>
        </Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {user && <li><Link to="/appointments">My Appointments</Link></li>}
      </ul>

      <div className="nav-buttons">
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        {user ? (
          <>
            <Link to="/appointments">
              <button className="secondary-nav-btn">
                <Calendar size={16} /> Appointments
              </button>
            </Link>
            <button className="login-btn" onClick={handleSignOut}>
              Sign Out <LogOut size={16} />
            </button>
          </>
        ) : (
          <>
            <Link to="/login"><button className="login-btn">Login <UserKey size={16} /></button></Link>
            <Link to="/signup"><button className="signup-btn">Sign Up <ArrowUpRight size={16} /></button></Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;