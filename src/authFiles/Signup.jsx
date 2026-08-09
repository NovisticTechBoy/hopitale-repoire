import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { BadgeCheck, Globe, Lock, Mail, UserRound } from 'lucide-react';
import { supabase } from '../supabaseClient';
import './authStyles.css';

function SignupPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (e) => {
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
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) throw error;

      if (data?.user) {
        // Also save to public.profiles table
        await supabase.from('profiles').insert([
          {
            id: data.user.id,
            full_name: fullName,
            email: email,
            role: 'patient',
          },
        ]);

        setMessage({
          text: 'Account created successfully! Redirecting to login...',
          type: 'success',
        });
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (err) {
      setMessage({ text: err.message || 'An error occurred during registration.', type: 'error' });
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
        
        <h2 className="authHeading">Create your Account</h2>
        <p className="authSubtext">Join today and take the next step in managing your care.</p>

        {message.text && (
          <div className={`authMessage ${message.type}`}>
            {message.text}
          </div>
        )}

        <div className="googleSignUp">
          <button type="button" className="withGoogle" onClick={() => handleSocialLogin('google')}>
            <Globe size={18} />
            <span>Continue with Google</span>
          </button>
        </div>

        <div className="facebookSignUp">
          <button type="button" className="facebookButton" onClick={() => handleSocialLogin('facebook')}>
            <BadgeCheck size={18} />
            <span>Continue with Facebook</span>
          </button>
        </div>

        <div className="authDivider">
          <span>OR</span>
        </div>

        <form className="authForm" onSubmit={handleSubmit}>
          <label htmlFor="name" className="authLabel">Full Name</label>
          <div className="inputWrap">
            <UserRound className="inputIcon" size={18} />
            <input
              id="name"
              className="authInput"
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <label htmlFor="email" className="authLabel">E-mail Address</label>
          <div className="inputWrap">
            <Mail className="inputIcon" size={18} />
            <input
              id="email"
              className="authInput"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <label htmlFor="password" className="authLabel">Password</label>
          <div className="inputWrap">
            <Lock className="inputIcon" size={18} />
            <input
              id="password"
              className="authInput"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <label htmlFor="confirm-password" className="authLabel">Confirm Password</label>
          <div className="inputWrap">
            <Lock className="inputIcon" size={18} />
            <input
              id="confirm-password"
              className="authInput"
              type="password"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signupButton" disabled={loading}>
            {loading ? 'Creating account...' : 'SIGN UP'}
          </button>
        </form>

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