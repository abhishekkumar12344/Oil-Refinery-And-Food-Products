import React from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero" data-aos="fade-down">
        <h1>Contact Us</h1>
        <p>Get in touch with our oil refinery team for queries or support</p>
      </section>

      {/* Contact Info */}
      <section className="contact-info-section" data-aos="fade-up">
        <div className="contact-info">
          <h2>Reach Us</h2>
          <p>
            <strong>Phone:</strong> +91 9876543210
          </p>
          <p>
            <strong>Email:</strong> info@oilrefinery.com
          </p>
          <p>
            <strong>Address:</strong>{" "}
            <a
              href="https://maps.app.goo.gl/oR4ncGBJcPmkK6fv6"
              target="_blank"
              rel="noopener noreferrer"
              className="google-map-link"
            >
              Industrial Area, Patna, Bihar – View on Google Maps
            </a>
          </p>
          <p>
            <strong>Working Hours:</strong> Mon - Sat, 9:00 AM - 6:00 PM
          </p>
        </div>
      </section>

      {/* Google Map Embed */}
      <section className="map-section" data-aos="zoom-in">
        <h2>Our Location</h2>
        <p>
          <a
            href="https://maps.app.goo.gl/oR4ncGBJcPmkK6fv6"
            target="_blank"
            rel="noopener noreferrer"
            className="google-map-link"
          >
            Patna, Bihar – View on Google Maps
          </a>
        </p>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Industrial+Area+Patna+Bihar&output=embed"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "10px", marginTop: "20px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section" data-aos="fade-up">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" data-aos="fade-right">
        <h2>FAQs</h2>
        <div className="faq-item">
          <h4>Do you support B2B orders?</h4>
          <p>Yes, we supply large volumes to businesses nationwide.</p>
        </div>
        <div className="faq-item">
          <h4>How soon do you respond to queries?</h4>
          <p>Within 24 business hours through email or phone.</p>
        </div>
      </section>

      {/* Support Section */}
      <section className="support-section" data-aos="fade-left">
        <h2>Need Assistance?</h2>
        <p>We are ready to help with technical or product inquiries.</p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=support@oilrefinery.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-support"
        >
          Contact Support
        </a>
      </section>
    </div>
  );
};

export default Contact;
