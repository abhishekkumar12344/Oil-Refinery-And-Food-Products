import React from 'react';
import './Products.css';

const products = [
  {
    name: 'High-Grade Diesel',
    image: 'https://imgs.search.brave.com/hy9OC3iBjPPRwoePEeUgkQUBd693-fsAj93VknKB_mQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzg5LzI0LzQ0/LzM2MF9GXzg5MjQ0/NDMzX3pGM0xKdHI2/cjBGdE9RWHVGSnVP/cTRUZ2JGbEVXb1RN/LmpwZw',
    description: 'Fuel efficiency and reduced emissions for vehicles and industries.',
  },
  {
    name: 'Premium Petrol',
    image: 'https://imgs.search.brave.com/sVMG-SM5ffnsvzYGyXcnesO7davQWlI1zZsnBdnWHGE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM4/MzgxMzkyMi9waG90/by9mdWVsLWZpbGxp/bmctdXAtZnJvbS1h/LWdhc29saW5lLXB1/bXAtM2QtcmVuZGVy/aW5nLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1RUmdYUWow/RWpfVnVDSFpJQ0Vl/RDFrd2d4MEVjOURr/cS04RlB5b2czV3E0/PQ',
    description: 'Unleaded petrol ideal for smooth and clean engine performance.',
  },
  {
    name: 'Industrial Lubricants',
    image: 'https://imgs.search.brave.com/MCZHacQSoC476_zGefu0OqqmTyuxV1WoEmJ8f8qn-6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzg5Lzg5LzI1/LzM2MF9GXzM4OTg5/MjU2MV9uYW5oVzFC/Q3c2TnhkVWJOVXBW/UWlGZzM5YzJCcUZj/VC5qcGc',
    description: 'Advanced lubrication solutions for machinery and engines.',
  },
  {
    name: 'Pure Desi Ghee',
    image: 'https://imgs.search.brave.com/mKQdwruaY_1qQ5By-TbggTqFrL7WJLo4anRWh9AxoW8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzAyLzE5LzY2/LzM2MF9GXzMwMjE5/NjY3MF95Vmk5cG5H/NU45MTVCOE82cTVY/MFBtWWp3Q0ZNOVZ0/eC5qcGc',
    description: 'Unleaded petrol ideal for smooth and clean engine performance.',
  },
  {
    name: 'Premium Petrol',
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60',
    description: 'Unleaded petrol ideal for smooth and clean engine performance.',
  },
  {
    name: 'Premium Petrol',
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60',
    description: 'Unleaded petrol ideal for smooth and clean engine performance.',
  },
  {
    name: 'Premium Petrol',
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60',
    description: 'Unleaded petrol ideal for smooth and clean engine performance.',
  },
  {
    name: 'Premium Petrol',
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60',
    description: 'Unleaded petrol ideal for smooth and clean engine performance.',
  },
  {
    name: 'Premium Petrol',
    image: 'https://imgs.search.brave.com/sVMG-SM5ffnsvzYGyXcnesO7davQWlI1zZsnBdnWHGE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM4/MzgxMzkyMi9waG90/by9mdWVsLWZpbGxp/bmctdXAtZnJvbS1h/LWdhc29saW5lLXB1/bXAtM2QtcmVuZGVy/aW5nLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1RUmdYUWow/RWpfVnVDSFpJQ0Vl/RDFrd2d4MEVjOURr/cS04RlB5b2czV3E0/PQ',
    description: 'Unleaded petrol ideal for smooth and clean engine performance.',
  },
  {
    name: 'Industrial Lubricants',
    image: 'https://imgs.search.brave.com/MCZHacQSoC476_zGefu0OqqmTyuxV1WoEmJ8f8qn-6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzg5Lzg5LzI1/LzM2MF9GXzM4OTg5/MjU2MV9uYW5oVzFC/Q3c2TnhkVWJOVXBW/UWlGZzM5YzJCcUZj/VC5qcGc',
    description: 'Advanced lubrication solutions for machinery and engines.',
  },{
    name: 'Premium Petrol',
    image: 'https://imgs.search.brave.com/sVMG-SM5ffnsvzYGyXcnesO7davQWlI1zZsnBdnWHGE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM4/MzgxMzkyMi9waG90/by9mdWVsLWZpbGxp/bmctdXAtZnJvbS1h/LWdhc29saW5lLXB1/bXAtM2QtcmVuZGVy/aW5nLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1RUmdYUWow/RWpfVnVDSFpJQ0Vl/RDFrd2d4MEVjOURr/cS04RlB5b2czV3E0/PQ',
    description: 'Unleaded petrol ideal for smooth and clean engine performance.',
  },
  {
    name: 'Industrial Lubricants',
    image: 'https://imgs.search.brave.com/MCZHacQSoC476_zGefu0OqqmTyuxV1WoEmJ8f8qn-6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzg5Lzg5LzI1/LzM2MF9GXzM4OTg5/MjU2MV9uYW5oVzFC/Q3c2TnhkVWJOVXBW/UWlGZzM5YzJCcUZj/VC5qcGc',
    description: 'Advanced lubrication solutions for machinery and engines.',
  },
 
];

const Product = () => {
  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="hero-content">
          <h1>Explore Our Products</h1>
          <p>Premium quality oil and fuel products trusted by industries worldwide.</p>
        </div>
      </section>

      <section className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="product-highlight">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div>✅ ISO Certified Production</div>
          <div>✅ Environment Friendly</div>
          <div>✅ 24/7 Customer Support</div>
        </div>
      </section>

      <section className="product-cta">
        <h2>Need Assistance?</h2>
        <p>Our product experts are here to help you select the right solution.</p>
        <a href="/contact" className="contact-btn">📞 Contact Our Team</a>
      </section>
    </div>
  );
};

export default Product;
