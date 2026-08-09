import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Lock } from 'lucide-react';
import { supabase } from '../supabaseClient';
import './authStyles.css';

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage({ text: '', type: '' });

    if (password !== confirmPassword) {
      setMessage({ text: 'Passwords do not match.', type: 'error' });
      return;
    }

    if (password.length < 6) {
      setMessage({ text: 'Password must be at least 6 characters long.', type: 'error' });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) throw error;

      setMessage({
        text: 'Your password has been successfully reset! Redirecting to login...',
        type: 'success',
      });

      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setMessage({ text: err.message || 'Failed to update password.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="authPage">
      <div className="authDiv">
        <Link to="/" className="authHeaderLogo">
          <span>🩺</span>
          <h2>MedConnect</h2>
        </Link>

        <h2 className="authHeading">Reset Your Password</h2>
        <p className="authSubtext">Enter a new secure password for your MedConnect account.</p>

        {message.text && (
          <div className={`authMessage ${message.type}`}>
            {message.text}
          </div>
        )}

        <form className="authForm" onSubmit={handleResetPassword}>
          <label htmlFor="new-password" className="authLabel">New Password</label>
          <div className="inputWrap">
            <Lock className="inputIcon" size={18} />
            <input
              id="new-password"
              className="authInput"
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <label htmlFor="confirm-new-password" className="authLabel">Confirm New Password</label>
          <div className="inputWrap">
            <Lock className="inputIcon" size={18} />
            <input
              id="confirm-new-password"
              className="authInput"
              type="password"
              placeholder="Re-enter new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="loginButton" disabled={loading}>
            {loading ? 'Updating Password...' : 'UPDATE PASSWORD'}
          </button>
        </form>

        <p className="authSwitch">
          Remembered your password?{' '}
          <Link to="/login" className="authLink">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
