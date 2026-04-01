import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./assets/css/App.css";
/* ─── Data ─────────────────────────────────────────── */
const NAV_LINKS = ["Home", "Menu", "About", "Gallery", "Contact"];

const MENU_ITEMS = [
  {
    id: 1,
    name: "Signature Espresso",
    desc: "Rich, bold single-origin espresso with a velvety crema.",
    price: "$4.50",
    tag: "Bestseller",
    img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&q=80",
  },
  {
    id: 2,
    name: "Vanilla Latte",
    desc: "Smooth espresso with steamed milk and house-made vanilla syrup.",
    price: "$5.75",
    tag: "Popular",
    img: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=600&q=80",
  },
  {
    id: 3,
    name: "Cold Brew",
    desc: "12-hour steeped cold brew, smooth and naturally sweet.",
    price: "$5.25",
    tag: "Seasonal",
    img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=80",
  },
  {
    id: 4,
    name: "Caramel Macchiato",
    desc: "Espresso layered over steamed milk with caramel drizzle.",
    price: "$6.00",
    tag: "New",
    img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&q=80",
  },
  {
    id: 5,
    name: "Matcha Latte",
    desc: "Ceremonial-grade matcha whisked into creamy oat milk.",
    price: "$5.50",
    tag: "Vegan",
    img: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=600&q=80",
  },
  {
    id: 6,
    name: "Honey Flat White",
    desc: "Double ristretto with micro-foam milk and wildflower honey.",
    price: "$5.95",
    tag: "Favorite",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
  },
];

const FEATURES = [
  {
    icon: "🌿",
    title: "Fresh Ingredients",
    desc: "We source only the finest single-origin beans and organic dairy for every cup.",
  },
  {
    icon: "☕",
    title: "Expert Baristas",
    desc: "Our team of certified baristas craft each drink with precision and passion.",
  },
  {
    icon: "🪑",
    title: "Cozy Atmosphere",
    desc: "A warm, welcoming space designed for relaxation, conversation, and creativity.",
  },
  {
    icon: "⚡",
    title: "Fast Service",
    desc: "Your order, ready when you need it — without ever compromising on quality.",
  },
];

const GALLERY_IMAGES = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    label: "Morning Ritual",
    tall: true,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80",
    label: "Latte Art",
    tall: false,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80",
    label: "Cozy Corner",
    tall: false,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80",
    label: "Brew Sessions",
    tall: true,
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    label: "Classic Espresso",
    tall: false,
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&q=80",
    label: "The Experience",
    tall: false,
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Food Blogger",
    review:
      "Brew & Co is truly special. Every cup feels like it was crafted just for you. The vanilla latte here is the best I've ever tasted — rich, balanced, perfect.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
  },
  {
    id: 2,
    name: "James Okafor",
    role: "Architect",
    review:
      "My office away from home. The atmosphere is warm, the wifi is fast, and the cold brew keeps me going all day. Highly recommend the honey flat white.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Yoga Instructor",
    review:
      "The matcha latte here changed everything for me. Smooth, earthy, and not too sweet. The staff always remembers my order — love this place!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&q=80",
  },
  {
    id: 4,
    name: "Carlos Rivera",
    role: "Software Engineer",
    review:
      "Best espresso in town, hands down. The signature espresso is intense but incredibly smooth. The interior design is stunning too.",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    id: 5,
    name: "Emily Chen",
    role: "Photographer",
    review:
      "Every corner of Brew & Co is photo-worthy. But beyond the aesthetics, the quality of the coffee is unbeatable. My creative sanctuary.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&q=80",
  },
];

/* ─── Helpers ───────────────────────────────────────── */
function Stars({ rating }) {
  return (
    <div className="testimonial-stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= rating ? "star-filled" : "star-empty"}>
          ★
        </span>
      ))}
    </div>
  );
}

/*
  ─── useFadeOnScroll ────────────────────────────────────────
  */
function useFadeOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-section");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    // 🔥 Double RAF ensures styles are painted first
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        elements.forEach((el) => observer.observe(el));
      });
    });

    return () => observer.disconnect();
  }, []);
}
/* ─── Navbar ────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeroZone, setIsHeroZone] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setIsHeroZone(y < window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // New Toggle Function
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollTo = (id) => {
    setMenuOpen(false); // Always close on link click
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`navbar ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`}
      >
        <div className="container-main">
          <div className="navbar-inner">
            <span
              className={`navbar-logo ${!scrolled && isHeroZone ? "navbar-logo-hero" : ""}`}
            >
              Brew &amp; Co
            </span>

            <ul className="navbar-links">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <button
                    className={`navbar-link ${!scrolled && isHeroZone ? "navbar-link-hero" : ""}`}
                    onClick={() => scrollTo(link)}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>

            <button
              className="btn btn-primary hidden lg:inline-flex"
              onClick={() => scrollTo("menu")}
            >
              Order Now
            </button>

            {/* UPDATED HAMBURGER BUTTON */}
            <button
              className={`navbar-hamburger ${menuOpen ? "active" : ""}`}
              onClick={toggleMenu} // <--- Toggle logic here
              aria-label="Toggle menu"
            >
              <span
                className={`hamburger-line ${!scrolled && isHeroZone && !menuOpen ? "hamburger-line-hero" : ""}`}
              />
              <span
                className={`hamburger-line ${!scrolled && isHeroZone && !menuOpen ? "hamburger-line-hero" : ""}`}
              />
              <span
                className={`hamburger-line ${!scrolled && isHeroZone && !menuOpen ? "hamburger-line-hero" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            className="mobile-menu-link"
            onClick={() => scrollTo(link)}
          >
            {link}
          </button>
        ))}
      </div>
    </>
  );
}

/* ─── Hero ──────────────────────────────────────────── */

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div
        className="hero-bg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=85')",
        }}
      />
      <div className="overlay-dark" />
      <div className="hero-content">
        <p className="hero-eyebrow hero-fade">Handcrafted Since 2010</p>
        <h1 className="hero-heading hero-fade-delay-1">
          Every Sip
          <br />
          Tells a Story
        </h1>
        <p className="hero-subheading hero-fade-delay-2">
          Freshly brewed coffee made with love — one cup at a time.
        </p>
        <div className="btn-group hero-fade-delay-2">
          <a href="#menu" className="btn btn-white">
            Explore Menu
          </a>
          <a href="#about" className="btn btn-outline-white">
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── About ───────────────────────────────────────────*/
function About() {
  return (
    <section id="about" className="section-wrapper">
      <div className="container-main">
        <div className="about-grid fade-section">
          <div className="about-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80"
              alt="Inside Brew & Co coffee shop"
            />
            <div className="about-badge">
              <span className="about-badge-number">15+</span>
              <span className="about-badge-label">Years of Craft</span>
            </div>
          </div>

          <div>
            <p className="hero-eyebrow">Our Story</p>
            <h2 className="section-heading">
              Passion Poured Into{" "}
              <span className="underline-accent">Every Cup</span>
            </h2>
            <p className="about-description">
              Brew &amp; Co was born from a simple belief: that great coffee can
              transform your day. Founded in 2010, we've been on a mission to
              source the world's finest single-origin beans, roasted to
              perfection and served by baristas who truly care.
            </p>
            <p className="about-description">
              From our first cozy corner café to three thriving locations, our
              commitment to quality, sustainability, and community has never
              wavered. Every visit is a sensory journey — come experience the
              difference.
            </p>
            <div className="about-stats-grid">
              {[
                { num: "15+", label: "Years" },
                { num: "2M+", label: "Cups Served" },
                { num: "3", label: "Locations" },
              ].map((s) => (
                <div key={s.label} className="stat-item">
                  <span className="stat-number">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Menu ──────────────────────────────────────────── */
function Menu() {
  return (
    <section id="menu" className="section-wrapper-alt">
      <div className="container-main">
        <div className="section-title-block fade-section">
          <h2 className="section-heading">Our Menu</h2>
          <span className="divider-accent" />
          <p className="section-subheading">
            Thoughtfully curated drinks for every mood and moment.
          </p>
        </div>

        <div className="swiper-section fade-section">
          {/*
            FIX 4 — Swiper modules
            Old bug: only A11y was in the modules array, and Navigation +
            Pagination were not imported at all. Without them registered,
            the nav arrows and pagination dots are never rendered.
          */}
          <Swiper
            modules={[Pagination, A11y]}
            pagination={{ clickable: true }}
            spaceBetween={24}
            breakpoints={{
              320: { slidesPerView: 1, slidesPerGroup: 1 },
              768: { slidesPerView: 1, slidesPerGroup: 1 },
              1152: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
          >
            {MENU_ITEMS.map((item) => (
              <SwiperSlide key={item.id}>
                <article className="menu-card">
                  <div className="menu-card-image">
                    <img src={item.img} alt={item.name} />
                    <span className="menu-card-tag">{item.tag}</span>
                  </div>
                  <div className="menu-card-body">
                    <h3 className="menu-card-name">{item.name}</h3>
                    <p className="menu-card-desc">{item.desc}</p>
                    <div className="menu-card-footer">
                      <span className="menu-card-price">{item.price}</span>
                      <button className="btn btn-primary">Order Now</button>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us ─────────────────────────────────── */
function WhyUs() {
  return (
    <section id="why" className="section-wrapper">
      <div className="container-main">
        <div className="section-title-block fade-section">
          <h2 className="section-heading">Why Choose Us</h2>
          <span className="divider-accent" />
          <p className="section-subheading">
            Four reasons our regulars keep coming back, every single day.
          </p>
        </div>
        <div className="features-grid fade-section">
          {FEATURES.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Gallery ───────────────────────────────────────── */
function Gallery() {
  return (
    <section id="gallery" className="section-wrapper-alt">
      <div className="container-main">
        <div className="section-title-block fade-section">
          <h2 className="section-heading">Gallery</h2>
          <span className="divider-accent" />
          <p className="section-subheading">
            Moments captured inside Brew &amp; Co — warmth you can feel.
          </p>
        </div>
        <div className="gallery-grid fade-section">
          {GALLERY_IMAGES.map((g) => (
            <div
              key={g.id}
              className={`gallery-item ${g.tall ? "gallery-grid-item-tall" : ""}`}
              style={{
                minHeight: g.tall ? "360px" : "180px",
                height: g.tall ? "100%" : "180px",
              }}
            >
              <img src={g.img} alt={g.label} />
              <div className="gallery-overlay">
                <span className="gallery-overlay-text">{g.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ──────────────────────────────────── */
function Testimonials() {
  return (
    <section id="testimonials" className="section-wrapper">
      <div className="container-main">
        <div className="section-title-block fade-section">
          <h2 className="section-heading">What Our Guests Say</h2>
          <span className="divider-accent" />
          <p className="section-subheading">
            Real stories from our wonderful community.
          </p>
        </div>
        <div className="swiper-section fade-section">
          <Swiper
            modules={[Pagination, A11y]}
            pagination={{ clickable: true }}
            spaceBetween={24}
            breakpoints={{
              320: { slidesPerView: 1, slidesPerGroup: 1 },
              768: { slidesPerView: 1, slidesPerGroup: 1 },
              1152: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                <article className="testimonial-card">
                  <span className="testimonial-quote">&ldquo;</span>
                  <Stars rating={t.rating} />
                  <p className="testimonial-text">{t.review}</p>
                  <div className="testimonial-author">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="testimonial-avatar"
                    />
                    <div>
                      <p className="testimonial-name">{t.name}</p>
                      <p className="testimonial-role">{t.role}</p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ───────────────────────────────────────── */
function Contact() {
  const INFO = [
    {
      icon: "📍",
      label: "Address",
      value: "42 Roast Lane, Coffee District, CA 94102",
    },
    { icon: "📞", label: "Phone", value: "+1 (415) 820-3490" },
    { icon: "✉️", label: "Email", value: "hello@brewandco.com" },
    {
      icon: "🕐",
      label: "Opening Hours",
      value: "Mon–Fri 7am–9pm · Sat–Sun 8am–10pm",
    },
  ];

  return (
    <section id="contact" className="section-wrapper-alt">
      <div className="container-main">
        <div className="section-title-block fade-section">
          <h2 className="section-heading">Get In Touch</h2>
          <span className="divider-accent" />
          <p className="section-subheading">
            We'd love to hear from you. Visit us, call us, or drop a message.
          </p>
        </div>
        <div className="contact-grid fade-section">
          <div>
            <h3 className="section-heading" style={{ fontSize: "1.6rem" }}>
              Visit Brew &amp; Co
            </h3>
            <p className="about-description">
              Whether you're popping in for a quick espresso or settling in for
              the afternoon, our doors are always open. We can't wait to serve
              you.
            </p>
            <ul className="contact-info-list">
              {INFO.map((item) => (
                <li key={item.label} className="contact-info-item">
                  <div className="contact-icon-wrap">{item.icon}</div>
                  <div>
                    <p className="contact-info-label">{item.label}</p>
                    <p className="contact-info-value">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-input"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="jane@example.com"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-input form-textarea"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────── */
function Footer() {
  const QUICK_LINKS = ["Home", "Menu", "About", "Gallery", "Contact"];
  const SOCIALS = [
    { icon: "f", label: "Facebook" },
    { icon: "𝕏", label: "Twitter/X" },
    { icon: "▶", label: "Instagram" },
    { icon: "in", label: "LinkedIn" },
  ];

  return (
    <footer className="footer">
      <div className="container-main">
        <div className="footer-grid">
          <div>
            <p className="footer-logo">Brew &amp; Co</p>
            <p className="footer-tagline">
              Crafting moments of warmth, one exceptional cup at a time since
              2010.
            </p>
            <div className="footer-social">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="footer-social-icon"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              {QUICK_LINKS.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="footer-link">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Our Menu</h4>
            <ul>
              {[
                "Espresso",
                "Latte",
                "Cold Brew",
                "Macchiato",
                "Matcha",
                "Flat White",
              ].map((m) => (
                <li key={m}>
                  <a href="#menu" className="footer-link">
                    {m}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-link">42 Roast Lane, Coffee District</p>
            <p className="footer-link">San Francisco, CA 94102</p>
            <p className="footer-link">+1 (415) 820-3490</p>
            <p className="footer-link">hello@brewandco.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Brew &amp; Co. All rights reserved. Made
          with ☕ and care.
        </div>
      </div>
    </footer>
  );
}

/* ─── App ───────────────────────────────────────────── */
export default function App() {
  useFadeOnScroll();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
