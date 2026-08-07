import './authStyles.css';
import { Link } from 'react-router';
import { BadgeCheck, Globe, Lock, Mail, UserRound } from 'lucide-react';

function SignupPage() {
  return (
    <div className="authPage">
      <div className="authDiv">
        <h2 className="authHeading">Create your MedConnect Account.</h2>
        <p className="authSubtext">Join today and take the next step in
             managing your care.</p>

        <form className="authForm">
          <label htmlFor="name" className="authLabel">Full Name</label>
          <div className="inputWrap">
            <UserRound className="inputIcon" size={18} />
            <input id="name" className="authInput" type="text" placeholder="Enter your full name" />
          </div>

          <label htmlFor="email" className="authLabel">E-mail Address</label>
          <div className="inputWrap">
            <Mail className="inputIcon" size={18} />
            <input id="email" className="authInput" type="email" placeholder="example@gmail.com" />
          </div>

          <label htmlFor="password" className="authLabel">Password</label>
          <div className="inputWrap">
            <Lock className="inputIcon" size={18} />
            <input id="password" className="authInput" type="password" placeholder="Create a password" />
          </div>

          <label htmlFor="confirm-password" className="authLabel">Confirm Password</label>
          <div className="inputWrap">
            <Lock className="inputIcon" size={18} />
            <input id="confirm-password" className="authInput" type="password" placeholder="Re-enter password" />
          </div>

          <button className="loginButton">SIGN UP</button>
        </form>

        <div className="authDivider">
          <span>OR</span>
        </div>

        <div className="googleSignUp">
          <button className="withGoogle">
            <Globe size={18} />
            <span>Continue with Google</span>
          </button>
        </div>

        <div className="facebookSignUp">
          <button className="facebookButton">
            <BadgeCheck size={18} />
            <span>Continue with Facebook</span>
          </button>
        </div>

        <p className="authSwitch">
          Already have an account?{' '}
          <Link to="/login" className="authLink">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;