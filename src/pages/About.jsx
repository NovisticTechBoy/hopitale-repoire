import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { ShieldCheck, HeartPulse, Award, Users } from "lucide-react";

function About() {
  return (
    <>
      <Navbar />
      <div style={{ maxWidth: '1100px', margin: '40px auto 60px', padding: '0 24px', minHeight: '65vh' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--text-primary)' }}>
            About MedConnect
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
            MedConnect is dedicated to transforming healthcare access by connecting patients with certified, experienced medical specialists whenever they need care.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          <div style={{ padding: '28px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', boxShadow: '0 16px 40px var(--shadow-color)' }}>
            <ShieldCheck size={36} color="var(--accent-color)" style={{ marginBottom: '16px' }} />
            <h3 style={{ marginBottom: '10px', color: 'var(--text-primary)' }}>Verified Professionals</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Every healthcare provider on MedConnect is thoroughly vetted and credentialed.
            </p>
          </div>

          <div style={{ padding: '28px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', boxShadow: '0 16px 40px var(--shadow-color)' }}>
            <HeartPulse size={36} color="var(--accent-color)" style={{ marginBottom: '16px' }} />
            <h3 style={{ marginBottom: '10px', color: 'var(--text-primary)' }}>Patient-First Care</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              We prioritize convenient appointment scheduling, privacy, and seamless communication.
            </p>
          </div>

          <div style={{ padding: '28px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', boxShadow: '0 16px 40px var(--shadow-color)' }}>
            <Award size={36} color="var(--accent-color)" style={{ marginBottom: '16px' }} />
            <h3 style={{ marginBottom: '10px', color: 'var(--text-primary)' }}>Top Rated Quality</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Read authentic reviews and ratings from real patients to choose the right specialist.
            </p>
          </div>

          <div style={{ padding: '28px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', boxShadow: '0 16px 40px var(--shadow-color)' }}>
            <Users size={36} color="var(--accent-color)" style={{ marginBottom: '16px' }} />
            <h3 style={{ marginBottom: '10px', color: 'var(--text-primary)' }}>Global Accessibility</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Book in-person visits or telemedicine consultations from anywhere in Nigeria and beyond.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
