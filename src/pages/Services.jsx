import React from 'react';
import './services.css';
import { FaIndustry, FaShippingFast, FaHandshake, FaShieldAlt } from 'react-icons/fa';

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
  return (
    <div className="services-container">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>We provide reliable and high-quality refinery services tailored to your needs.</p>
      </section>

      <section className="services-cards">
        {services.map((service, index) => (
          <div className="services-card" key={index}>
            <div className="services-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      <section className="services-cta">
        <h2>Looking for custom solutions?</h2>
        <p>Contact us to discuss your requirements. We’ll tailor our services for you.</p>
        <a href="/contact" className="services-cta-btn">Get in Touch</a>
      </section>
    </div>
  );
};

export default Services;
