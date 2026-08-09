import React, { useState } from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: '1100px', margin: '40px auto 60px', padding: '0 24px', minHeight: '65vh' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--text-primary)' }}>
            Contact Support & Patient Care
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Have questions about booking an appointment, medical partners, or account settings? Our team is here to help 24/7.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', alignItems: 'start' }}>
          <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: '0 16px 40px var(--shadow-color)' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '20px' }}>Get in Touch</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <Phone color="var(--accent-color)" size={20} />
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block' }}>Phone Support</strong>
                  <span>+234 800 MEDCONNECT</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <Mail color="var(--accent-color)" size={20} />
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block' }}>Email Enquiries</strong>
                  <span>support@medconnect.health</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <MapPin color="var(--accent-color)" size={20} />
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block' }}>Headquarters</strong>
                  <span>Healthcare Tech Hub, Ibadan, Nigeria</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: '0 16px 40px var(--shadow-color)' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '20px' }}>Send Us a Message</h3>

            {submitted ? (
              <div className="authMessage success" style={{ padding: '16px', borderRadius: '12px' }}>
                Thank you! Your message has been sent successfully. We will get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="authForm">
                <label className="authLabel">Your Name</label>
                <div className="inputWrap">
                  <input
                    type="text"
                    className="authInput"
                    style={{ paddingLeft: '14px' }}
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <label className="authLabel">Email Address</label>
                <div className="inputWrap">
                  <input
                    type="email"
                    className="authInput"
                    style={{ paddingLeft: '14px' }}
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <label className="authLabel">Message</label>
                <div className="inputWrap">
                  <textarea
                    className="authInput"
                    style={{ paddingLeft: '14px', minHeight: '120px', resize: 'vertical' }}
                    placeholder="How can we assist you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="loginButton" style={{ marginTop: '12px', display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;