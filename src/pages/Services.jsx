import React, { useEffect } from 'react';
import './Services.css';
import { FaIndustry, FaShippingFast, FaHandshake, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    icon: <FaIndustry />,
    title: 'Refining Excellence',
    description: 'Top-quality oil refining processes ensuring purity and safety.'
  },
  {
    icon: <FaShippingFast />,
    title: 'Fast Delivery',
    description: 'Reliable and timely delivery across all regions.'
  },
  {
    icon: <FaHandshake />,
    title: 'Client Satisfaction',
    description: 'Trusted by hundreds of clients with custom services.'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Safety Compliance',
    description: 'Strict adherence to industrial safety and environmental standards.'
  }
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services-container">
      {/* Hero Section */}
      <section className="services-hero" data-aos="fade-down">
        <h1>Our Services</h1>
        <p>We provide reliable and high-quality refinery services tailored to your needs.</p>
      </section>

      {/* Service Cards */}
      <section className="services-cards" data-aos="fade-up">
        {services.map((service, index) => (
          <div className="services-card" key={index}>
            <div className="services-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="services-cta" data-aos="zoom-in">
        <h2>Looking for custom solutions?</h2>
        <p>Contact us to discuss your requirements. We’ll tailor our services for you.</p>
        <Link to="/contact" className="services-cta-btn">Get in Touch</Link>
      </section>
    </div>
  );
};

export default Services;
