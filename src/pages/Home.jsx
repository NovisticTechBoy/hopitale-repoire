import React from 'react';
import './Home-Styles.css';
import { Link } from 'react-router';
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import DoctorImage1 from '../assets/doctor.jpg';
import { Search, BookOpenCheck, MousePointer, CircleChevronRight } from "lucide-react";

function Home(){

    return(
        <>
        <div>
            <Navbar />

 <section className="hero">
        <div className="hero-text">
          <h1>Healthcare, on your schedule.</h1>

          <p>
            Find trusted doctors and healthcare professionals,
            compare reviews, and book appointments in minutes.
          </p>

          <div className="hero-buttons">
            <button>Find a Doctor
                <Search size={20} />
            </button>
            <button className="secondary">Book Appointment
                <BookOpenCheck size={20} />
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={DoctorImage1}
            alt="Doctor"
          />
        </div>
      </section>


      <section className="search-section">
        <input type="text" placeholder="Doctor or specialty" />
        <input type="date" />
        <button>Search
            <Search size={20} />
        </button>
      </section>

      <section className="specialties">
        <h2>Popular Specialties</h2>

        <div className="specialty-grid">
          <div className="card">🦷 Dentist</div>
          <div className="card">❤️ Cardiologist</div>
          <div className="card">🧠 Neurologist</div>
          <div className="card">👶 Pediatrician</div>
          <div className="card">👁️ Ophthalmologist</div>
          <div className="card">🦴 Orthopedic</div>
        </div>
      </section>

      <section className="doctors">
        <h2>Featured Doctors</h2>

        <div className="doctor-grid">
          <div className="doctor-card">
            <h3>Dr. Sarah Williams</h3>
            <p>Cardiologist</p>
            <p>⭐ 4.9</p>
            <button>Book Appointment</button>
          </div>

          <div className="doctor-card">
            <h3>Dr. James Brown</h3>
            <p>Dentist</p>
            <p>⭐ 4.8</p>
            <button>Book Appointment</button>
          </div>

          <div className="doctor-card">
            <h3>Dr. Grace Adams</h3>
            <p>Neurologist</p>
            <p>⭐ 4.7</p>
            <button>Book Appointment</button>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How You can use MedConnect</h2>

        <div className="steps">
          <div className="step">
            <h3>1. Search<Search size={20} /></h3>
            <p>Find doctors and specialists.</p>
          </div>

          <div className="step">
            <h3>2. Choose <MousePointer size={20} /></h3>
            <p>Read reviews and select who suits your problem.</p>
          </div>

          <div className="step">
            <h3>3. Book <BookOpenCheck size={20} /></h3>
            <p>Select a convenient time for your appointment.</p>
          </div>

          <div className="step">
            <h3>4. Meet <CircleChevronRight size={20} /></h3>
            <p>YOU choose whether to Attend physically or online.</p>
          </div>
        </div>
      </section>

     
      <section className="benefits">
        <h2>Why Choose Us?</h2>

        <ul>
          <li>✔ Verified professionals</li>
          <li>✔ Fast booking</li>
          <li>✔ Secure records</li>
          <li>✔ Appointment reminders</li>
          <li>✔ Online consultations</li>
        </ul>
      </section>

    {/*  <section className="testimonials">
        <h2>What Patients Say</h2>

        <div className="testimonial-card">
          <p>
            "Booking an appointment was very easy and stress-free."
          </p>

          <span>— Mary Johnson ⭐⭐⭐⭐⭐</span>
        </div>
      </section>
*/}
      <section className="cta">
        <h2>Ready to take charge of your health?</h2>

        <Link to="/login"><button>Get Started</button></Link>
      </section>


            <Footer />
        </div>
        </>
    )
}

export default Home;
