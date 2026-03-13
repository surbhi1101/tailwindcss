import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./assets/css/App.css";
import Logo from "./assets/images/Logo.svg";
import Herosection from "./assets/images/hero_section.png";
import anthonyreungere from "./assets/images/anthony-reungere.jpg";
import anthonydelanoix from "./assets/images/anthony-delanoix.jpg";
import damianobaschiera from "./assets/images/damiano-baschiera.jpg";
import tombyrom from "./assets/images/tom-byrom.jpg";
import location from "./assets/images/location.png";
import joshhild from "./assets/images/josh-hild.jpg";
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
import hamburger from "./assets/images/hamburger.png";
import nextbtn from "./assets/images/next-btn.png";
import prevbtn from "./assets/images/prev-btn.png";
function App() {
  const [readMore, setReadMore] = useState(false);
  const readMoreRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const destinationSwiperRef = useRef(null);
  const plannerSwiperRef = useRef(null);
  const heroSwiperRef = useRef(null);
  const experiencesSwiperRef = useRef(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [isSticky, setIsSticky] = useState(false);
  const [offerIndex, setOfferIndex] = useState(0);
  const [activeGallery, setActiveGallery] = useState(null);
  const cardsPerView = isDesktop ? 3 : 1;
  // offer
  const offers = [
    {
      img: veronika,
      title: "Lisbon, Portugal",
      price: "€500",
      desc: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
    },
    {
      img: hansreniers,
      title: "Athens, Greece",
      price: "€800",
      desc: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
    },
    {
      img: dan,
      title: "Rome, Italy",
      price: "€750",
      desc: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
    },
    {
      img: veronika,
      title: "Lisbon, Portugal",
      price: "€500",
      desc: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
    },
  ];

  const nextOffer = () => {
    setOfferIndex((prev) =>
      prev >= offers.length - cardsPerView ? 0 : prev + 1,
    );
  };

  const prevOffer = () => {
    setOfferIndex((prev) =>
      prev <= 0 ? offers.length - cardsPerView : prev - 1,
    );
  };

  const visibleOffers = offers.slice(offerIndex, offerIndex + cardsPerView);

  // gallery-img
  const galleryImages = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    trip1,
    trip2,
    trip3,
    trip4,
  ];

  const nextGallery = () => {
    setGalleryIndex((prev) =>
      prev >= galleryImages.length - 4 ? 0 : prev + 4,
    );
  };

  const prevGallery = () => {
    setGalleryIndex((prev) =>
      prev <= 0 ? galleryImages.length - 4 : prev - 4,
    );
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
          <div className="navbar-content clickable">
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
              <div className="btn-base btn-primary btn-signup clickable btn-anim">
                <a href="#signup" onClick={(e) => e.preventDefault()}>
                  Sign Up
                </a>
              </div>
            </div>

            <button
              className="lg:hidden text-white text-3xl z-[3000]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "✕" : <img src={hamburger} />}
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
                  <a href="#login">Login</a>
                </div>
                <div className="btn-signup btn-primary btn-anim clickable">
                  <a href="#signup" onClick={(e) => e.preventDefault()}>
                    Sign Up
                  </a>
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
              <a href="#booking" onClick={(e) => e.preventDefault()}>
                Book Now
              </a>
              <span>→</span>
            </div>
          </div>
        </div>
        <Swiper
          direction={"vertical"}
          pagination={{ clickable: true }}
          mousewheel={{ releaseOnEdges: true }}
          onSwiper={(swiper) => (heroSwiperRef.current = swiper)}
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
                      <a href="#booking" onClick={(e) => e.preventDefault()}>
                        Book Now
                      </a>
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
        <section className="destinations-section animate-fadeIn-scroll">
          <div className="heading-block">
            <div className="heading-title">
              <h2>Popular Destinations</h2>
              <div className="underline-full"></div>
            </div>
            <div className="heading-bottom section-desc-lg">
              <p>
                Most popular destinations around the world, from historical
                places to natural wonders.
              </p>

              <div className="desktop-arrows">
                <div className="arrow-btn prev clickable ">
                  <button
                    onClick={() => destinationSwiperRef.current?.slidePrev()}
                  >
                    <img src={prevbtn} alt="prevbtn" />
                  </button>
                </div>

                <div className="arrow-btn next clickable">
                  <button
                    onClick={() => destinationSwiperRef.current?.slideNext()}
                  >
                    <img src={nextbtn} alt="next-btn" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={32}
            className="destinationSwiper"
            onSwiper={(swiper) => (destinationSwiperRef.current = swiper)}
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
                <img src={prevbtn} alt="prevbtn" />
              </button>
            </div>
            <div className="arrow-btn next clickable">
              <button onClick={() => destinationSwiperRef.current?.slideNext()}>
                <img src={nextbtn} alt="next-btn" />
              </button>
            </div>
          </div>
        </section>
        {/* special-offer */}
        <section className="special-offer animate-fadeIn-scroll">
          <div className="offer-desc">
            <div className="heading-title">
              <h2>Special Offer</h2>
              <div className="underline-md"></div>
            </div>
            <div className="section-desc-md">
              <div className="nav-arrows desktop-nav">
                <div className="arrow-btn prev clickable">
                  <button onClick={prevOffer}>
                    <img src={prevbtn} alt="prevbtn" />
                  </button>
                </div>

                <div className="arrow-btn next clickable">
                  <button onClick={nextOffer}>
                    <img src={nextbtn} alt="next-btn" />
                  </button>
                </div>
              </div>
              <p>Check out our special offer and discounts</p>
            </div>
          </div>
          <div className="offer-cards">
            {visibleOffers.map((offer, index) => (
              <div key={index} className="card-offer">
                <div className="card-img">
                  <img src={offer.img} alt={offer.title} />
                </div>

                <div className="card-content">
                  <div className="card-title">
                    <h3>{offer.title}</h3>

                    <div className="star-img">
                      {[...Array(5)].map((_, i) => (
                        <img key={i} src={star} alt="star" />
                      ))}
                    </div>
                  </div>

                  <p>{offer.desc}</p>

                  <div className="offer-price">
                    <div className="price-text">
                      <p>From</p>
                      <p>{offer.price}</p>
                    </div>

                    <div className="btn-base btn-primary btn-details clickable btn-anim">
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="nav-arrows mobile-nav">
            <div className="arrow-btn prev clickable">
              <button onClick={prevOffer}>
                <img src={prevbtn} alt="prevbtn" />
              </button>
            </div>

            <div className="arrow-btn next clickable">
              <button onClick={nextOffer}>
                <img src={nextbtn} alt="next-btn" />
              </button>
            </div>
          </div>
        </section>
        {/* Blog-section */}
        <section className="Blog-section animate-fadeIn-scroll">
          <div className="heading-block">
            <div className="heading-title">
              <h2>Our Blog</h2>
              <div className="underline-sm"></div>
            </div>
            <div className="section-desc-md">
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
                  {readMore ? "Read Less" : "Read More "}
                </button>
                <span>→</span>
              </div>
            </div>
          </div>
        </section>
        {/* trip-planners-section */}
        <section className="trip-planners-section animate-fadeIn-scroll">
          <div className="heading-block">
            <div className="heading-title">
              <h2>Trip Planners</h2>
              <div className="underline-base"></div>
            </div>
            <div className="section-desc-sm ">
              <p>
                20 years from now you will be more disappointed by the things
                that you didn't do. Stop regretting and start travelling, start
                throwing off the bowlines.
              </p>
            </div>
            <div className="btn-base btn-primary btn-plans">
              <span className="decor-box-navy"></span>
              <span className="decor-box-grey "></span>
              <a href="#" onClick={(e) => e.preventDefault()}>
                View all trip plans
              </a>
            </div>
          </div>

          {isDesktop ? (
            <Swiper
              className="plannerSwiper"
              spaceBetween={32}
              onSwiper={(swiper) => (plannerSwiperRef.current = swiper)}
              breakpoints={{
                1152: { slidesPerView: 2.4 },
                1440: { slidesPerView: 2.9 },
                1920: { slidesPerView: 3.9 },
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
                      <p>Guided Tour</p>
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
                      <p>Guided Tour</p>
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
                      <p>Guided Tour</p>
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
                      <p>Guided Tour</p>
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
        </section>
        {/* Gallery-section */}
        <section className="Gallery-section animate-fadeIn-scroll">
          <div className="heading-block">
            <div className="heading-title">
              <h2>Destination Gallery</h2>
              <div className="underline-lg"></div>
            </div>
            <div className="heading-bottom section-desc-md">
              <p>Our photo gallery on trip</p>

              <div className="desktop-arrows">
                <div className="arrow-btn prev clickable">
                  <button onClick={prevGallery}>
                    <img src={prevbtn} alt="prevbtn" />
                  </button>
                </div>

                <div className="arrow-btn next clickable">
                  <button onClick={nextGallery}>
                    <img src={nextbtn} alt="next-btn" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery-desktop-wrapper">
            {galleryImages
              .slice(galleryIndex, galleryIndex + 4)
              .map((img, idx) => (
                <div
                  key={idx}
                  className={`gallery-card ${
                    activeGallery === idx ? "active" : ""
                  }`}
                  onClick={() =>
                    setActiveGallery(activeGallery === idx ? null : idx)
                  }
                >
                  <img src={img} className="gallery-img" alt="gallery" />
                </div>
              ))}
          </div>

          <div className="gallery-mobile-wrapper">
            {galleryImages
              .slice(galleryIndex, galleryIndex + 4)
              .map((img, idx) => (
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
            <div className="arrow-btn prev clickable">
              <button onClick={prevGallery}>
                <img src={prevbtn} alt="prevbtn" />
              </button>
            </div>
            <div className="arrow-btn next clickable">
              <button onClick={nextGallery}>
                <img src={nextbtn} alt="next-btn" />
              </button>
            </div>
          </div>
        </section>
        {/* experiences-gallery */}
        <section className="experiences-gallery animate-fadeIn-scroll">
          <div className="heading-block">
            <div className="heading-title">
              <h2>Traveler's Experiences</h2>
              <div className="underline-xl"></div>
            </div>
            <div className="section-desc-lg">
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
                768: { slidesPerView: 1.4 },
                1152: { slidesPerView: 2.16 },
                1440: { slidesPerView: 2.43 },
                1920: { slidesPerView: 2.55 },
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
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system and expound the
                      actual teachings of the great explorer of the truth, the
                      master- builder of human happiness.
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
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system and expound the
                      actual teachings of the great explorer of the truth, the
                      master- builder of human happiness.
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
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system and expound the
                      actual teachings of the great explorer of the truth, the
                      master- builder of human happiness.
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
            <div className="arrow-btn prev clickable">
              <button onClick={() => experiencesSwiperRef.current?.slidePrev()}>
                <img src={prevbtn} alt="prevbtn" />
              </button>
            </div>
            <div className="arrow-btn next clickable">
              <button onClick={() => experiencesSwiperRef.current?.slideNext()}>
                <img src={nextbtn} alt="next-btn" />
              </button>
            </div>
          </div>
        </section>
      </main>
      {/* footer */}
      <footer>
        <section className="animate-fadeIn-scroll">
          <div className="Our-Newsletter section-large-vertical">
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
          <div className="footer animate-fadeIn-scroll">
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
                <ul className="footer-menu clickable">
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
                <ul className="footer-menu clickable">
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
                <ul className="footer-menu clickable">
                  <li>
                    <a href="#number">+123 456 789</a>
                  </li>
                  <li>
                    <a href="#mail">info@travellian.com</a>
                  </li>
                  <li>
                    <a href="#address">1245, New Yourk, USA</a>
                  </li>
                </ul>
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
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
