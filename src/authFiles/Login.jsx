import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { BadgeCheck, Globe, Lock, Mail } from 'lucide-react';
import { supabase } from '../supabaseClient';
import './authStyles.css';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: '', type: '' });
    setLoading(true);

    try {
      if (isForgotPassword) {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) throw error;

        setMessage({
          text: 'Password reset link sent! Check your email inbox.',
          type: 'success',
        });
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        if (data?.user) {
          setMessage({
            text: 'Login successful! Redirecting to home...',
            type: 'success',
          });
          setTimeout(() => navigate('/'), 1500);
        }
      }
    } catch (err) {
      setMessage({ text: err.message || 'Authentication error.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({ provider });
      if (error) throw error;
    } catch (err) {
      setMessage({ text: err.message, type: 'error' });
    }
  };

  return (
    <div className="authPage">
      <div className="authDiv">
        <Link to="/" className="authHeaderLogo">
          <span>🩺</span>
          <h2>MedConnect</h2>
        </Link>

        <h2 className="authHeading">
          {isForgotPassword ? 'Reset Password' : 'Login to your Account'}
        </h2>
        <p className="authSubtext">
          {isForgotPassword
            ? 'Enter your account email to receive a password reset link.'
            : 'Welcome back. Sign in to continue your care journey.'}
        </p>

        {message.text && (
          <div className={`authMessage ${message.type}`}>
            {message.text}
          </div>
        )}

        {!isForgotPassword && (
          <>
            <div className="googleLogIn">
              <button type="button" className="withGoogle" onClick={() => handleSocialLogin('google')}>
                <Globe size={18} />
                <span>Continue with Google</span>
              </button>
            </div>

            <div className="facebookLogIn">
              <button type="button" className="facebookButton" onClick={() => handleSocialLogin('facebook')}>
                <BadgeCheck size={18} />
                <span>Continue with Facebook</span>
              </button>
            </div>

            <div className="authDivider">
              <span>OR</span>
            </div>
          </>
        )}

        <form className="authForm" onSubmit={handleSubmit}>
          <label htmlFor="user-email" className="authLabel">E-mail Address</label>
          <div className="inputWrap">
            <Mail className="inputIcon" size={18} />
            <input
              id="user-email"
              className="authInput"
              placeholder="example@gmail.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {!isForgotPassword && (
            <>
              <label htmlFor="user-password" className="authLabel">Password</label>
              <div className="inputWrap">
                <Lock className="inputIcon" size={18} />
                <input
                  id="user-password"
                  className="authInput"
                  placeholder="********"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <p
                className="forgotPassword"
                onClick={() => {
                  setIsForgotPassword(true);
                  setMessage({ text: '', type: '' });
                }}
              >
                I forgot my Password
              </p>
            </>
          )}

          <button type="submit" className="loginButton" disabled={loading}>
            {loading
              ? 'Processing...'
              : isForgotPassword
              ? 'SEND RESET LINK'
              : 'LOG IN'}
          </button>
        </form>

        <p className="authSwitch">
          {isForgotPassword ? (
            <span
              className="authLink"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setIsForgotPassword(false);
                setMessage({ text: '', type: '' });
              }}
            >
              Back to Login
            </span>
          ) : (
            <>
              No account yet?{' '}
              <Link to="/signup" className="authLink">
                Register here
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default LoginPage;