import { useState, useEffect } from "react";
import "./assets/css/app.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import logo from "./assets/images/logo.png";
import air1 from "./assets/images/air1.png";
import air2 from "./assets/images/air2.png";
import air3 from "./assets/images/air3.png";
import product1 from "./assets/images/product1.png";
import product2 from "./assets/images/product2.png";
import product3 from "./assets/images/product3.png";
import product4 from "./assets/images/product4.png";
import scent1 from "./assets/images/scent1.jpg";
import scent2 from "./assets/images/scent2.jpg";
import scent3 from "./assets/images/scent3.jpg";
import scent4 from "./assets/images/scent4.jpg";

import aircare1 from "./assets/images/aircare1.jpg";
import aircare2 from "./assets/images/aircare2.png";
import aircare3 from "./assets/images/aircare3.png";
import footerlogo from "./assets/images/footer-logo.png";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openScent, setOpenScent] = useState(null);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  // Fade-in effect
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
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // product data
  const productdata = [
    {
      id: 1,
      title: "Discovery Set",
      subtitle: "Air & Fabric Spray",
      description: "All four scents",
      price: 39,
      badge: "Save 20%",
      image: product1,
    },
    {
      id: 2,
      title: "Luxury Candle",
      subtitle: "Vanilla & Amber",
      description: "Long-lasting fragrance",
      price: 49,
      badge: "Save 20%",
      image: product2,
    },
    {
      id: 3,
      title: "Room Mist",
      subtitle: "Lavender & Jasmine",
      description: "Freshen your room instantly",
      price: 29,
      badge: "Save 20%",
      image: product3,
    },
    {
      id: 4,
      title: "Car Freshener",
      subtitle: "Ocean Breeze",
      description: "Portable and long-lasting",
      price: 19,
      badge: "Save 20%",
      image: product4,
    },
  ];

  {
    /* Our signature scents */
  }
  const signatureScentsData = [
    {
      id: 1,
      title: "Saffron Citrus",
      image: scent1,
      detailsLink: "/scents/saffron-citrus",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus mollitia aliquam sequi incidunt, rerum iure fugit? Repudiandae consequuntur animi quaerat adipisci minima! Aliquam in aut veniam commodi ratione expedita sequi!Saepe nostrum magnam facilis numquam quia minus omnis hic non asperiores dolore obcaecati, libero magni, cupiditate repellendus dolorem voluptatum ipsum ratione reprehenderit temporibus maiores? Culpa accusamus perspiciatis asperiores ad harum.",
    },
    {
      id: 2,
      title: "Verbena Santal",
      image: scent2,
      detailsLink: "/scents/lavender-jasmine",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus mollitia aliquam sequi incidunt, rerum iure fugit? Repudiandae consequuntur animi quaerat adipisci minima! Aliquam in aut veniam commodi ratione expedita sequi!Saepe nostrum magnam facilis numquam quia minus omnis hic non asperiores dolore obcaecati, libero magni, cupiditate repellendus dolorem voluptatum ipsum ratione reprehenderit temporibus maiores? Culpa accusamus perspiciatis asperiores ad harum.",
    },
    {
      id: 3,
      title: "Lavender Bergamont",
      image: scent3,
      detailsLink: "/scents/vanilla-amber",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus mollitia aliquam sequi incidunt, rerum iure fugit? Repudiandae consequuntur animi quaerat adipisci minima! Aliquam in aut veniam commodi ratione expedita sequi!Saepe nostrum magnam facilis numquam quia minus omnis hic non asperiores dolore obcaecati, libero magni, cupiditate repellendus dolorem voluptatum ipsum ratione reprehenderit temporibus maiores? Culpa accusamus perspiciatis asperiores ad harum.",
    },
    {
      id: 4,
      title: "Fresh Poplin",
      image: scent4,
      detailsLink: "/scents/ocean-breeze",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus mollitia aliquam sequi incidunt, rerum iure fugit? Repudiandae consequuntur animi quaerat adipisci minima! Aliquam in aut veniam commodi ratione expedita sequi!Saepe nostrum magnam facilis numquam quia minus omnis hic non asperiores dolore obcaecati, libero magni, cupiditate repellendus dolorem voluptatum ipsum ratione reprehenderit temporibus maiores? Culpa accusamus perspiciatis asperiores ad harum.",
    },
  ];

  const blogData = [
    {
      id: 1,
      image: air1,
      title: "Clean air, better living",
      description:
        "Your home is your safe space. Our products are both safe and effective.",
    },
    {
      id: 2,
      image: air2,
      title: "Why air quality matters",
      description:
        "Improve your environment with non-toxic fragrance solutions.",
    },
    {
      id: 3,
      image: air3,
      title: "Scent and wellbeing",
      description: "Discover how scent impacts mood and everyday comfort.",
    },
  ];
  const noNav = (e) => e.preventDefault();
  return (
    <div>
      <div className="hero-loop-sentence ">
        <p className="hero-loop-sentence-text">
          Join our email list for 15% off
        </p>
      </div>
      <nav
        className={`navbar navbar-mobile-bg ${isNavbarScrolled ? "navbar-scrolled" : ""}`}
      >
        <div className="navbar-left-mobile">
          <div className="relative">
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
              Menu
            </div>

            {menuOpen && (
              <div className="menu-items show">
                <a
                  className="interactive-link interactive-link-light"
                  href="javascript:void(0)"
                >
                  Shop
                </a>
                <a
                  className=" interactive-link interactive-link-light"
                  href="javascript:void(0)"
                >
                  About
                </a>
                <a
                  className=" interactive-link interactive-link-light"
                  href="javascript:void(0)"
                >
                  FAQ
                </a>
              </div>
            )}
          </div>

          <div className="cart">
            <span>Cart(0)</span>
          </div>
        </div>

        <div className="desktop-nav">
          <div className="navbar-left-desktop">
            <a
              className=" interactive-link interactive-link-cream"
              href="javascript:void(0)"
            >
              Shop
            </a>
            <a
              className="interactive-link interactive-link-cream"
              href="javascript:void(0)"
            >
              About
            </a>
            <a
              className="interactive-link interactive-link-cream"
              href="javascript:void(0)"
            >
              FAQ
            </a>
          </div>
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="navbar-right">
            <a
              className=" interactive-link interactive-link-cream"
              href="javascript:void(0)"
            >
              Account
            </a>
            <a
              className="interactive-link interactive-link-cream"
              href="javascript:void(0)"
            >
              Cart(0)
            </a>
          </div>
        </div>
      </nav>
      <header>
        <section className="hero fade-section">
          <div className="hero-content-left">
            <div>
              <h3>Free of toxins,</h3>
              <h4>full of pleasure.</h4>
            </div>
            <div className="hero-cta-wrapper ">
              <a
                className="interactive-link interactive-link-light"
                href="javascript:void(0)"
              >
                Add to cart $99
              </a>
            </div>
          </div>
        </section>
      </header>
      <main>
        {/* Hero Section */}
        <section className="hero-section section-spacing  fade-section">
          <div className="hero-content">
            <div className="hero-text">
              The new standard of aircare
              <span className="hero-text-span">TM</span>
            </div>

            <div className="hero-heading">
              <h2>
                Non-toxic fine fragrance that neutralizes odor and lingers
                beautifully in air and on fabric.
              </h2>
            </div>

            <a
              className="hero-cta interactive-link interactive-link-dark"
              href="javascript:void(0)"
            >
              Add to cart $99
            </a>
          </div>
        </section>
        {/* Shop our products */}
        <section className="section-content section-spacing section-padding fade-section">
          <div className="product-title ">
            <h4>Shop our products</h4>
            <a href="javascript:void(0)">Shop all</a>
          </div>

          <Swiper
            spaceBetween={16}
            breakpoints={{
              320: { slidesPerView: 2.1, spaceBetween: 12 },
              768: { slidesPerView: 3.1, spaceBetween: 16 },
              1152: { slidesPerView: 3.5, spaceBetween: 18 },
              1440: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="product-swiper"
            navigation
          >
            {productdata.map((product, i) => (
              <SwiperSlide key={i}>
                <div className="product-card">
                  {product.badge && (
                    <div className="product-badge">{product.badge}</div>
                  )}
                  <div className="product-img">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="product-info">
                    <h4>{product.title}</h4>
                    <h5>{product.subtitle}</h5>
                    <p>{product.description}</p>

                    <a
                      className=" interactive-link interactive-link-darkbg price-link"
                      href="javascript:void(0)"
                    >
                      Add to cart ${product.price}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        {/* Our signature scents */}
        <section className="section-content section-spacing  section-padding fade-section">
          <div className="product-title">
            <h4>Our signature scents</h4>
            <a href="javascript:void(0)">Shop all</a>
          </div>

          <div className="signature-cards-wrapper">
            {signatureScentsData.map((scent) => (
              <div key={scent.id} className="signature-card">
                <div className="signature-card-img">
                  <img src={scent.image} alt={scent.title} />
                  <div className="signature-card-details">
                    <div className="signature-card-title">
                      <h4>{scent.title}</h4>
                    </div>
                    <a
                      href="#"
                      className="link-motion arrow-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenScent(openScent === scent.id ? null : scent.id);
                      }}
                    >
                      <span className="arrow-icon"></span>
                    </a>
                  </div>

                  {/* Paragraph — shows only when this card is open */}
                  {openScent === scent.id && (
                    <div className="scent-desc">
                      <p>{scent.details}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Aircare */}
        <section className="section-content section-spacing  section-padding fade-section">
          <div className="aircare-wrapper">
            {/* Left Content */}
            <div className="aircare-content">
              <div className="aircare-text">
                <h3>
                  The New Standard of Aircare
                  <span className="aircare-tm">TM</span>
                </h3>

                <p>
                  Air care has long meant overpowering scents and hidden,
                  sometimes harmful ingredients. Realm offers something better.
                </p>

                <a
                  href="javascript:void(0)"
                  className="hero-cta interactive-link interactive-link-dark"
                >
                  Add to cart $99
                </a>
              </div>
            </div>
            {/* Features Grid */}
            <div className="aircare-features">
              <div className="aircare-feature">
                <img src={aircare1} alt="Feature" />

                <div className="aircare-details">
                  <h4>Fine Fragrance Meets Function</h4>
                  <p>
                    Patent-pending mineral technology eliminates odor at the
                    source, so fragrance can be refined instead of overpowering.
                  </p>
                </div>
              </div>
              <hr className="aircare-hr" />
              <div className="aircare-feature">
                <img src={aircare2} alt="Feature" />

                <div className="aircare-details">
                  <h4>Non-Toxic Formula</h4>
                  <p>
                    Made without harmful chemicals, safe for everyday use around
                    your home and fabrics.
                  </p>
                </div>
              </div>
              <hr className="aircare-hr" />
              <div className="aircare-feature">
                <img src={aircare3} alt="Feature" />

                <div className="aircare-details">
                  <h4>Long Lasting</h4>
                  <p>
                    Designed to linger subtly, giving your space a clean and
                    elegant scent.
                  </p>
                </div>
              </div>
              <hr className="aircare-hr" />
            </div>
          </div>
        </section>
        {/* Fresh Air*/}
        <section className="section-content section-padding section-spacing fade-section">
          <div className="section-title">
            <h4>Fresh Air</h4>
            <h5>The Realm Blog</h5>
          </div>

          <div className="cards-wrapper">
            {blogData.map((item) => (
              <div key={item.id} className="card">
                <div className="card-media">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="card-content">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      {/* footer */}
      <footer className="section-content section-padding section-spacing  fade-section">
        <hr className="footer-hr " />
        <div className="footer-container ">
          <div className="footer-top">
            <div className="footer-logo">
              <img src={footerlogo} alt="footer-logo" />
            </div>
            <div className=" mobile-newsletter">
              <div className="footer-newsletter-content">
                <h4>Join the air care movement.</h4>
                <input type="email" placeholder="Email address" />
              </div>
              <div className="footer-btn">
                <a
                  className="link-motion hero-cta interactive-link interactive-link-dark"
                  href="javascript:void(0)"
                >
                  Add to cart $99
                </a>
              </div>
              <h5 className="footer-note">
                Thoughtful emails, sent sparingly.
              </h5>
            </div>
            {/* LINKS */}
            <div className="footer-links">
              <div className="footer-col">
                <h5 className="footer-col-title">Shop</h5>
                <a className="link-motion" href="javascript:void(0)">
                  The Discovery Collection
                </a>
                <a className="link-motion" href="javascript:void(0)">
                  Explore our scents
                </a>
              </div>
              <div className="footer-col">
                <h5 className="footer-col-title">Social</h5>
                <a className="link-motion" href="javascript:void(0)">
                  Instagram
                </a>
                <a className="link-motion" href="javascript:void(0)">
                  Tiktok
                </a>
                <a className="link-motion" href="javascript:void(0)">
                  @experiencetherealm
                </a>
              </div>
              <div className="footer-col">
                <h5 className="footer-col-title">About</h5>
                <a className="link-motion" href="javascript:void(0)">
                  About us
                </a>
                <a className="link-motion" href="javascript:void(0)">
                  FAQ
                </a>
              </div>
              <div className="footer-col">
                <h5 className="footer-col-title">More</h5>
                <a className="link-motion" href="javascript:void(0)">
                  Terms & Conditions
                </a>
                <a className="link-motion" href="javascript:void(0)">
                  Privacy Policy
                </a>
                <a className="link-motion" href="javascript:void(0)">
                  Accessibility
                </a>
              </div>
            </div>

            <div className="footer-copy mobile-copyrights">
              <p>Copyright © 2026 Realm's Naturals Co. All Rights Reserved.</p>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-newsletter desktop-newsletter">
              <div className="footer-newsletter-content">
                <h4>Join the air care movement.</h4>
                <input type="email" placeholder="Email address" />
              </div>
              <div className="footer-btn">
                <a
                  className="link-motion hero-cta interactive-link interactive-link-dark"
                  href="javascript:void(0)"
                >
                  Add to cart $99
                </a>
              </div>

              <h5 className="footer-note">
                Thoughtful emails, sent sparingly.
              </h5>
            </div>

            <div className="footer-copy desktop-copyrights">
              <p>Copyright © 2026 Realm's Naturals Co. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
