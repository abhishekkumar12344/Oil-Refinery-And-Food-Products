import React, { useEffect } from 'react';
import './Products.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const products = [
    {
      id: 1,
      name: 'Refined Sunflower Oil',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/SE/XO/IM/15331838/refined-sunflower-oil.jpeg',
      description: 'High-quality, heart-healthy oil ideal for cooking and frying.'
    },
    {
      id: 2,
      name: 'Pure Mustard Oil',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/8/OT/YO/NZ/103003054/engine-brand-mustard-oil.jpg',
      description: 'Traditional mustard oil with a strong aroma, perfect for Indian cuisine.'
    },
    {
      id: 3,
      name: 'Premium Ghee',
      image: 'https://www.jiomart.com/images/product/original/490000516/patanjali-cow-s-ghee-1-l-product-images-o490000516-p590180218-0-202203141738.jpg',
      description: 'Pure cow ghee rich in aroma and taste, used for cooking and puja.'
    },
    {
      id: 4,
      name: 'Desi Chana Sattu',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/341265963/XH/AG/QO/84019979/chana-sattu.jpg',
      description: 'Nutritious sattu made from roasted chana, perfect for energy drinks.'
    },
    {
      id: 5,
      name: 'Soybean Oil',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/4/BC/XT/FJ/124102731/refined-soybean-oil.jpg',
      description: 'Refined soybean oil rich in polyunsaturated fats.'
    },
    {
      id: 6,
      name: 'Groundnut Oil',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/328061051/WE/ZD/VU/94112026/groundnut-oil.jpg',
      description: 'Natural groundnut oil with high smoke point, suitable for deep frying.'
    }
  ];

  return (
    <div className="product-page">
      {/* Hero Section */}
      <section className="product-hero">
        <h1 data-aos="fade-down">Our Premium Products</h1>
        <p data-aos="fade-up">
          Explore our range of high-quality edible oils and food products crafted with care and purity.
        </p>
      </section>

      {/* Product Grid */}
      <section className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id} data-aos="zoom-in">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Highlight Features */}
      <section className="product-highlight">
        <h2 data-aos="fade-up">Why Choose Our Products?</h2>
        <div className="features" data-aos="fade-up">
          <div>100% Natural Ingredients</div>
          <div>Lab Tested Purity</div>
          <div>Healthy and Hygienic</div>
          <div>Certified Manufacturing</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-cta">
        <h2 data-aos="fade-right">Want to Distribute Our Products?</h2>
        <p data-aos="fade-left">
          Join our growing network of partners and bring quality products to your customers.
        </p>
        <Link to="/contact" className="contact-btn" data-aos="zoom-in">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Products;
