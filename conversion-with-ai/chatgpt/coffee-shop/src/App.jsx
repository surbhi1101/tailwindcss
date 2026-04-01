import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./assets/css/App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-container">
          <h1 className="logo">Brew & Co</h1>
          <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
            <a href="#">Home</a>
            <a href="#">Menu</a>
            <a href="#">About</a>
            <a href="#">Gallery</a>
            <a href="#">Contact</a>
            <button className="btn-primary">Order Now</button>
          </nav>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-section fade-section">
        <div className="hero-content">
          <h2 className="hero-title">Every Sip Tells a Story</h2>
          <p className="hero-subtitle">Freshly brewed coffee made with love</p>
          <div className="hero-actions">
            <button className="btn-primary">Explore Menu</button>
            <button className="btn-outline">Our Story</button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about-section fade-section">
        <div className="about-container">
          <img
            src="https://picsum.photos/600/400"
            alt="coffee"
            className="about-image"
          />
          <div className="about-content">
            <h2 className="section-heading">About Us</h2>
            <p className="about-text">
              We craft the finest coffee experience with passion and quality.
            </p>
            <div className="about-stats">
              <div>
                <h3>10+</h3>
                <p>Years</p>
              </div>
              <div>
                <h3>500K+</h3>
                <p>Cups</p>
              </div>
              <div>
                <h3>20+</h3>
                <p>Locations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="menu-section fade-section">
        <h2 className="section-heading">Our Menu</h2>
        <div className="menu-grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div className="menu-card" key={item}>
              <img src={`https://picsum.photos/300/200?${item}`} alt="coffee" />
              <h3>Espresso</h3>
              <p>Rich and bold flavor</p>
              <span>$5</span>
              <button className="btn-primary">Order Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section fade-section">
        <h2 className="section-heading">Why Choose Us</h2>
        <div className="why-grid">
          {[
            "Fresh Ingredients",
            "Expert Baristas",
            "Cozy Atmosphere",
            "Fast Service",
          ].map((item) => (
            <div className="why-card" key={item}>
              <h3>{item}</h3>
              <p>Top quality service and experience.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section fade-section">
        <h2 className="section-heading">Gallery</h2>
        <div className="gallery-grid">
          {[1, 2, 3, 4, 5, 6].map((img) => (
            <img
              key={img}
              src={`https://picsum.photos/300/300?g=${img}`}
              alt="gallery"
            />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section fade-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="section-heading">Contact Us</h2>
            <p>Rajkot, India</p>
            <p>+91 9876543210</p>
            <p>brew@coffee.com</p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button className="btn-primary">Submit</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Brew & Co</p>
      </footer>
    </>
  );
}

export default App;
