import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import logo from "./assets/images/logo.png";
import footerlogo from "./assets/images/footer-logo.png";
import desktopheader from "./assets/images/desktop-header.png";
import mobileheader from "./assets/images/mobile-header.png";
import product1 from "./assets/images/product1.png";
import product2 from "./assets/images/product2.png";
import product3 from "./assets/images/product3.png";
import product4 from "./assets/images/product4.png";
import scent1 from "./assets/images/scent1.jpg";
import scent2 from "./assets/images/scent2.jpg";
import scent3 from "./assets/images/scent3.jpg";
import scent4 from "./assets/images/scent4.jpg";
import arrowbtn from "./assets/images/arrow-btn.png";
import aircare1 from "./assets/images/aircare1.jpg";
import aircare2 from "./assets/images/aircare2.png";
import aircare3 from "./assets/images/aircare3.png";
import air1 from "./assets/images/air1.png";
import air2 from "./assets/images/air2.png";
import air3 from "./assets/images/air3.png";
function App() {
  const scentRef = useRef(null);
  // fade in effect
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  // dropdown
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  {
    /*Our signature scents */
  }
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (scentRef.current && !scentRef.current.contains(e.target)) {
        setActiveCard(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [activeCard, setActiveCard] = useState(null);

  const scents = [
    {
      title: "Fresh Poplin",
      image: scent1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaqu sapiente esse enim voluptatem, voluptate obcaecati earum animi cupiditate recusandae odio iusto dolores repellat aperi similique! Reprehenderit expedita est hic laboriosam!",
    },
    {
      title: "Saffron Citrus",
      image: scent2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaqu sapiente esse enim voluptatem, voluptate obcaecati earum animi cupiditate recusandae odio iusto dolores repellat aperi similique! Reprehenderit expedita est hic laboriosam!",
    },
    {
      title: "Discovery Set",
      image: scent3,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaqu sapiente esse enim voluptatem, voluptate obcaecati earum animi cupiditate recusandae odio iusto dolores repellat aperi similique! Reprehenderit expedita est hic laboriosam!",
    },
    {
      title: "Fresh Linen",
      image: scent4,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaqu sapiente esse enim voluptatem, voluptate obcaecati earum animi cupiditate recusandae odio iusto dolores repellat aperi similique! Reprehenderit expedita est hic laboriosam!",
    },
  ];

  const toggleCard = (index) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };

  {
    /* Shop our products */
  }
  const products = [
    {
      title: "Discovery Set",
      subtitle: "Air & Fabric Spray",
      desc: "All four scents",
      price: "$39",
      badge: "SAVE 20%",
      image: product1,
    },
    {
      title: "Fresh Poplin",
      subtitle: "Air & Fabric Spray",
      desc: "Refreshing and grounded",
      price: "$22",
      badge: "SAVE 20%",
      image: product2,
    },
    {
      title: "Fresh Poplin",
      subtitle: "Air & Fabric Spray",
      desc: "Clean and airy",
      price: "$22",
      badge: "SAVE 20%",
      image: product3,
    },
    {
      title: "Saffron Citrus",
      subtitle: "Air & Fabric Spray",
      desc: "Bright and vibrant",
      price: "$22",
      badge: "SAVE 20%",
      image: product4,
    },
  ];
  const handleClick = (e) => {
    e.preventDefault();
  };
  const offerText = "Join our email list for 15% off";

  const offerItems = Array.from({ length: 12 }, () => offerText);
  return (
    <div>
      <header>
        <div className="email-offer">
          <div className="email-offer-track">
            {offerItems.map((text, index) => (
              <h4 key={index}>{text}</h4>
            ))}
          </div>
        </div>

        <div className={`navbar ${sticky ? "navbar-sticky" : ""}`}>
          <div className="navbar-container">
            <div className="navbar-left">
              <button
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Menu
              </button>
              <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>

            <div className="navbar-logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="navbar-right">
              <a href="#">Account</a>
              <a href="#">Cart (0)</a>
            </div>
          </div>
        </div>

        <div className="hero-header">
          <div className="hero-header-content">
            <div className="hero-heading">
              <h3>Free of toxins,</h3>
              <h4>full of pleasure.</h4>
            </div>

            <div className="hero-header-cta btn-anim btn-outline-anim">
              <a href="#" onClick={handleClick}>
                Add to cart $99
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="fade-section">
          <div className="hero">
            <div className="hero-container">
              <div className="hero-content">
                <div className="hero-subtitle">
                  <h4>
                    The new standard of aircare <span>TM</span>
                  </h4>
                </div>

                <div className="hero-title">
                  <h1 className="sm-title">
                    Realm exists to bring non-toxic fine fragrance into the
                    spaces you call home. Spray freely in rooms, on clothes &
                    bedding.
                  </h1>

                  <h1 className="lg-title">
                    Non-toxic fine fragrance that neutralizes odor and lingers
                    beautifully in air and on fabric.
                  </h1>
                </div>
              </div>

              <div className="hero-cta btn btn-anim btn-outline-anim">
                <a href="#" onClick={handleClick}>
                  Add to cart $99
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Shop our products */}
        <section className="section-padding fade-section left-padding ">
          <div className="shop-header">
            <h3>Shop our products</h3>
            <a href="#" onClick={handleClick}>
              Shop all
            </a>
          </div>
          <div className="shop-slider">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                320: { slidesPerView: 1.2 },
                430: { slidesPerView: 2.2 },
                1152: { slidesPerView: 3 },
                1600: { slidesPerView: 4 },
              }}
            >
              {products.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="product-card">
                    <div className="product-image">
                      <img src={item.image} alt={item.title} />

                      <div className="product-badge">
                        <a href="#">{item.badge}</a>
                      </div>
                    </div>

                    <div className="product-content">
                      <div className="product-heading">
                        <h4>{item.title}</h4>
                        <h5>{item.subtitle}</h5>
                      </div>

                      <div className="product-desc">
                        <p>{item.desc}</p>
                      </div>
                    </div>

                    <div className="product-cta btn btn-light-anim btn-dark-base">
                      <a href="#" onClick={handleClick}>
                        Add to cart {item.price}
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        {/*Our signature scents */}
        <section className="section-padding fade-section section-padding-x ">
          <div className="signature-header">
            <h4>Our signature scents</h4>
            <a href="#" onClick={handleClick}>
              Shop all
            </a>
          </div>

          <div className="scents-list" ref={scentRef}>
            {scents.map((item, index) => (
              <div className="scent-card" key={index}>
                <div className="scent-media">
                  <img src={item.image} alt={item.title} />

                  <div className="scent-overlay">
                    <h4>{item.title}</h4>
                    <div className="scent-btn">
                      <button onClick={() => toggleCard(index)}>
                        <span className="arrow-icon"></span>
                      </button>
                    </div>
                  </div>
                  {activeCard === index && (
                    <div className="scent-details">
                      <p>{item.desc}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* aircare */}
        <section className="aircare section-padding">
          <div className="aircare-container">
            <div className="aircare-content">
              <h4 className="aircare-title">
                The New Standard of Aircare<span>TM</span>
              </h4>

              <p className="aircare-desc">
                Air care has long meant overpowering scents and hidden,
                sometimes harmful ingredients. Realm offers something better.
              </p>

              <div className="aircare-cta btn btn-anim btn-outline-anim">
                <a href="#" onClick={handleClick}>
                  Add to cart $99
                </a>
              </div>
            </div>
            <div className="aircare-features">
              <hr className="aircare-border" />
              <div className="aircare-item">
                <div className="aircare-icon">
                  <img src={aircare1} alt="feature" />
                </div>

                <div className="aircare-item-content">
                  <h4>Fine Fragrance Meets Function</h4>
                  <p>
                    Patent-pending mineral technology eliminates odor at the
                    source, so fragrance can be refined instead of overpowering.
                  </p>
                </div>
              </div>
              <hr className="aircare-border" />
              <div className="aircare-item">
                <div className="aircare-icon">
                  <img src={aircare2} alt="feature" />
                </div>

                <div className="aircare-item-content">
                  <h4>Fine Fragrance Meets Function</h4>
                  <p>
                    Patent-pending mineral technology eliminates odor at the
                    source, so fragrance can be refined instead of overpowering.
                  </p>
                </div>
              </div>
              <hr className="aircare-border" />
              <div className="aircare-item">
                <div className="aircare-icon">
                  <img src={aircare3} alt="feature" />
                </div>

                <div className="aircare-item-content">
                  <h4>Fine Fragrance Meets Function</h4>
                  <p>
                    Patent-pending mineral technology eliminates odor at the
                    source, so fragrance can be refined instead of overpowering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* fresh-air */}
        <section className="section-padding fade-section section-padding-x">
          <div className="fresh-air-header">
            <h3>Fresh Air</h3>
            <h4>The Realm Blog</h4>
          </div>

          <div className="fresh-air-list">
            <div className="fresh-air-card">
              <div className="fresh-air-image">
                <img src={air1} alt="air1" />
              </div>

              <div className="fresh-air-content">
                <h5>Article Title</h5>
                <p>
                  Your home is your safe space. Our products are both safe and
                  effective, so you don't have to compromise.
                </p>
              </div>
            </div>

            <div className="fresh-air-card">
              <div className="fresh-air-image">
                <img src={air2} alt="air2" />
              </div>

              <div className="fresh-air-content">
                <h5>Article Title</h5>
                <p>
                  Your home is your safe space. Our products are both safe and
                  effective, so you don't have to compromise.
                </p>
              </div>
            </div>
            <div className="fresh-air-card">
              <div className="fresh-air-image">
                <img src={air3} alt="air3" />
              </div>

              <div className="fresh-air-content">
                <h5>Article Title</h5>
                <p>
                  Your home is your safe space. Our products are both safe and
                  effective, so you don't have to compromise.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* footer */}
      <footer className="footer fade-section">
        <hr className="aircare-border" />
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
              <div className="footer-btn btn btn-anim btn-outline-anim">
                <a href="#" onClick={handleClick}>
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
                <a href="#">The Discovery Collection</a>
                <a href="#">Explore our scents</a>
              </div>
              <div className="footer-col">
                <h5 className="footer-col-title">Social</h5>
                <a href="#">Instagram</a>
                <a href="#">Tiktok</a>
                <a href="#">@experiencetherealm</a>
              </div>
              <div className="footer-col">
                <h5 className="footer-col-title">About</h5>
                <a href="#">About us</a>
                <a href="#">FAQ</a>
              </div>
              <div className="footer-col">
                <h5 className="footer-col-title">More</h5>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Accessibility</a>
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
              <div className="footer-btn btn btn-anim btn-outline-anim">
                <a href="#" onClick={handleClick}>
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
