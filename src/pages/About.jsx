import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="about-container">

      <section className="about-hero" data-aos="fade-up">
        <h1>About Our Company</h1>
        <p>Delivering excellence in oil refining and food manufacturing for over two decades.</p>
      </section>

      <section className="about-section" data-aos="fade-left">
        <h2>Our Mission</h2>
        <p>To provide premium quality edible oil and food products that meet the highest standards of health, safety, and sustainability.</p>

        <h2>Our Vision</h2>
        <p>To be a global leader in food processing by continually innovating and investing in technology and people.</p>
      </section>

      <section className="about-section" data-aos="fade-right">
        <h2>Our Journey</h2>
        <p>Founded in 2000, we have expanded our facilities and product lines, serving thousands of households and businesses nationwide.</p>
      </section>

      <section className="about-section" data-aos="fade-up">
        <h2>Our Core Values</h2>
        <ul>
          <li>Quality & Purity</li>
          <li>Customer Satisfaction</li>
          <li>Innovation</li>
          <li>Integrity</li>
          <li>Sustainability</li>
        </ul>
      </section>

      <section className="about-section" data-aos="fade-left">
        <h2>State-of-the-Art Facilities</h2>
        <p>Equipped with advanced refining and packaging units ensuring efficiency, safety, and hygiene.</p>
      </section>

      <section className="about-section" data-aos="fade-right">
        <h2>Corporate Social Responsibility</h2>
        <p>We believe in giving back — supporting local farmers, clean water programs, and women's employment initiatives.</p>
      </section>

      <section className="about-section" data-aos="zoom-in-up">
        <h2>Achievements</h2>
        <ul>
          <li>ISO 22000 Certified</li>
          <li>Recognized by FSSAI for safety standards</li>
          <li>Over 5 lakh customers served across India</li>
        </ul>
      </section>

      <section className="about-section certificates" data-aos="flip-up">
        <h2>Company Certificates</h2>
        <p>We are proud to be certified by national and international bodies. Click below to view each certificate:</p>
        <div className="certificate-grid">
          <div className="certificate-card" data-aos="zoom-in" data-aos-delay="100">
            <h4>ISO 22000 Certificate</h4>
            <a href="/certificates/cfff1.pdf" target="_blank" rel="noopener noreferrer">View PDF</a>
          </div>
          <div className="certificate-card" data-aos="zoom-in" data-aos-delay="200">
            <h4>FSSAI Approval</h4>
            <a href="/certificates/fssai.pdf" target="_blank" rel="noopener noreferrer">View PDF</a>
          </div>
          <div className="certificate-card" data-aos="zoom-in" data-aos-delay="300">
            <h4>MSME Registration</h4>
            <a href="/certificates/msme.pdf" target="_blank" rel="noopener noreferrer">View PDF</a>
          </div>
          <div className="certificate-card" data-aos="zoom-in" data-aos-delay="400">
            <h4>Environmental Compliance</h4>
            <a href="/certificates/environmental.pdf" target="_blank" rel="noopener noreferrer">View PDF</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
