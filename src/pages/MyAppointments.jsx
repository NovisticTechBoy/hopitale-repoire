import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { Calendar, Clock, User, XCircle, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { supabase } from '../supabaseClient';
import './MyAppointments.css';

function MyAppointments() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cancellingId, setCancellingId] = useState(null);
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    fetchUserAppointments();
  }, []);

  const fetchUserAppointments = async () => {
    try {
      const { data: userData } = await supabase.auth.getUser();
      const user = userData?.user;

      if (!user) {
        navigate('/login');
        return;
      }

      const { data, error } = await supabase
        .from('appointments')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAppointments(data || []);
    } catch (err) {
      console.error('Error fetching appointments:', err);
      setMessage({ text: 'Failed to load your appointments.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleCancelAppointment = async (id) => {
    if (!window.confirm('Are you sure you want to cancel this appointment?')) return;

    setCancellingId(id);
    try {
      const { error } = await supabase
        .from('appointments')
        .update({ status: 'cancelled' })
        .eq('id', id);

      if (error) throw error;

      setAppointments((prev) =>
        prev.map((appt) => (appt.id === id ? { ...appt, status: 'cancelled' } : appt))
      );
      setMessage({ text: 'Appointment cancelled successfully.', type: 'success' });
    } catch (err) {
      setMessage({ text: err.message || 'Failed to cancel appointment.', type: 'error' });
    } finally {
      setCancellingId(null);
    }
  };

  return (
    <>
      <Navbar />
      <div className="appointmentsContainer">
        <div className="appointmentsHeader">
          <Link to="/" className="backLink">
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <h2>My Appointments</h2>
          <p>Manage and track all your scheduled doctor consultations.</p>
        </div>

        {message.text && (
          <div className={`authMessage ${message.type}`} style={{ maxWidth: '800px', margin: '0 auto 20px' }}>
            {message.text}
          </div>
        )}

        {loading ? (
          <div className="loadingState">Loading your appointments...</div>
        ) : appointments.length === 0 ? (
          <div className="emptyState">
            <Calendar size={48} />
            <h3>No Appointments Found</h3>
            <p>You haven't scheduled any doctor consultations yet.</p>
            <Link to="/#doctors">
              <button className="bookNowBtn">Book Your First Appointment</button>
            </Link>
          </div>
        ) : (
          <div className="appointmentsGrid">
            {appointments.map((appt) => (
              <div key={appt.id} className="appointmentCard">
                <div className="cardHeader">
                  <div>
                    <h3>{appt.doctor_name || 'Doctor'}</h3>
                    <span className="specialtyBadge">{appt.specialty}</span>
                  </div>
                  <span className={`statusBadge ${appt.status}`}>
                    {appt.status}
                  </span>
                </div>

                <div className="cardBody">
                  <p><User size={16} /> <strong>Patient:</strong> {appt.patient_name || 'You'}</p>
                  <p><Calendar size={16} /> <strong>Date:</strong> {appt.appointment_date}</p>
                  <p><Clock size={16} /> <strong>Time:</strong> {appt.appointment_time}</p>
                </div>

                {appt.status !== 'cancelled' && (
                  <div className="cardFooter">
                    <button
                      className="cancelBtn"
                      onClick={() => handleCancelAppointment(appt.id)}
                      disabled={cancellingId === appt.id}
                    >
                      <XCircle size={16} />
                      {cancellingId === appt.id ? 'Cancelling...' : 'Cancel Appointment'}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default MyAppointments;
