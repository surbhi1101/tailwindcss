import { useEffect, useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./assets/css/app.css";

import HotCoffee from "./assets/images/HotCoffee.png";
import CupCoffee from "./assets/images/cupcoffee.png";
import ColdCoffee from "./assets/images/coldcoffee.png";
import Desert from "./assets/images/dessert.png";

import special1 from "./assets/images/special1.png";
import special2 from "./assets/images/special2.png";
import special3 from "./assets/images/special3.png";
import special4 from "./assets/images/special4.png";

import dessert1 from "./assets/images/dessert1.png";
import dessert2 from "./assets/images/dessert2.png";
import dessert3 from "./assets/images/dessert3.png";
import dessert4 from "./assets/images/dessert4.png";

import customer from "./assets/images/customer.png";

import mail from "./assets/images/mail.png";

/* ─── SVG Icons ─────────────────────────────────────────── */
const IconSearch = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" x2="16.65" y1="21" y2="16.65" />
  </svg>
);

const IconTwitterX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconInstagram = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconHeart = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-3.5 h-3.5"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

/* ─── Data ───────────────────────────────────────────────── */
const coffeeItems = [
  {
    id: 1,
    name: "Lungo Coffee",
    desc: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.",
    price: "Rs. 200",
    image: special1,
  },
  {
    id: 2,
    name: "Lungo Coffee",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "Rs. 200",
    image: special2,
  },
  {
    id: 3,
    name: "Lungo Coffee",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "Rs. 200",
    image: special3,
  },
  {
    id: 4,
    name: "Lungo Coffee",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "Rs. 200",
    image: special4,
  },
  {
    id: 5,
    name: "Espresso Shot",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "Rs. 180",
    image: special1,
  },
  {
    id: 6,
    name: "Flat White",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "Rs. 220",
    image: special2,
  },
];

const dessertItems = [
  {
    id: 1,
    name: "Lungo Coffee",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "Rs. 200",
    image: dessert1,
  },
  {
    id: 2,
    name: "Lungo Coffee",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "Rs. 200",
    image: dessert2,
  },
  {
    id: 3,
    name: "Lungo Coffee",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "Rs. 200",
    image: dessert3,
  },
  {
    id: 4,
    name: "Lungo Coffee",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "Rs. 200",
    image: dessert4,
  },
  {
    id: 5,
    name: "Mocha Cake",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "Rs. 250",
    image: dessert1,
  },
  {
    id: 6,
    name: "Coffee Tart",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "Rs. 180",
    image: dessert2,
  },
];

const testimonials = [
  {
    id: 1,
    name: "James Smith",
    role: "Entrepreneur",
    rating: 4,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing ,Lorem ipsum dolor sit amet, consectetur adipisicing  dolor sit amet, consectetur adipisicing elit,Lorem ipsum  amet, consectetur adipisicing elit,Lorem ipsum dolor sit  adipisicing elit,Lorem ipsum dolor sit   dolor sit amet, consectetur adipisicing elit,",
    avatar: customer,
  },
  {
    id: 2,
    name: "James Smith",
    role: "Entrepreneur",
    rating: 5,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing ,Lorem ipsum dolor sit amet, consectetur adipisicing  dolor sit amet, consectetur adipisicing elit,Lorem ipsum  amet, consectetur adipisicing elit,Lorem ipsum dolor sit  adipisicing elit,Lorem ipsum dolor sit   dolor sit amet, consectetur adipisicing elit,",
    avatar: customer,
  },
  {
    id: 3,
    name: "James Smith",
    role: "Entrepreneur",
    rating: 3,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing ,Lorem ipsum dolor sit amet, consectetur adipisicing  dolor sit amet, consectetur adipisicing elit,Lorem ipsum  amet, consectetur adipisicing elit,Lorem ipsum dolor sit  adipisicing elit,Lorem ipsum dolor sit   dolor sit amet, consectetur adipisicing elit,",
    avatar: customer,
  },
  {
    id: 4,
    name: "James Smith",
    role: "Entrepreneur",
    rating: 5,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing ,Lorem ipsum dolor sit amet, consectetur adipisicing  dolor sit amet, consectetur adipisicing elit,Lorem ipsum  amet, consectetur adipisicing elit,Lorem ipsum dolor sit  adipisicing elit,Lorem ipsum dolor sit   dolor sit amet, consectetur adipisicing elit,",
    avatar: customer,
  },
  {
    id: 5,
    name: "James Smith",
    role: "Entrepreneur",
    rating: 4,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing ,Lorem ipsum dolor sit amet, consectetur adipisicing  dolor sit amet, consectetur adipisicing elit,Lorem ipsum  amet, consectetur adipisicing elit,Lorem ipsum dolor sit  adipisicing elit,Lorem ipsum dolor sit   dolor sit amet, consectetur adipisicing elit,",
    avatar: customer,
  },
  {
    id: 6,
    name: "James Smith",
    role: "Entrepreneur",
    rating: 4,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing ,Lorem ipsum dolor sit amet, consectetur adipisicing  dolor sit amet, consectetur adipisicing elit,Lorem ipsum  amet, consectetur adipisicing elit,Lorem ipsum dolor sit  adipisicing elit,Lorem ipsum dolor sit   dolor sit amet, consectetur adipisicing elit,",
    avatar: customer,
  },
  {
    id: 7,
    name: "James Smith",
    role: "Entrepreneur",
    rating: 5,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing ,Lorem ipsum dolor sit amet, consectetur adipisicing  dolor sit amet, consectetur adipisicing elit,Lorem ipsum  amet, consectetur adipisicing elit,Lorem ipsum dolor sit  adipisicing elit,Lorem ipsum dolor sit   dolor sit amet, consectetur adipisicing elit,",
    avatar: customer,
  },
  {
    id: 8,
    name: "James Smith",
    role: "Entrepreneur",
    rating: 3,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing ,Lorem ipsum dolor sit amet, consectetur adipisicing  dolor sit amet, consectetur adipisicing elit,Lorem ipsum  amet, consectetur adipisicing elit,Lorem ipsum dolor sit  adipisicing elit,Lorem ipsum dolor sit   dolor sit amet, consectetur adipisicing elit,",
    avatar: customer,
  },
  {
    id: 9,
    name: "James Smith",
    role: "Entrepreneur",
    rating: 5,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing ,Lorem ipsum dolor sit amet, consectetur adipisicing  dolor sit amet, consectetur adipisicing elit,Lorem ipsum  amet, consectetur adipisicing elit,Lorem ipsum dolor sit  adipisicing elit,Lorem ipsum dolor sit   dolor sit amet, consectetur adipisicing elit,",
    avatar: customer,
  },
];

const categories = [
  { label: "Hot Coffee", type: "image", src: HotCoffee },
  { label: "Cold Coffee", type: "image", src: ColdCoffee },
  { label: "Cup Coffee", type: "image", src: CupCoffee },
  { label: "Dessert", type: "image", src: Desert },
];

const socialLinks = [
  { Icon: IconTwitterX, label: "X" },
  { Icon: IconInstagram, label: "Instagram" },
  { Icon: IconFacebook, label: "Facebook" },
  { Icon: IconLinkedin, label: "LinkedIn" },
];

/* ─── Star Rating ────────────────────────────────────────── */
function Stars({ rating }) {
  return (
    <div className="test-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? "star-gold" : "star-gray"}>
          ★
        </span>
      ))}
    </div>
  );
}

/* ─── Product Card ───────────────────────────────────────── */
function ProdCard({ item }) {
  return (
    <div className="cafe-product">
      <div className="prod-card">
        <div className="prod-card-image">
          <img src={item.image} alt={item.name} />
          <button className="prod-card-heart" aria-label="Wishlist">
            <IconHeart />
          </button>
        </div>
        <div className="prod-card-body">
          <div className="product-details">
            <div className="prod-card-name">{item.name}</div>
            <p className="prod-card-desc">{item.desc}</p>
          </div>
          <div className="prod-card-footer">
            <span className="prod-card-price">{item.price}</span>
            <a href="#contact" className="btn-order">
              Order Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── App ────────────────────────────────────────────────── */
function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const coffeeSwiperRef = useRef(null);
  const dessertSwiperRef = useRef(null);
  const reviewSwiperRef = useRef(null);
  const prevCoffeeRef = useRef(null);
  const nextCoffeeRef = useRef(null);
  const prevTestRef = useRef(null);
  const nextTestRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("fade-in");
        }),
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(".fade-section")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const wireSwiperNav = (swiper, prevRef, nextRef) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.navigation.init();
    swiper.navigation.update();
  };

  return (
    <>
      {/* ══ NAVBAR ═════════════════════════════════════════════*/}
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div>
          <div className="navbar-inner">
            <a href="#home" className="nav-logo">
              coffea
            </a>

            <div className="navbar-links">
              {[
                ["Home", "#home"],
                ["Coffee", "#menu"],
                ["Bakery", "#menu"],
                ["Shop", "#menu"],
                ["About", "#about"],
                ["Login", "#contact"],
              ].map(([l, h]) => (
                <a key={l} href={h} className="nav-link">
                  {l}
                </a>
              ))}
            </div>

            <div className="navbar-actions">
              <button className="nav-icon-btn" aria-label="Search">
                <IconSearch />
              </button>
              <div
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span className="hamburger-line" />
                <span className="hamburger-line" />
                <span className="hamburger-line" />
              </div>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="navbar-mobile-menu">
            {[
              ["Home", "#home"],
              ["Coffee", "#menu"],
              ["Bakery", "#menu"],
              ["Shop", "#menu"],
              ["About", "#about"],
              ["Login", "#contact"],
            ].map(([l, h]) => (
              <a
                key={l}
                href={h}
                className="nav-mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {l}
              </a>
            ))}
          </div>
        )}
      </nav>
      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section id="home" className="hero-section">
        <div className="hero-bg" />
        <div>
          <div className="hero-content">
            <div className="fade-section fade-delay-1">
              <div className="hero-welcome">Welcome</div>
            </div>
            <div className="hero">
              <div className="fade-section fade-delay-2">
                <h1 className="hero-heading">
                  We serve the richest coffee in the city!
                </h1>
              </div>
              <div className="fade-section fade-delay-3">
                <p className="hero-sub">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
              <div className="fade-section fade-delay-4">
                <a href="#menu" className="btn-primary">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ══ CATEGORY STRIP ══════════════════════════════════════ */}
      <div className="category-strip fade-section">
        <div className="container">
          <div className="category-strip-inner">
            {categories.map((item) => (
              <div key={item.label} className="cat-item">
                <div className="cat-icon">
                  {item.type === "image" ? (
                    <img src={item.src} alt={item.label} />
                  ) : (
                    <item.Icon />
                  )}
                </div>
                <span className="cat-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ══ OUR SPECIAL COFFEE ══════════════════════════════════ */}
      <section id="menu" className="product-section">
        <div className="container special-coffee">
          <div className="product-section-title fade-section">
            <h2 className="product-heading">Our Special Coffee</h2>
          </div>

          <div className="product-slider-wrap fade-section">
            <div className="destop-nav ">
              <button
                onClick={() => coffeeSwiperRef.current?.slidePrev()}
                className="swiper-arrow swiper-arrow-prev"
                aria-label="Previous"
              >
                &#8592;
              </button>
              <button
                onClick={() => coffeeSwiperRef.current?.slideNext()}
                className="swiper-arrow swiper-arrow-next"
                aria-label="Next"
              >
                &#8594;
              </button>
            </div>
            <Swiper
              modules={[Navigation]}
              onSwiper={(sw) => (coffeeSwiperRef.current = sw)}
              coffeeSwiperRef
              slidesPerView={1}
              slidesPerGroup={1}
              className="coffee-swiper"
              spaceBetween={4}
              breakpoints={{
                320: { slidesPerView: 1, slidesPerGroup: 2 },
                640: { slidesPerView: 2, slidesPerGroup: 2 },
                1024: { slidesPerView: 4, slidesPerGroup: 4 },
              }}
            >
              {coffeeItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProdCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mobile-nav">
            <button
              onClick={() => coffeeSwiperRef.current?.slidePrev()}
              className="mob-arrow mob-arrow-prev"
              aria-label="Previous"
            >
              &#8592;
            </button>
            <button
              onClick={() => coffeeSwiperRef.current?.slideNext()}
              className="mob-arrow mob-arrow-next"
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>
      {/* ══ OUR SPECIAL DESSERT ═════════════════════════════════ */}
      <section className="product-section">
        <div className="container special-coffee">
          <div className="product-section-title fade-section">
            <h2 className="product-heading">Our Special Dessert</h2>
          </div>

          <div className="product-slider-wrap fade-section">
            <div className="destop-nav ">
              <button
                className="swiper-arrow swiper-arrow-prev"
                aria-label="Previous"
                onClick={() => dessertSwiperRef.current?.slidePrev()}
              >
                &#8592;
              </button>
              <button
                className="swiper-arrow swiper-arrow-next"
                aria-label="Next"
                onClick={() => dessertSwiperRef.current?.slideNext()}
              >
                &#8594;
              </button>
            </div>

            <Swiper
              modules={[Navigation]}
              onSwiper={(sw) => (dessertSwiperRef.current = sw)}
              slidesPerView={1}
              slidesPerGroup={1}
              spaceBetween={4}
              breakpoints={{
                320: { slidesPerView: 1, slidesPerGroup: 2 },
                640: { slidesPerView: 2, slidesPerGroup: 2 },
                1024: { slidesPerView: 4, slidesPerGroup: 4 },
              }}
            >
              {dessertItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProdCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mobile-nav">
            <button
              className="mob-arrow mob-arrow-prev"
              aria-label="Previous"
              onClick={() => dessertSwiperRef.current?.slidePrev()}
            >
              &#8592;
            </button>
            <button
              className="mob-arrow mob-arrow-next"
              aria-label="Next"
              onClick={() => dessertSwiperRef.current?.slideNext()}
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>
      {/* ══ CTA BANNER ══════════════════════════════════════════ */}
      <div className="cta-banner fade-section">
        <div className="cta-banner-bg-left" />
        <div className="cta-banner-bg-right" />
        <div className="container">
          <div className="cta-banner-content">
            <h2 className="cta-heading">
              Check Out Our Best
              <br />
              Coffee Beans
            </h2>
            <a href="#menu" className="newsletter-btn explore-btn">
              Explore Our Products &nbsp;&#187;&#187;
            </a>
          </div>
        </div>
      </div>
      {/* ══ TESTIMONIALS ════════════════════════════════════════ */}
      <section className="testimonials-section">
        <div className="container">
          <div className="text-center fade-section review-title">
            <div className="testimonials-pretitle">Come and Join</div>
            <h2 className="testimonials-title">OUR HAPPY CUSTOMERS</h2>
          </div>

          <div className="fade-section customer-review">
            <Swiper
              modules={[Navigation, Pagination]}
              onSwiper={(sw) => (reviewSwiperRef.current = sw)}
              slidesPerView={1}
              slidesPerGroup={1}
              className="review-swiper"
              pagination={{ clickable: true }}
              breakpoints={{
                320: { slidesPerView: 1, slidesPerGroup: 2 },
                768: { slidesPerView: 2, slidesPerGroup: 2 },
                1152: { slidesPerView: 3, slidesPerGroup: 3 },
              }}
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id}>
                  <div className="test-card">
                    <div className="test-author-wrap">
                      <div className="author-details">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="test-avatar"
                        />
                        <div>
                          <div className="test-name">{t.name}</div>
                          <div className="test-role">{t.role}</div>
                        </div>
                      </div>
                      <div className="stars">
                        <Stars rating={t.rating} />
                      </div>
                    </div>
                    <p className="test-quote">{t.quote}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mobile-nav">
            <button
              onClick={() => reviewSwiperRef.current?.slidePrev()}
              className="mob-arrow mob-arrow-prev"
              aria-label="Previous"
            >
              &#8592;
            </button>
            <button
              onClick={() => reviewSwiperRef.current?.slideNext()}
              className="mob-arrow mob-arrow-next"
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>
      {/* ══ NEWSLETTER ══════════════════════════════════════════ */}
      <section className="newsletter-section cta-banner fade-section">
        <div className="cta-footer-bg-left" />
        <div className="cta-footer-bg-right" />
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter">
              <h2 className="newsletter-title">Join in and get 15% off!</h2>
              <p className="newsletter-sub">
                Subscribe to our newsletter to get 15% off discount code.
              </p>
            </div>
            <div className="newsletter-form">
              <div className="newsletter-input-wrap">
                <img src={mail} alt="mail icon" className="newsletter-icon" />
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Email address"
                />
              </div>

              <button type="button" className="newsletter-btn">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ══ FOOTER ══════════════════════════════════════════════ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-details">
              {/* Brand */}
              <div className="lg:col-span-1">
                <div className="footer-brand">COFFEE</div>
              </div>

              {/* Privacy */}
              <div className="footer-col">
                <div className="footer-col-title">Privacy</div>
                <div className="footer-links">
                  {["Terms of use", "Privacy policy", "Cookies"].map((l) => (
                    <a key={l} href="#" className="footer-link">
                      {l}
                    </a>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="footer-col">
                <div className="footer-col-title">Services</div>
                <div className="footer-links">
                  {["Shop", "Order ahead", "Menu"].map((l) => (
                    <a key={l} href="#" className="footer-link">
                      {l}
                    </a>
                  ))}
                </div>
              </div>

              {/* About Us */}
              <div className="footer-col">
                <div className="footer-col-title">About Us</div>
                <div className="footer-links">
                  {["Find a location", "About us", "Our story"].map((l) => (
                    <a key={l} href="#" className="footer-link">
                      {l}
                    </a>
                  ))}
                </div>
              </div>

              {/* Information */}
              <div className="footer-col">
                <div className="footer-col-title">Information</div>
                <div className="footer-links">
                  {["Plans & pricing", "Sell your products", "Jobs"].map(
                    (l) => (
                      <a key={l} href="#" className="footer-link">
                        {l}
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
            {/* Social Media */}
            <div className="footer-col">
              <div className="footer-col-title">Social Media</div>
              <div className="footer-social">
                {socialLinks.map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="footer-social-btn"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
