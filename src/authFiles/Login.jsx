import { Link } from 'react-router';
import { BadgeCheck, Globe, Lock, Mail } from 'lucide-react';
import './authStyles.css';

function LoginPage() {
  return (
    <div className="authPage">
      <div className="authDiv">
        <h2 className="authHeading">Login to your MedConnect Account</h2>
        <p className="authSubtext">Welcome back. Sign in to continue your care journey.</p>

        <div className="googleLogIn">
          <button className="withGoogle">
            <Globe size={18} />
            <span>Continue with Google</span>
          </button>
        </div>

        <div className="facebookLogIn">
          <button className="facebookButton">
            <BadgeCheck size={18} />
            <span>Continue with Facebook</span>
          </button>
        </div>

        <div className="authDivider">
          <span>OR</span>
        </div>

        <form className="authForm">
          <label htmlFor="user-email" className="authLabel">E-mail Address</label>
          <div className="inputWrap">
            <Mail className="inputIcon" size={18} />
            <input id="user-email" className="authInput" placeholder="example@gmail.com" type="email" />
          </div>

          <label htmlFor="user-password" className="authLabel">Password</label>
          <div className="inputWrap">
            <Lock className="inputIcon" size={18} />
            <input id="user-password" className="authInput" placeholder="********" type="password" />
          </div>
        </form>

        <p className="forgotPassword">I forgot my Password</p>

        <button className="loginButton">LOG IN</button>

        <p className="authSwitch">
          No account yet?{' '}
          <Link to="/signup" className="authLink">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;