import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Navigation } from "swiper/modules";
import "./assets/css/App.css";
import Logo from "./assets/images/Logo.svg";
import Herosection from "./assets/images/hero_section.png";
import anthonyreungere from "./assets/images/anthony-reungere.jpg";
import anthonydelanoix from "./assets/images/anthony-delanoix.jpg";
import damianobaschiera from "./assets/images/damiano-baschiera.jpg";
import tombyrom from "./assets/images/tom-byrom.jpg";
import location from "./assets/images/location.png";
import joshhild from "./assets/images/josh-hild.jpg";
import mobilehero from "./assets/images/mobilehero.jpg";
import star from "./assets/images/star.png";
import veronika from "./assets/images/veronika.jpg";
import hansreniers from "./assets/images/hans-reniers.jpg";
import dan from "./assets/images/dan.jpg";
import exp1 from "./assets/images/exp-1.png";
import exp2 from "./assets/images/exp-2.png";
import exp3 from "./assets/images/exp-3.png";
import trip1 from "./assets/images/trip1.jpg";
import trip2 from "./assets/images/trip2.jpg";
import trip3 from "./assets/images/trip3.jpg";
import trip4 from "./assets/images/trip4.jpg";
import Gallery1 from "./assets/images/Gallery1.jpg";
import Gallery2 from "./assets/images/Gallery2.jpg";
import Gallery3 from "./assets/images/Gallery3.jpg";
import Gallery4 from "./assets/images/Gallery4.jpg";
import facebook from "./assets/images/facebook.png";
import pinterest from "./assets/images/pinterest.png";
import instagram from "./assets/images/instagram.png";
import twitter from "./assets/images/twitter.png";

function App() {
  const [readMore, setReadMore] = useState(false);
  const readMoreRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const destinationSwiperRef = useRef(null);
  const plannerSwiperRef = useRef(null);
  const experiencesSwiperRef = useRef(null);
  const specialOfferSwiperRef = useRef(null);
  const gallerySwiperRef = useRef(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeCard, setActiveCard] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [isSticky, setIsSticky] = useState(false);

  const handleNext = () => {
    setGalleryIndex(galleryIndex === 0 ? 4 : 0);
  };

  const handlePrev = () => {
    setGalleryIndex(galleryIndex === 4 ? 0 : 4);
  };
  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useLayoutEffect(() => {
    if (readMore && readMoreRef.current) {
      readMoreRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [readMore]);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-fadeIn-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div>
      <div className="hero-container">
        <nav
          id="siteHeader"
          className={`navbar-container ${
            isSticky
              ? "bg-black/85 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
              : "bg-transparent"
          }`}
        >
          <div className="navbar-content">
            <img src={Logo} alt="Logo" className="logo" />
            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#explore">Explore</a>
              </li>
              <li>
                <a href="#travel">Travel</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>

            <div className="auth-buttons">
              <div className="btn-base btn-login clickable">
                <a href="#login">Login</a>
              </div>
              <div className="btn-base btn-primary btn-signup">
                <a>Sign Up</a>
              </div>
            </div>

            <button
              className="lg:hidden text-white text-3xl z-[3000]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mobile-active">
              <ul className="mobile-navlinks clickable">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#explore">Explore</a>
                </li>
                <li>
                  <a href="#travel">Travel</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
              </ul>

              <div className="mobile-btn">
                <div className="btn-login btn-base clickable">
                  <a href="/login">Login</a>
                </div>
                <div className="btn-signup btn-primary clickable">
                  <a href="/signup">Sign Up</a>
                </div>
              </div>
            </div>
          )}
        </nav>
        <div className="hero-mobile">
          <div className="hero-content">
            <h1>Start your unforgettable journey with us.</h1>
            <p>The best travel for your journey begins now</p>
          </div>

          <div className="mobile-booking-card">
            <div className="booking-fields">
              <div className="booking-field">
                <label>Destination</label>
                <input type="text" placeholder="Dubai" />
              </div>

              <div className="booking-field">
                <label>Person</label>
                <select defaultValue="2">
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>

              <div className="booking-field">
                <label>Check In</label>
                <input type="date" defaultValue="2020-09-17" />
              </div>

              <div className="booking-field">
                <label>Check Out</label>
                <input type="date" defaultValue="2020-10-17" />
              </div>
            </div>
            <div className="booking-footer-btn btn-base btn-primary btn-heading-lg clickable">
              <a href="#booking">Book Now</a>
              <span>→</span>
            </div>
          </div>
        </div>
        <Swiper
          direction={"vertical"}
          pagination={{ clickable: true }}
          mousewheel={{ releaseOnEdges: true }}
          modules={[Pagination, Mousewheel]}
          className="heroSwiper"
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="hero-slide">
                <img src={Herosection} alt="hero" />

                <div className="hero-overlay animate-fadeIn-scroll">
                  <div className="hero-content">
                    <h1>Start your unforgettable journey with us.</h1>

                    <p>The best travel for your journey begins now</p>
                  </div>
                  <div className="booking-bar">
                    <div className="booking-fields ">
                      <div className="booking-field">
                        <label>Destination</label>
                        <input type="text" placeholder="Dubai" />
                      </div>

                      <div className="booking-field">
                        <label>Person</label>
                        <select defaultValue="2">
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                      </div>

                      <div className="booking-field">
                        <label>Check In</label>
                        <input type="date" defaultValue="2020-09-17" />
                      </div>

                      <div className="booking-field">
                        <label>Check Out</label>
                        <input type="date" defaultValue="2020-10-17" />
                      </div>
                    </div>
                    <div className="btn-base btn-primary btn-heading-lg btn-book clickable">
                      <a href="#booking">Book Now</a>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <main>
        {/* destinations-section */}
        <section className="destinations-section section-spacing section-spacing-no-pl section-spacing-no-pr animate-fadeIn-scroll">
          <div className="heading-block">
            <div className="heading-title">
              <h2>Popular Destinations</h2>
              <div className="underline-full"></div>
            </div>
            <div className="section-description">
              <p>Here some awesome feedback from our travelers</p>
              <div className="desktop-arrows">
                <div className="arrow-btn prev btn-base clickable">
                  <button
                    onClick={() => destinationSwiperRef.current?.slidePrev()}
                  >
                    ‹
                  </button>
                </div>
                <div className="arrow-btn next btn-base clickable">
                  <button
                    onClick={() => destinationSwiperRef.current?.slideNext()}
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Swiper
            spaceBetween={32}
            className="destinationSwiper"
            onSwiper={(swiper) => (destinationSwiperRef.current = swiper)}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1152: { slidesPerView: 2 },
              1440: { slidesPerView: 2 },
              1920: { slidesPerView: 2 },
            }}
          >
            <SwiperSlide>
              <div className="destination-card">
                <img src={anthonyreungere} alt="Berlin" />
                <div className="card-overlay">
                  <h3>Monument of Berlin</h3>
                  <div className="place-name">
                    <img src={location} alt="location" />
                    <p>Berlin, Germany</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="destination-card">
                <img src={anthonydelanoix} alt="London" />
                <div className="card-overlay">
                  <h3>Millennium Bridge</h3>
                  <div className="place-name">
                    <img src={location} alt="location" />
                    <p>London, United Kingdom</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="destination-card">
                <img src={damianobaschiera} alt="Venice" />
                <div className="card-overlay">
                  <h3>Rialto Bridge</h3>
                  <div className="place-name">
                    <img src={location} alt="location" />
                    <p>Venice, Italy</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="destination-card">
                <img src={tombyrom} alt="Lisbon" />
                <div className="card-overlay">
                  <h3>Sea of Orange</h3>
                  <div className="place-name">
                    <img src={location} alt="location" />
                    <p>Lisbon, Portugal</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="mobile-arrows">
            <div className="arrow-btn prev clickable">
              <button onClick={() => destinationSwiperRef.current?.slidePrev()}>
                ‹
              </button>
            </div>
            <div className="arrow-btn next clickable">
              <button onClick={() => destinationSwiperRef.current?.slideNext()}>
                ›
              </button>
            </div>
          </div>
        </section>
        {/* special-offer */}
        <section className="special-offer page-container animate-fadeIn-scroll">
          <div className="offer-header">
            <div className="nav-arrows desktop-nav">
              <div className="arrow-btn prev btn-base clickable">
                <button
                  onClick={() => specialOfferSwiperRef.current?.slidePrev()}
                >
                  ‹
                </button>
              </div>

              <div className="arrow-btn next btn-base clickable">
                <button
                  onClick={() => specialOfferSwiperRef.current?.slideNext()}
                >
                  ›
                </button>
              </div>
            </div>
            <div className="offer-desc">
              <div className="heading-block2">
                <h2>Special Offer</h2>
                <div className="underline-md"></div>
              </div>
              <div className="section-description">
                <p>Check out our special offer and discounts</p>
              </div>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            className="specialOfferSwiper"
            onSwiper={(swiper) => (specialOfferSwiperRef.current = swiper)}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1152: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <div className="card-offer">
                <div className="card-img">
                  <img src={veronika} alt="Lisbon" />
                </div>
                <div className="card-content">
                  <h3>Lisbon, Portugal</h3>
                  <div className="star-img">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src={star} alt="star" />
                    ))}
                  </div>
                  <p>
                    5 nights and 4 days in 5 star hotel, breakfast and lunch
                    included. Very popular during the renaissance. Passage and
                    going through the cites of the world in classical
                    literature.
                  </p>
                  <div className="offer-price">
                    <div className="price-text">
                      <p>From</p>
                      <p>€500</p>
                    </div>
                    <div className="btn-base btn-primary btn-details">
                      <button>Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-offer">
                <div className="card-img">
                  <img src={hansreniers} alt="Athens" />
                </div>
                <div className="card-content">
                  <h3>Athens, Greece</h3>
                  <div className="star-img">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src={star} alt="star" />
                    ))}
                  </div>
                  <p>
                    5 nights and 4 days in 5 star hotel, breakfast and lunch
                    included. Very popular during the renaissance. Passage and
                    going through the cites of the world in classical
                    literature.
                  </p>
                  <div className="offer-price">
                    <div className="price-text">
                      <p>From</p>
                      <p>€800</p>
                    </div>
                    <div className="btn-base btn-primary btn-details">
                      <button>Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-offer">
                <div className="card-img">
                  <img src={dan} alt="Rome" />
                </div>
                <div className="card-heading">
                  <div className="card-content">
                    <h3>Rome, Italy</h3>
                    <div className="star-img">
                      {[...Array(5)].map((_, i) => (
                        <img key={i} src={star} alt="star" />
                      ))}
                    </div>
                    <p>
                      5 nights and 4 days in 5 star hotel, breakfast and lunch
                      included. Very popular during the renaissance. Passage and
                      going through the cites of the world in classical
                      literature.
                    </p>
                    <div className="offer-price">
                      <div className="price-text">
                        <p>From</p>
                        <p>€750</p>
                      </div>
                      <div className="btn-base btn-primary btn-details">
                        <button>Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-offer">
                <div className="card-img">
                  <img src={veronika} alt="Lisbon" />
                </div>
                <div className="card-content">
                  <h3>Lisbon, Portugal</h3>
                  <div className="star-img">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src={star} alt="star" />
                    ))}
                  </div>
                  <p>
                    5 nights and 4 days in 5 star hotel, breakfast and lunch
                    included. Very popular during the renaissance. Passage and
                    going through the cites of the world in classical
                    literature.
                  </p>
                  <div className="offer-price">
                    <div className="price-text">
                      <p>From</p>
                      <p>€500</p>
                    </div>
                    <div className="btn-base btn-primary btn-details">
                      <button>Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="nav-arrows mobile-nav">
            <div className="arrow-btn prev btn-base clickable">
              <button
                onClick={() => specialOfferSwiperRef.current?.slidePrev()}
              >
                ‹
              </button>
            </div>

            <div className="arrow-btn next btn-base clickable">
              <button
                onClick={() => specialOfferSwiperRef.current?.slideNext()}
              >
                ›
              </button>
            </div>
          </div>
        </section>
        {/* Blog-section */}
        <section className="Blog-section page-container animate-fadeIn-scroll">
          <div className="section-header">
            <div className="heading">
              <div className="section-title">
                <h2>Our Blog</h2>
              </div>
              <div className="underline-sm"></div>
            </div>
            <div className="section-description">
              <p>An insight the incredible experience in the world</p>
            </div>
          </div>
          <div className="blog-content">
            <div className="blog-image">
              <img src={joshhild} alt="Italy Travel" />
            </div>

            <div className="blog-text">
              <div className="blog-title">
                <h3>Beautiful Italy Let's travel</h3>
              </div>
              <div className="blog-description" ref={readMoreRef}>
                <p>
                  {readMore
                    ? `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.`
                    : `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.`}
                </p>
              </div>
              <div className="blog-readmore clickable">
                <button onClick={() => setReadMore(!readMore)}>
                  {readMore ? "Read Less -" : "Read More -"} {">"}
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* trip-planners-section */}
        <section className="trip-planners-section section-spacing section-spacing-no-pl section-spacing-no-pr animate-fadeIn-scroll">
          <div className="planner-container">
            <div className="planner-heading">
              <div className="planner-content">
                <div className="planner-title">
                  <h2>Trip Planners</h2>
                </div>
                <div className="underline-base"></div>
              </div>

              <div className="planner-description">
                <p>
                  20 years from now you will be more disappointed by the things
                  that you didn't do. Stop regretting and start travelling,
                  start throwing off the bowlines.
                </p>
              </div>

              <div className="planner-btn-wrapper">
                <div className="decor-box-navy"></div>
                <div className="decor-box-grey"></div>

                <div className="btn-primary view-trip clickable">
                  <a href="#">View all trip plans</a>
                </div>
              </div>
            </div>

            {isDesktop ? (
              <Swiper
                spaceBetween={32}
                slidesPerView={1}
                className="plannerSwiper"
                onSwiper={(swiper) => (plannerSwiperRef.current = swiper)}
                breakpoints={{
                  1152: { slidesPerView: 2.2 },
                  1440: { slidesPerView: 2.4 },
                  1920: { slidesPerView: 3.4 },
                }}
              >
                {[trip1, trip2, trip3, trip4].map((trip, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className={`planner-card side-card group ${
                        activeCard === index ? "card-active" : ""
                      }`}
                    >
                      <div className="planner-details">
                        <div className="planner-meta">
                          <div className="planner-tag">
                            <span>Guided Tour</span>
                          </div>
                          <div className="planner-price">
                            <span>€95/Day</span>
                          </div>
                        </div>

                        <div className="planner-card-title">
                          <h3>Paris City Tour</h3>
                        </div>

                        <div className="planner-footer">
                          <div className="star-img">
                            {[...Array(5)].map((_, i) => (
                              <img key={i} src={star} alt="star" />
                            ))}
                          </div>

                          <div className="planner-duration">
                            <span>7 Days tour</span>
                          </div>
                        </div>
                      </div>

                      <div
                        className="planner-image-wrapper"
                        onClick={() => toggleCard(index)}
                      >
                        <img src={trip} className="trip-img" alt="trip" />
                        <div className="planner-image-overlay" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="planner-stack">
                <div className="planner-card-mobile">
                  <div className="planner-mobile-image">
                    <img src={trip1} alt="Rome tour" />
                  </div>

                  <div className="planner-mobile-details">
                    <div className="planner-data">
                      <div className="planner-tag">
                        <h4>Guided Tour</h4>
                      </div>

                      <div className="planner-price">
                        €99<span>/Day</span>
                      </div>
                    </div>

                    <div className="planner-city">
                      <h3>Rome City Tour</h3>
                    </div>

                    <div className="planner-footer-row">
                      <div className="star-img">
                        {[...Array(5)].map((_, i) => (
                          <img key={i} src={star} alt="star" />
                        ))}
                      </div>

                      <span>7 Days tour</span>
                    </div>
                  </div>
                </div>

                <div className="planner-card-mobile">
                  <div className="planner-mobile-image">
                    <img src={trip2} alt="Paris tour" />
                  </div>

                  <div className="planner-mobile-details">
                    <div className="planner-data">
                      <div className="planner-tag">
                        <h4>Guided Tour</h4>
                      </div>

                      <div className="planner-price">
                        €95<span>/Day</span>
                      </div>
                    </div>

                    <div className="planner-city">
                      <h3>Paris City Tour</h3>
                    </div>

                    <div className="planner-footer-row">
                      <div className="star-img">
                        {[...Array(4)].map((_, i) => (
                          <img key={i} src={star} alt="star" />
                        ))}
                      </div>

                      <span>5 Days tour</span>
                    </div>
                  </div>
                </div>

                <div className="planner-card-mobile">
                  <div className="planner-mobile-image">
                    <img src={trip3} alt="London tour" />
                  </div>

                  <div className="planner-mobile-details">
                    <div className="planner-data">
                      <div className="planner-tag">
                        <h4>Guided Tour</h4>
                      </div>

                      <div className="planner-price">
                        €89<span>/Day</span>
                      </div>
                    </div>

                    <div className="planner-city">
                      <h3>Barcelona City Tour</h3>
                    </div>

                    <div className="planner-footer-row">
                      <div className="star-img">
                        {[...Array(5)].map((_, i) => (
                          <img key={i} src={star} alt="star" />
                        ))}
                      </div>

                      <span>10 Days tour</span>
                    </div>
                  </div>
                </div>

                <div className="planner-card-mobile">
                  <div className="planner-mobile-image">
                    <img src={trip4} alt="Maldives tour" />
                  </div>

                  <div className="planner-mobile-details">
                    <div className="planner-data">
                      <div className="planner-tag">
                        <h4>Guided Tour</h4>
                      </div>

                      <div className="planner-price">
                        €89<span>/Day</span>
                      </div>
                    </div>

                    <div className="planner-city">
                      <h3>Budapest City Tour</h3>
                    </div>

                    <div className="planner-footer-row">
                      <div className="star-img">
                        {[...Array(5)].map((_, i) => (
                          <img key={i} src={star} alt="star" />
                        ))}
                      </div>

                      <span>6 Days tour</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        {/* Gallery-section */}
        <section className="Gallery-section page-container animate-fadeIn-scroll">
          <div className="heading-block">
            <div className="heading-title">
              <h2>Destination Gallery</h2>
              <div className="underline-full"></div>
            </div>
            <div className="section-description">
              <p>Our photo gallery on trip</p>

              <div className="desktop-arrows clickable">
                <div className="arrow-btn prev btn-base clickable">
                  <button onClick={handlePrev}>‹</button>
                </div>
                <div className="arrow-btn next clickable">
                  <button onClick={handleNext}>›</button>
                </div>
              </div>
            </div>
          </div>

          <div className="gallery-desktop-wrapper">
            {[
              Gallery1,
              Gallery2,
              Gallery3,
              Gallery4,
              trip1,
              trip2,
              trip3,
              trip4,
            ]
              .slice(galleryIndex, galleryIndex + 4)
              .map((img, idx) => (
                <div key={idx} className="gallery-card">
                  <img src={img} className="gallery-img" alt="gallery" />
                </div>
              ))}
          </div>

          <div className="gallery-mobile-wrapper">
            {[Gallery1, Gallery2, Gallery3, Gallery4].map((img, idx) => (
              <div key={idx} className="gallery-card-mobile">
                <img
                  src={img}
                  className="gallery-img-mobile"
                  alt="mobile gallery"
                />
              </div>
            ))}
          </div>
          <div className="mobile-arrows">
            <div className="arrow-btn prev btn-base clickable">
              <button onClick={handlePrev}>‹</button>
            </div>
            <div className="arrow-btn next clickable">
              <button onClick={handleNext}>›</button>
            </div>
          </div>
        </section>
        {/* experiences-gallery */}
        <section className="animate-fadeIn-scroll section-spacing-no-pl section-spacing section-spacing-no-pl ">
          <div className="experiences-gallery">
            <div className="heading-block">
              <div className="heading-title">
                <h2>Traveler's Experiences</h2>
                <div className="underline-xl"></div>
              </div>
              <div className="section-description">
                <p>Here some awesome feedback from our travelers</p>
              </div>
            </div>
            <div className="experiences">
              <Swiper
                className="experiencesSwiper"
                spaceBetween={32}
                watchSlidesProgress={true}
                onSwiper={(swiper) => (experiencesSwiperRef.current = swiper)}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 1.2 },
                  1152: { slidesPerView: 2.2 },
                  1440: { slidesPerView: 2.3 },
                  1920: { slidesPerView: 2.5 },
                }}
              >
                <SwiperSlide>
                  <div className="experiences-card">
                    <div className="experiences-person">
                      <div className="person-img">
                        <img src={exp1} alt="John Doe" />
                      </div>
                    </div>
                    <div className="experiences-text">
                      <p>
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system and
                        expound the actual teachings of the great explorer of
                        the truth, the master- builder of human happiness.
                      </p>
                    </div>
                    <div className="star-img">
                      {[...Array(5)].map((_, i) => (
                        <img key={i} src={star} alt="star" />
                      ))}
                    </div>
                    <div className="person-details">
                      <h4>John Doe</h4>
                      <p>Accountant</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="experiences-card">
                    <div className="experiences-person">
                      <div className="person-img">
                        <img src={exp2} alt="John Smith" />
                      </div>
                    </div>
                    <div className="experiences-text">
                      <p>
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system and
                        expound the actual teachings of the great explorer of
                        the truth, the master- builder of human happiness.
                      </p>
                    </div>
                    <div className="star-img">
                      {[...Array(5)].map((_, i) => (
                        <img key={i} src={star} alt="star" />
                      ))}
                    </div>
                    <div className="person-details">
                      <h4>John Smith</h4>
                      <p>Journalist, HWO News</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="experiences-card">
                    <div className="experiences-person">
                      <div className="person-img">
                        <img src={exp3} alt="Tamara Bellis" />
                      </div>
                    </div>
                    <div className="experiences-text">
                      <p>
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system and
                        expound the actual teachings of the great explorer of
                        the truth, the master- builder of human happiness.
                      </p>
                    </div>
                    <div className="star-img">
                      {[...Array(5)].map((_, i) => (
                        <img key={i} src={star} alt="star" />
                      ))}
                    </div>
                    <div className="person-details">
                      <h4>Tamara Bellis</h4>
                      <p>Managing Director, JTH</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="gallery-arrows">
              <div className="arrow-btn prev btn-base clickable">
                <button
                  onClick={() => experiencesSwiperRef.current?.slidePrev()}
                >
                  ‹
                </button>
              </div>
              <div className="arrow-btn next btn-base clickable">
                <button
                  className="arrow-btn next"
                  onClick={() => experiencesSwiperRef.current?.slideNext()}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="footer-section">
        <div className="Our-Newsletter">
          <div className="mobile-newsletter-wrapper">
            <div className="newsletter-heading">
              <h3>Our Newsletter</h3>
            </div>

            <div className="form-data">
              <label htmlFor="email">Email</label>

              <div className="form-input">
                <input
                  type="email"
                  name="email"
                  id="email-mobile"
                  placeholder="Enter your email"
                />
                <div className="btn-base footer-btn btn-primary clickable">
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer animate-fadeIn-scroll section-spacing ">
          <div className="newsletter-wrapper desktop-newsletter-wrapper">
            <div className="Our-Newsletter">
              <div className="newsletter-heading">
                <h3>Our Newsletter</h3>
              </div>

              <div className="form-data">
                <label htmlFor="email">Email</label>
                <div className="form-input">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                  <div className="btn-base footer-btn btn-primary clickable">
                    <button>Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-grid">
            <div className="footer-section">
              <img src={Logo} alt="logo" className="logo" />
              <h4>Copyright © Travellian 2020 All rights reserved</h4>
            </div>

            <div className="footer-section">
              <div className="footer-column">
                <h3>Menu</h3>
              </div>
              <ul className="footer-menu">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#explore">Explore</a>
                </li>
                <li>
                  <a href="#travel">Travel</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <div className="footer-column">
                <h3>Information</h3>
              </div>
              <ul className="footer-menu">
                <li>
                  <a href="#destinations">Destinations</a>
                </li>
                <li>
                  <a href="#support">Support</a>
                </li>
                <li>
                  <a href="#terms">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#privacy">Privacy</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <div className="footer-column">
                <h3>Contact Info</h3>
              </div>
              <div className="footer-menu">
                <p>+123 456 789</p>
                <p>info@travellian.com</p>
                <p>1245, New Yourk, USA</p>
              </div>
            </div>
            <div className="footer-section">
              <div className="footer-column">
                <h3>Follow us on</h3>
              </div>
              <div className="social-links">
                <img src={facebook} alt="facebook" />
                <img src={pinterest} alt="pinterest" />
                <img src={instagram} alt="instagram" />
                <img src={twitter} alt="twitter" />
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
