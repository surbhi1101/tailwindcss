import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "./assets/css/app.css";
import herovideo from "./assets/images/MAR_Hero.mp4";
import logo from "./assets/images/logo.png";
import dropdown from "./assets/images/dropdown.svg";
import menuinner from "./assets/images/bg-menuinner.png";
import story_img from "./assets/images/story-img.png";
import stay1 from "./assets/images/stay1.jpg";
import stay2 from "./assets/images/stay2.jpg";
import stay3 from "./assets/images/stay3.jpg";
import stay4 from "./assets/images/stay4.jpg";
import spa1 from "./assets/images/spa1.png";
import spavideo from "./assets/images/spa-video.mp4";
import best1 from "./assets/images/best1.jpg";
import best2 from "./assets/images/best2.jpg";
import best3 from "./assets/images/best3.png";
import best4 from "./assets/images/best4.png";
import offervideo from "./assets/images/offer-video.mp4";
import itineraries from "./assets/images/itineraries.jpg";
import offer1 from "./assets/images/offer1.jpg";
import lateststory1 from "./assets/images/lateststory1.jpg";
import lateststory2 from "./assets/images/lateststory2.jpg";
import lateststory3 from "./assets/images/lateststory3.jpg";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const mobilePrevRef = useRef(null);
  const mobileNextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="site-wrapper">
      {/* ───── MOBILE MENU OVERLAY ───── */}
      <div className={`mobile-menu-overlay ${menuOpen ? "menu-open" : ""}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-close">
            <button onClick={() => setMenuOpen(false)} className="close-btn">
              <span>✕</span>
              <span>CLOSE</span>
            </button>
          </div>
          <div className="mobile-submenu">
            <nav className="mobile-nav">
              <a href="#stay">STAY</a>
              <a href="#spa">SPA</a>
              <a href="#eat">EAT</a>
              <a href="#experience">EXPERIENCE</a>
              <a href="#shop">SHOP</a>
            </nav>

            <nav className="mobile-nav-secondary">
              <a href="#offers">EXCLUSIVE OFFERS</a>
              <a href="#itineraries">ITINERARIES</a>
              <a href="#story">OUR STORY</a>
              <a href="#location">LOCATION</a>
              <a href="#gallery">GALLERY</a>
              <a href="#blogs">BLOGS</a>
              <a href="#contact">CONTACT US</a>
            </nav>

            <div className="mobile-menu-cta">
              <a href="#book" className="mobile-book-btn">
                BOOK NOW
              </a>
            </div>
          </div>
          <div className="mobile-menu-footer">
            <p>T: +27 (0) 21 437 1287 &nbsp;|&nbsp; E: STAY@THEMARLY.CO.ZA</p>

            <p className="mobile-menu-details">
              201 The Promenade, 75 Victoria Rd, Camps Bay, Cape Town, 8005
            </p>
            <div className="mobile-social">
              <a href="#fb" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#yt" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon
                    points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="mobile-menu-watermark">
            <img src={menuinner} alt="menuinner" />
          </div>
        </div>
      </div>
      {/* ───── HERO SECTION ───── */}
      <section className="hero-section">
        {/* Background Image */}
        <div className="hero-bg">
          <video src={herovideo} autoPlay muted loop playsInline />
        </div>

        {/* ───── NAVBAR ───── */}
        <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
          <div className="navbar-inner">
            {/* LEFT — lg+: hamburger + MENU + nav links */}
            <div className="navbar-left">
              <div className="navbar-sub">
                <button
                  className="hamburger-btn"
                  onClick={() => setMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <img src={dropdown} alt="menu" />
                </button>
                <a href="#menu" className="navbar-menu-text">
                  MENU
                </a>
              </div>
              <nav className="navbar-links">
                <a href="#stay">STAY</a>
                <a href="#spa">SPA</a>
                <a href="#eat">EAT</a>
                <a href="#experience">EXPERIENCE</a>
              </nav>
            </div>

            {/* CENTER — Logo always visible */}
            <div className="navbar-logo">
              <img src={logo} alt="logo" />
            </div>

            {/* RIGHT — lg+: BOOK NOW | below lg: hamburger only */}
            <div className="navbar-right">
              <button
                className="mobile-hamburger-btn"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <img src={dropdown} alt="menu" />
              </button>
              <a href="#book" className="nav-book-btn">
                BOOK NOW
              </a>
            </div>
          </div>
        </header>

        {/* ───── HERO BOTTOM PANEL ───── */}
        <div className="hero-bottom">
          {/* Info Box (desktop only) */}
          <div className="hero-info-box">
            <p>When booking directly on The Marly Website you will receive:</p>
            <ul>
              <li>The lowest rate possible for your stay</li>
              <li>The most flexible cancellation terms</li>
              <li>
                Access to our dedicated reservations specialists to help with
                your booking
              </li>
              <li>Access to the best service throughout your stay</li>
            </ul>
          </div>

          {/* Booking Form Bar */}
          <div className="booking-bar">
            <a href="#guarantee" className="guarantee-link">
              Best price guaranteed
            </a>
            <div className="sub-booking">
              <div className="booking-field">
                <input type="date" className="booking-input" />
                <div className="booking-label">ARRIVAL DATE</div>
                <span className="booking-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
              </div>

              <div className="booking-field">
                <input type="date" className="booking-input" />
                <div className="booking-label">DEPARTURE DATE</div>
                <span className="booking-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
              </div>

              <div className="booking-field booking-counter-field">
                <div className="booking-label">ADULTS (16YRS +)</div>
                <div className="booking-counter">
                  <button
                    onClick={() => setAdults(Math.max(0, adults - 1))}
                    className="counter-btn"
                  >
                    −
                  </button>
                  <span className="counter-val">{adults}</span>
                  <button
                    onClick={() => setAdults(adults + 1)}
                    className="counter-btn"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="booking-field booking-counter-field">
                <div className="booking-label">CHILDREN</div>
                <div className="booking-counter">
                  <button
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="counter-btn"
                  >
                    −
                  </button>
                  <span className="counter-val">{children}</span>
                  <button
                    onClick={() => setChildren(children + 1)}
                    className="counter-btn"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="booking-submit-wrap">
                <a href="#rooms" className="booking-submit-btn">
                  VIEW ROOMS &amp; PRICES
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ───── OUR STORY SECTION ───── */}
      <section className="story-section">
        <div className="story-container">
          {/* Left Content */}
          <div className="story-content">
            <div className="story-left">
              <div className="story-label">
                <span className="story-dot">●</span>
                <span>OUR STORY</span>
              </div>
              <div className="story-heading">
                <h2>LIFE IS SWEETER AT THE MARLY</h2>
              </div>
              <div className="story-body">
                <p>
                  Named after the 17th-century "Château de Marly," a symbol of
                  leisure for Louis XIV and his family. The Marly Boutique Hotel
                  & Spa brings the same spirit of luxury and playful
                  sophistication to modern-day Cape Town. There's simply no
                  reason to leave.
                </p>
              </div>
            </div>
            <div className="story-actions">
              <a href="#about" className="story-btn">
                READ ABOUT US
              </a>
              <a href="#location" className="location-btn">
                DISCOVER OUR LOCATION
              </a>
            </div>
          </div>
          {/* Right Image */}
          <div className="story-image">
            <img src={story_img} alt="The Marly" />
          </div>
        </div>
        <hr className="story-divider" />{" "}
      </section>
      {/* ───── OUR STAY SECTION ───── */}
      <section className="stay-section">
        <div className="stay-header">
          <div className="story-label">
            <span className="story-dot">●</span>
            <span>OUR STAY</span>
          </div>
          <div className="stay-title-row">
            <div className="story-heading">
              <h2>URBAN HIDEAWAY STAY</h2>
            </div>
            <div className="stay-nav">
              <button className="stay-nav-btn" id="stay-prev">
                ←
              </button>
              <button className="stay-nav-btn" id="stay-next">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Mobile VIEW ALL ROOMS button */}
        <div className="stay-mobile-cta">
          <a href="#rooms" className="stay-mobile-view-btn">
            VIEW ALL ROOMS
          </a>
        </div>

        {/* Desktop grid swiper */}
        <div className="stay-desktop">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            slidesPerView={1}
            className="stay-swiper"
          >
            {[1, 2].map((slide) => (
              <SwiperSlide key={slide}>
                <div className="stay-grid">
                  <div className="stay-img-large stay-img-item">
                    <img src={stay1} alt="Superior Sea Facing Room" />
                    <div className="stay-img-info">
                      <p className="stay-room-name">SUPERIOR SEA FACING ROOM</p>
                      <p className="stay-room-meta">
                        54sqm | Max 2 Guests | Sea View
                      </p>
                    </div>
                  </div>
                  <div className="stay-right-grid">
                    <div className="stay-img-item stay-img-sm">
                      <img src={stay2} alt="Classic Sea Facing Room" />
                      <div className="stay-img-info">
                        <p className="stay-room-name">
                          CLASSIC SEA FACING ROOM
                        </p>
                        <p className="stay-room-meta">
                          54sqm | Max 2 Guests | Sea View
                        </p>
                      </div>
                    </div>
                    <div className="stay-view-card">
                      <p className="stay-view-desc">
                        Excepteur efficient emerging, minim veniam anim aute
                        carefully curated Ginza conversation.
                      </p>
                      <a href="#rooms" className="stay-view-btn">
                        VIEW ALL ROOMS
                      </a>
                    </div>
                    <div className="stay-img-item stay-img-sm">
                      <img src={stay3} alt="Junior Sea Facing Room" />
                      <div className="stay-img-info">
                        <p className="stay-room-name">JUNIOR SEA FACING ROOM</p>
                        <p className="stay-room-meta">
                          45sqm | Max 2 Guests | Sea View
                        </p>
                      </div>
                    </div>
                    <div className="stay-img-item stay-img-sm">
                      <img src={stay4} alt="Deluxe Two Bedroom Suite" />
                      <div className="stay-img-info">
                        <p className="stay-room-name">
                          DELUXE TWO BEDROOM SUITE
                        </p>
                        <p className="stay-room-meta">
                          60sqm | Max 4 Guests | Mountain View
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile horizontal swiper */}
        <div className="stay-mobile">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            slidesPerView={1.15}
            spaceBetween={12}
            navigation={{
              prevEl: ".stay-mobile-prev",
              nextEl: ".stay-mobile-next",
            }}
            onSlideChange={(swiper) => {
              const total = swiper.slides.length;
              const current = swiper.realIndex;
              const bar = document.querySelector(".stay-progress-fill");
              if (bar) bar.style.width = `${((current + 1) / total) * 100}%`;
            }}
            className="stay-mobile-swiper"
          >
            {[
              {
                img: stay1,
                name: "SUPERIOR SEA FACING ROOM",
                meta: "54sqm | Max 2 Guests | Sea View",
              },
              {
                img: stay2,
                name: "CLASSIC SEA FACING ROOM",
                meta: "54sqm | Max 2 Guests | Sea View",
              },
              {
                img: stay3,
                name: "JUNIOR SEA FACING ROOM",
                meta: "45sqm | Max 2 Guests | Sea View",
              },
              {
                img: stay4,
                name: "DELUXE TWO BEDROOM SUITE",
                meta: "60sqm | Max 4 Guests | Mountain View",
              },
            ].map((room, i) => (
              <SwiperSlide key={i}>
                <div className="stay-mobile-slide">
                  <div className="stay-mobile-img">
                    <img src={room.img} alt={room.name} />
                  </div>
                  <div className="stay-mobile-info">
                    <div className="stay-mobile-text">
                      <p className="stay-room-name">{room.name}</p>
                      <p className="stay-room-meta">{room.meta}</p>
                    </div>
                    <button className="stay-mobile-next stay-circle-btn">
                      →
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Progress bar */}
          <div className="stay-progress-bar">
            <div className="stay-progress-fill" />
          </div>
        </div>
      </section>
      {/* ───── OUR SPA SECTION ───── */}
      <section className="spa-section">
        {/* Left sticky image */}
        <div className="spa-left">
          <div className="spa-left-img">
            <img src={spa1} alt="The Marly Spa" />
          </div>
        </div>

        {/* Right scrollable content */}
        <div className="spa-right">
          <div className="spa-right-inner">
            {/* Two small images */}
            <div className="spa-img-row">
              <div className="spa-img-sm">
                <video src={spavideo} autoPlay muted loop playsInline />
              </div>
            </div>

            {/* Text content */}
            <div className="spa-content">
              <div className="spa-label">
                <span className="story-dot">●</span>
                <span>OUR SPA</span>
              </div>
              <div className="spa-heading">
                <h2>BASK IN LUXURY AT THE MARLY SPA</h2>
              </div>
              <div className="spa-body">
                <p>
                  Step inside a world of calm at The Marly Spa with a selection
                  of artisanal massages and beauty therapies to choose from.
                </p>
              </div>
              <a href="#spa" className="spa-btn">
                VISIT OUR SPA
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ───── BEST OF THE MARLY SECTION ───── */}
      <section className="best-section">
        {/* Header */}
        <div className="best-header">
          <div className="best-label">
            <span className="story-dot">●</span>
            <span>EXPLORE MORE</span>
          </div>
          <div className="best-heading">
            <h2>THE BEST OF THE MARLY</h2>
          </div>
        </div>

        {/* Tabs + View All */}
        <div className="best-controls">
          <div className="best-tabs">
            <button className="best-tab best-tab-active">EAT</button>
            <button className="best-tab">EXPERIENCE</button>
            <button className="best-tab">SHOP</button>
          </div>
          <a href="#all" className="best-view-all">
            VIEW ALL
          </a>
        </div>

        {/* Swiper */}
        <div className="best-swiper-wrap">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            initialSlide={0}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={14}
            className="best-swiper"
          >
            {[
              {
                img: best2,
                label: "",
              },
              {
                img: best3,
                label: "",
              },
              {
                img: best4,
                label: "",
              },
              {
                img: best1,
                label: "THE BUNGALOW",
              },
            ].map((item, i) => (
              <SwiperSlide key={i} className="best-slide">
                <div className="best-slide-inner">
                  <img src={item.img} alt={item.label || `slide ${i}`} />
                  {item.label && (
                    <div className="best-slide-label">
                      <span>{item.label}</span>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <hr className="story-divider" />
      </section>
      {/* ───── BESPOKE OFFERS SECTION ───── */}
      <section className="offers-section">
        {/* Left static content */}
        <div className="offers-left">
          <div className="offers-label">
            <span className="story-dot">●</span>
            <span>OUR OFFERS</span>
          </div>
          <div className="offers-heading">
            <h2>BESPOKE SPECIAL OFFERS</h2>
          </div>
          <div className="offers-sub">
            <p>SPA PACKAGES AT THE MARLY SPA</p>
          </div>
          <div className="offers-body">
            <p>
              Kove Collection's five-star spa in Camps Bay at The Marly Hotel
              presents new spa packages perfect for relaxing and unwinding this
              season.
            </p>
          </div>
          <a href="#offers" className="offers-btn">
            EXPLORE OFFER
          </a>
        </div>

        {/* Right image swiper */}
        <div className="offers-right">
          <div className="offers-swiper-wrap">
            <Swiper
              modules={[Navigation]}
              loop={true}
              slidesPerView={1}
              navigation={{
                prevEl: ".offers-prev",
                nextEl: ".offers-next",
              }}
              className="offers-swiper"
            >
              {[offer1, offer1].map((src, i) => (
                <SwiperSlide key={i}>
                  <div className="offers-slide-img">
                    <img src={src} alt={`offer ${i + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation arrows — bottom right of image */}
            <div className="offers-nav">
              <button className="offers-prev offers-nav-btn">←</button>
              <button className="offers-next offers-nav-btn">→</button>
            </div>
          </div>
        </div>
      </section>
      {/* ───── TESTIMONIAL SECTION ───── */}
      <section className="testimonial-section">
        <video
          src={offervideo}
          autoPlay
          muted
          loop
          playsInline
          className="testimonial-video"
        />
        <div className="testimonial-overlay" />
        <div className="testimonial-content">
          <div className="testimonial-quote">
            <p>
              "What a treat to find a place like The Marly. The most special
              thing (beyond the very high quality of the property and the
              restaurants) is the staff - such amazing treatment every moment of
              our stay."
            </p>
          </div>
          <div className="testimonial-divider" />
          <div className="testimonial-author">
            <span>Ilene M - Tripadvisor</span>
          </div>
        </div>
      </section>

      {/* ───── ITINERARIES SECTION ───── */}
      <section className="itineraries-section">
        <div className="itineraries-sub">
          <div className="itineraries-overlay">
            <img src={itineraries} alt="itineraries" />
          </div>
          <div className="itineraries-color-overlay" />
          <div className="itineraries-content">
            <div className="itineraries-label">
              <span className="story-dot">●</span>
              <span>OUR ITINERARIES</span>
            </div>
            <div className="itineraries-heading">
              <h2>LUXURY ITINERARIES ACROSS AFRICA FEATURING THE MARLY</h2>
            </div>
            <a href="#itineraries" className="itineraries-btn">
              DISCOVER ITINERARIES
            </a>
          </div>
        </div>
      </section>
      {/* ───── BLOGS SECTION ───── */}
      <section className="blogs-section">
        {/* Header */}
        <div className="blogs-header">
          <div className="blogs-label">
            <span className="story-dot">●</span>
            <span>OUR BLOGS</span>
          </div>
          <div className="blogs-heading">
            <h2>LATEST STORIES</h2>
          </div>
        </div>

        {/* Grid */}
        <div className="blogs-grid">
          {/* Featured large card — left on desktop */}
          <div className="blog-featured-card">
            <img src={lateststory1} alt="Featured blog" />
            <div className="blog-featured-overlay" />
            <div className="blog-featured-content">
              <div className="blog-featured-title">
                <h3>FEATURED BLOG TITLE HERE</h3>
              </div>
              <div className="blog-featured-body">
                <p>
                  Our luxury hotel is nestled on the shores of the vibrant Azure
                  Bay. The Coral Vista boasts five-star accommodations and is
                  home to three world-class restaurants, each offering a unique
                  culinary journey.
                </p>
              </div>
              <a href="#blog" className="blog-featured-btn">
                READ MORE
              </a>
            </div>
          </div>

          {/* Right side — small cards */}
          {/* Right side */}
          <div className="blogs-right">
            {/* Desktop: single card bottom-aligned */}
            <div className="blog-card blog-card-featured">
              <div className="blog-card-text">
                <div className="blog-card-title">
                  <h4>BLOG TITLE GOES HERE</h4>
                </div>
                <div className="blog-card-category">
                  <span className="story-dot">●</span>
                  <span>CATEGORY</span>
                </div>
              </div>
              <div className="blog-card-img">
                <img src={lateststory2} alt="blog" />
              </div>
            </div>

            {/* Mobile: 2 cards side by side */}
            <div className="blogs-mobile-grid">
              {[
                {
                  img: lateststory2,
                  title: "SMALLER BLOG TITLE GOES HERE",
                  category: "CATEGORY",
                },
                {
                  img: lateststory3,
                  title: "SMALLER BLOG TITLE GOES HERE",
                  category: "CATEGORY",
                },
              ].map((post, i) => (
                <div key={i} className="blog-mobile-card">
                  <div className="blog-mobile-card-text">
                    <div className="blog-card-title">
                      <h4>{post.title}</h4>
                    </div>
                    <div className="blog-card-category">
                      <span className="story-dot">●</span>
                      <span>{post.category}</span>
                    </div>
                  </div>
                  <div className="blog-mobile-card-img">
                    <img src={post.img} alt={post.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View all — mobile only */}
        <div className="blogs-view-all-wrap">
          <a href="#blogs" className="blogs-view-all-btn">
            VIEW ALL
          </a>
        </div>
      </section>
      {/* ───── FOOTER ───── */}
      <footer className="footer">
        {/* ── Part 1: Links Grid ── */}
        <div className="footer-top">
          {/* Logo col */}
          <div className="footer-logo-col">
            <div className="footer-logo">
              <span className="footer-logo-the">THE</span>
              <span className="footer-logo-marly">Marly</span>
              <span className="footer-logo-sub">BOUTIQUE HOTEL & SPA</span>
            </div>
            <div className="footer-address">
              <p>201 The Promenade,</p>
              <p>75 Victoria Rd,</p>
              <p>Camps Bay,</p>
              <p>Cape Town,</p>
              <p>8005</p>
            </div>
          </div>

          {/* The Marly col */}
          <div className="footer-between">
            <div className="footer-nav-col">
              <div className="footer-col-label">
                <span>THE MARLY</span>
              </div>
              <nav className="footer-nav-links footer-nav-large">
                <a href="#stay">STAY</a>
                <a href="#spa">SPA</a>
                <a href="#eat">EAT</a>
                <a href="#experience">EXPERIENCE</a>
                <a href="#shop">SHOP</a>
              </nav>
            </div>

            {/* General col */}
            <div className="footer-nav-col">
              <div className="footer-col-label">
                <span>GENERAL</span>
              </div>
              <nav className="footer-nav-links footer-nav-small">
                <a href="#offers">EXCLUSIVE OFFERS</a>
                <a href="#itineraries">ITINERARIES</a>
                <a href="#story">OUR STORY</a>
                <a href="#location">LOCATION</a>
                <a href="#gallery">GALLERY</a>
                <a href="#blogs">BLOGS</a>
                <a href="#contact">CONTACT US</a>
              </nav>
            </div>
          </div>
          {/* Contact col */}
          <div className="footer-contact-col">
            <div className="footer-col-label">
              <span>CONTACT</span>
            </div>
            <div className="footer-contact-info">
              <p>T: +27 (0) 21 437 1287</p>
              <p>E: STAY@THEMARLY.CO.ZA</p>
            </div>
            <div className="footer-social">
              <a href="#fb" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#ig" aria-label="Instagram">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </a>
            </div>
            <div className="footer-cta-btns">
              <a href="#book" className="footer-book-btn">
                BOOK NOW
              </a>
              <a href="#enquire" className="footer-enquire-btn">
                ENQUIRE
              </a>
            </div>
          </div>
        </div>

        {/* ── Part 2: Newsletter ── */}
        <div className="footer-newsletter">
          <div className="footer-newsletter-bg">
            <img src={itineraries} alt="newsletter background" />
          </div>
          <div className="footer-newsletter-overlay" />
          <div className="footer-newsletter-inner">
            <div className="footer-newsletter-text">
              <p>
                To stay up to date and receive occasional promotions, sign up to
                our newsletter.
              </p>
            </div>
            <div className="footer-newsletter-form">
              <div className="footer-input-wrap">
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  className="footer-input"
                />
              </div>
              <div className="footer-input-wrap">
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="footer-input"
                />
              </div>
              <button className="footer-signup-btn">SIGN UP</button>
            </div>
          </div>
        </div>

        {/* ── Part 3: Bottom bar ── */}
        <div className="footer-bottom footer-mobile">
          <div>
            <div className="footer-kove">
              <span>KOVE COLLECTION</span>
            </div>
            <div className="footer-copyright">
              <span>© 2025 The Marly. All rights reserved.</span>
            </div>
          </div>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <span className="footer-divider">|</span>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
        <div className="footer-bottom footer-laptop">
          <div className="footer-copyright">
            <span>© 2025 The Marly. All rights reserved.</span>
          </div>
          <div className="footer-kove">
            <span>KOVE COLLECTION</span>
          </div>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <span className="footer-divider">|</span>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
