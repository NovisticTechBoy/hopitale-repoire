import React, { useState, useEffect } from 'react';
import './Home-Styles.css';
import { Link, useNavigate } from 'react-router';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import DoctorImage1 from '../assets/doctor.jpg';
import { Search, BookOpenCheck, MousePointer, CircleChevronRight, CheckCircle2, X } from "lucide-react";
import { supabase } from '../supabaseClient';

function Home() {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [bookingDoctor, setBookingDoctor] = useState(null);
  const [patientName, setPatientName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('10:00 AM');
  const [bookingStatus, setBookingStatus] = useState({ text: '', type: '' });

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const { data, error } = await supabase.from('doctors').select('*');
      if (error) throw error;
      setDoctors(data || []);
    } catch (err) {
      console.error('Error fetching doctors:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleBookClick = async (doc) => {
    const { data } = await supabase.auth.getUser();
    if (!data?.user) {
      navigate('/login');
      return;
    }

    // Auto-fill patient name if profile metadata available
    const nameFromAuth = data.user.user_metadata?.full_name || '';
    if (nameFromAuth && !patientName) {
      setPatientName(nameFromAuth);
    }

    setBookingDoctor(doc);
  };

  const handleBookAppointment = async (e) => {
    e.preventDefault();
    setBookingStatus({ text: '', type: '' });

    try {
      const { data: userData } = await supabase.auth.getUser();
      const userId = userData?.user?.id;

      if (!userId) {
        navigate('/login');
        return;
      }

      const { error } = await supabase.from('appointments').insert([
        {
          user_id: userId,
          patient_name: patientName,
          doctor_id: bookingDoctor.id,
          doctor_name: bookingDoctor.name,
          specialty: bookingDoctor.specialty,
          appointment_date: appointmentDate,
          appointment_time: appointmentTime,
          status: 'confirmed',
        },
      ]);

      if (error) throw error;

      setBookingStatus({
        text: `Appointment confirmed with ${bookingDoctor.name} for ${appointmentDate} at ${appointmentTime}!`,
        type: 'success',
      });

      setTimeout(() => {
        setBookingDoctor(null);
        setBookingStatus({ text: '', type: '' });
        setPatientName('');
        setAppointmentDate('');
      }, 2500);
    } catch (err) {
      setBookingStatus({ text: err.message || 'Failed to book appointment.', type: 'error' });
    }
  };

  const filteredDoctors = doctors.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty
      ? doc.specialty.toLowerCase() === selectedSpecialty.toLowerCase()
      : true;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <>
      <div>
        <Navbar />

        <section className="hero">
          <div className="hero-text">
            <h1>Healthcare, on your schedule.</h1>
            <p>
              MedConnect helps people find trusted doctors, learn about common health conditions, and access useful health information before or alongside booking care.
            </p>

            <div className="hero-buttons">
              <a href="#doctors" className="primary-btn">
                <button>
                  Find a Doctor <Search size={20} />
                </button>
              </a>
              <a href="#doctors" className="secondary-btn">
                <button className="secondary">
                  Book Appointment <BookOpenCheck size={20} />
                </button>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src={DoctorImage1} alt="Doctor" />
          </div>
        </section>

        <section className="search-section">
          <input
            type="text"
            placeholder="Doctor or specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
          <button onClick={() => {}}>
            Search <Search size={20} />
          </button>
        </section>

        <section className="specialties">
          <h2>Popular Specialties</h2>
          <div className="specialty-grid">
            <div
              className={`card ${selectedSpecialty === 'Dentist' ? 'active-specialty' : ''}`}
              onClick={() => setSelectedSpecialty(selectedSpecialty === 'Dentist' ? '' : 'Dentist')}
              style={{ cursor: 'pointer' }}
            >
              🦷 Dentist
            </div>
            <div
              className={`card ${selectedSpecialty === 'Cardiologist' ? 'active-specialty' : ''}`}
              onClick={() => setSelectedSpecialty(selectedSpecialty === 'Cardiologist' ? '' : 'Cardiologist')}
              style={{ cursor: 'pointer' }}
            >
              ❤️ Cardiologist
            </div>
            <div
              className={`card ${selectedSpecialty === 'Neurologist' ? 'active-specialty' : ''}`}
              onClick={() => setSelectedSpecialty(selectedSpecialty === 'Neurologist' ? '' : 'Neurologist')}
              style={{ cursor: 'pointer' }}
            >
              🧠 Neurologist
            </div>
            <div
              className={`card ${selectedSpecialty === 'Pediatrician' ? 'active-specialty' : ''}`}
              onClick={() => setSelectedSpecialty(selectedSpecialty === 'Pediatrician' ? '' : 'Pediatrician')}
              style={{ cursor: 'pointer' }}
            >
              👶 Pediatrician
            </div>
            <div
              className={`card ${selectedSpecialty === 'Ophthalmologist' ? 'active-specialty' : ''}`}
              onClick={() => setSelectedSpecialty(selectedSpecialty === 'Ophthalmologist' ? '' : 'Ophthalmologist')}
              style={{ cursor: 'pointer' }}
            >
              👁️ Ophthalmologist
            </div>
            <div
              className={`card ${selectedSpecialty === 'Orthopedic' ? 'active-specialty' : ''}`}
              onClick={() => setSelectedSpecialty(selectedSpecialty === 'Orthopedic' ? '' : 'Orthopedic')}
              style={{ cursor: 'pointer' }}
            >
              🦴 Orthopedic
            </div>
          </div>
        </section>

        <section className="doctors" id="doctors">
          <h2>Featured Doctors</h2>

          {loading ? (
            <p>Loading trusted healthcare professionals...</p>
          ) : filteredDoctors.length === 0 ? (
            <p>No doctors found matching your criteria.</p>
          ) : (
            <div className="doctor-grid">
              {filteredDoctors.map((doc) => (
                <div key={doc.id} className="doctor-card">
                  <h3>{doc.name}</h3>
                  <p>{doc.specialty}</p>
                  <p>⭐ {doc.rating}</p>
                  <button onClick={() => handleBookClick(doc)}>Book Appointment</button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Appointment Booking Modal */}
        {bookingDoctor && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h3>Book Appointment with {bookingDoctor.name}</h3>
                <button className="close-btn" onClick={() => setBookingDoctor(null)}>
                  <X size={20} />
                </button>
              </div>

              {bookingStatus.text ? (
                <div className={`authMessage ${bookingStatus.type}`}>
                  {bookingStatus.text}
                </div>
              ) : (
                <form onSubmit={handleBookAppointment} className="authForm">
                  <p className="modal-subtext">Specialty: <strong>{bookingDoctor.specialty}</strong></p>

                  <label className="authLabel">Your Full Name</label>
                  <div className="inputWrap">
                    <input
                      type="text"
                      className="authInput"
                      style={{ paddingLeft: '14px' }}
                      placeholder="Enter your name"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      required
                    />
                  </div>

                  <label className="authLabel">Appointment Date</label>
                  <div className="inputWrap">
                    <input
                      type="date"
                      className="authInput"
                      style={{ paddingLeft: '14px' }}
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      required
                    />
                  </div>

                  <label className="authLabel">Preferred Time</label>
                  <div className="inputWrap">
                    <select
                      className="authInput"
                      style={{ paddingLeft: '14px' }}
                      value={appointmentTime}
                      onChange={(e) => setAppointmentTime(e.target.value)}
                    >
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                    </select>
                  </div>

                  <button type="submit" className="loginButton" style={{ marginTop: '12px' }}>
                    Confirm Booking
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        <section className="how-it-works">
          <h2>How You can use MedConnect</h2>

          <div className="steps">
            <div className="step">
              <h3>
                1. Learn <Search size={20} />
              </h3>
              <p>Explore trusted health information and common issues before seeking care.</p>
            </div>

            <div className="step">
              <h3>
                2. Search <MousePointer size={20} />
              </h3>
              <p>Find doctors, specialists, and care options that match your needs.</p>
            </div>

            <div className="step">
              <h3>
                3. Book <BookOpenCheck size={20} />
              </h3>
              <p>Select a convenient time for your appointment or consultation.</p>
            </div>

            <div className="step">
              <h3>
                4. Stay informed <CircleChevronRight size={20} />
              </h3>
              <p>Use practical health education to make better decisions and support your wellbeing.</p>
            </div>
          </div>
        </section>

        <section className="benefits">
          <h2>Why Choose Us?</h2>

          <ul>
            <li>✔ Verified professionals</li>
            <li>✔ Comprehensive health information</li>
            <li>✔ Personalized care recommendations</li>
            <li>✔ Appointment reminders</li>
            <li>✔ Online consultations</li>
          </ul>
        </section>

        <section className="cta">
          <h2>Ready to take charge of your health?</h2>
          <Link to="/login">
            <button>Get Started</button>
          </Link>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Home;
