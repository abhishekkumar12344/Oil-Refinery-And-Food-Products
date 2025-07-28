import React, { useEffect } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-content" data-aos="fade-up">
          <h1>Welcome to Our Oil Refinery</h1>
          <p>Delivering quality, purity & trust for your family’s health</p>
          <a href="#about" className="section-btn">Learn More</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about" data-aos="fade-right">
        <h2>About Us</h2>
        <p>For over 20 years, we've been pioneers in oil refining and healthy food products. We ensure the best for your home and business needs.</p>
        <Link to="/about" className="section-btn">Read About Us</Link>
      </section>

      {/* Services Section */}
      <section className="services" id="services" data-aos="fade-left">
        <h2>Our Services</h2>
        <ul>
          <li>Advanced Oil Refining</li>
          <li>Custom Food Processing</li>
          <li>Packaging & Distribution</li>
        </ul>
        <Link to="/services" className="section-btn">View All Services</Link>
      </section>

      {/* Products Section */}
      <section className="products" id="products" data-aos="zoom-in-up">
        <h2>Our Products</h2>
        <div className="product-list">
          <div className="product-card">
            <img src="https://imgs.search.brave.com/l51j7VE6pZAJJQqtmDRnqv2P_0AmvKfVAZrjykgMzc8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzY2LzE5Lzc0/LzM2MF9GXzE2NjE5/NzQ2NV9DbjFOd0gy/VEw4OHhpZDB3M2lF/RDRmbElLWUxDaHk1/ai5qcGc" alt="Refined Oil"/>
            <h3>Refined Oil</h3>
            <Link to="/products#refined-oil" className="product-btn">View Product</Link>
          </div>
          <div className="product-card">
            <img src="https://imgs.search.brave.com/YylAEeP4Y3PBiIGoNymBTzakqPuidt4JdGSLQQnYR0Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tdXN0YXJkLW9p/bC13aXRoLWZsb3dl/ci13aGl0ZS1iYWNr/Z3JvdW5kXzUyNTU3/NC0zMjQ1LmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDA" alt="Mustard Oil"/>
            <h3>Mustard Oil</h3>
            <Link to="/products#mustard-oil" className="product-btn">View Product</Link>
          </div>
          <div className="product-card">
            <img src="https://imgs.search.brave.com/rYMZo_kuqIRG2s-jqPYkNsl8f7P9n7hdLlslXV8loAg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/NjMyNzQzMS9waG90/by9ob21lbWFkZS1w/dXJpZmllZC1idXR0/ZXItZ2hlZS1pbi1q/YXItYW5kLXdvb2Rl/bi1zcG9vbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Ukd2/RmhCbTU4M09yNmNs/QjNtalIyMU5NbV9w/MWUxNDVXTUhjdl9X/TE9LVT0" alt="Ghee"/>
            <h3>Pure Ghee</h3>
            <Link to="/products#ghee" className="product-btn">View Product</Link>
          </div>
        </div>
        <Link to="/products" className="section-btn">Browse All Products</Link>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials" data-aos="flip-up">
        <h2>What Our Clients Say</h2>
        <blockquote>“Their oil is pure and premium. Highly satisfied with the quality and support.”</blockquote>
        <cite>- A Happy Customer</cite>
      </section>

      {/* Contact CTA */}
      <section className="cta" id="contact" data-aos="fade-up">
        <h2>Let's Work Together</h2>
        <p>Want to collaborate or need bulk supply? We're here for you.</p>
        <Link to="/contact" className="section-btn">Contact Us</Link>
      </section>
    </div>
  );
};

export default Home;
