import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import LoginPage from './authFiles/Login.jsx';
import SignupPage from './authFiles/Signup.jsx';
import MyAppointments from './pages/MyAppointments.jsx';
import ResetPasswordPage from './authFiles/ResetPassword.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
