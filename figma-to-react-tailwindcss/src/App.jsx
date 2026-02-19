import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./assets/css/app.css";
import Logo from "./assets/images/Logo.png";
import Path from "./assets/images/path.png";
import Path2 from "./assets/images/path2.png";
import heroSection from "./assets/images/hero-section.png";
import Location from "./assets/images/Location.png";
import Heart from "./assets/images/Heart.png";
import Compass from "./assets/images/Compass.png";
import Sunset from "./assets/images/Sunset.png";
import SuperbTents from "./assets/images/SuperbTents.png";
import SuperbFamilyTents from "./assets/images/SuperbFamilyTents.png";
import DeluxeTents from "./assets/images/DeluxeTents.png";
import RightArrow from "./assets/images/Right-arrow.png";
import LeftArrow from "./assets/images/Left-arrow.png";
import Lion from "./assets/images/Lion.png";
import Dining from "./assets/images/Dining.png";
import ArrowIcon from "./assets/images/ArrowIcon.png";
import Enquirenow from "./assets/images/Enquirenow.png";
import FooterImg from "./assets/images/FooterImg.png";
import Instagram from "./assets/images/Instagram.png";
import Facebook from "./assets/images/Facebook.png";
import Youtube from "./assets/images/Youtube.png";

function App() {
  const expPrevRef = useRef(null);
  const expNextRef = useRef(null);

  const enquirePrevRef = useRef(null);
  const enquireNextRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [expSwiper, setExpSwiper] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("siteHeader");

      if (window.scrollY > 200) {
        header.classList.add("header-sticky");
      } else {
        header.classList.remove("header-sticky");
      }
    };
    window.addEventListener("scroll", handleScroll);
    const scrollElements = document.querySelectorAll(".animate-fadeIn-scroll");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "fadeInScroll 1s forwards";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <nav className="fixed-header" id="siteHeader">
        <button
          className="menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        <img src={Logo} alt="Logo" className="logo-size" />

        <a className="btn white-btn tracking-sm plan-btn" href="#planyoutrip">
          Plan Your Trip
        </a>

        <ul className="navbar text-white-primary">
          <li>
            <a href="#accommodation">Accommodation</a>
          </li>
          <li>
            <a href="#location">Location</a>
          </li>
          <li>
            <a href="#experiences">Experiences</a>
          </li>
          <a className="white-btn btn tracking-sm " href="#planyoutrip">
            Plan Your Trip
          </a>
        </ul>

        {isMobileMenuOpen && (
          <div className="menu-icon">
            <ul className="flex-col-layout">
              <li>
                <a href="#accommodation">Accommodation</a>
              </li>
              <li>
                <a href="#location">Location</a>
              </li>
              <li>
                <a href="#experiences">Experiences</a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Header section */}
      <header className="header">
        <section className="hero animate-fadeIn-scroll">
          <div className="hero-content">
            <div className="heading-title title-white text-dance">
              <h1>Authentic African Safaris</h1>
            </div>
            <a className="btn white-btn tracking-md" href="#explore">
              Explore Accommodation
            </a>
          </div>
        </section>
      </header>
      <main>
        {/* Our Story section */}
        <section className="section-container animate-fadeIn-scroll">
          <div className="our-story grid-responsive-2">
            <img
              src={heroSection}
              alt="View of Tulia Amboseli Safari Camp near Mt Kilimanjaro"
              className="img-cover-full"
            />
            <div className="story-content">
              <div className="story-text">
                <div className="story-heading">
                  <div className="sub-title">
                    <h6>Our Story</h6>
                  </div>
                  <div className="title-md type-heading">
                    <h2>Tulia Amboseli Safari Camp</h2>
                  </div>
                </div>
                <div className="text-content text-muted">
                  <p>
                    Tulia Amboseli Safari Camp is an eco-friendly safari camp
                    just outside of Kimana Gate in the southeast area of the
                    Amboseli National Park in Kenya.
                  </p>
                  <p>
                    As a small, tented camp, Tulia offers an intimacy like no
                    other camp in the area. Each tent opens to Mt Kilimanjaro
                    and offers wonderful views of both sunrise and sunset. The
                    welcoming restaurant and lounge overlook a very active
                    waterhole where daily visits from elephant, giraffe, zebra,
                    eland, cheetah, lion, wildebeest, warthog, gazelle,
                    waterbuck, and perhaps gerenuk if you are lucky, offers
                    guests an up close, intimate experience.
                  </p>
                  <p>
                    Enjoy the African Sunset during our daily sundowners at the
                    campfire and reminisce about your day's safari with other
                    guests.
                  </p>
                </div>
              </div>
              <div className="cta-wrapper">
                <button className="btn golden-btn shadow tracking-md">
                  Our Story
                </button>
              </div>
            </div>
          </div>
          <img src={Path} alt="path" />
        </section>
        {/* why-book-with-us section */}
        <section className="animate-fadeIn-scroll p-responsive">
          <div className="why-book-inner page-container">
            <div className="title-light main-heading text-32 type-heading text-dance">
              <h2>Why book with us?</h2>
            </div>
            <div className="book-section grid-responsive-4">
              <div className="info-block">
                <div className="icon-title g-20">
                  <img src={Location} alt="Location" />
                  <h6 className="icon-title-text">
                    Location, Location, Location
                  </h6>
                </div>
                <div className="text-muted info-text">
                  <p>
                    Our portfolio features properties in Africa's most
                    celebrated wildlife regions, ensuring that our guests get as
                    close to the action as possible
                  </p>
                </div>
              </div>
              <div className="info-block">
                <div className="icon-title g-20">
                  <img src={Heart} alt="Heart" />
                  <h6 className="icon-title-text"> Our Impact</h6>
                </div>
                <div className="text-muted info-text">
                  <p>
                    We're committed to supporting conservation, education and
                    empowerment in the reserves and communities we call home.
                  </p>
                </div>
              </div>
              <div className="info-block">
                <div className="icon-title g-20">
                  <img src={Compass} alt="Compass" />
                  <h6 className="icon-title-text">Authentic Experiences</h6>
                </div>
                <div className="text-muted info-text">
                  <p>
                    Whether it's game viewing, climbing Kilimanjaro, diving in
                    Zanzibar or just relaxing in a pristine hideaway, we'll help
                    you fulfil your wildest dreams.
                  </p>
                </div>
              </div>
              <div className="info-block">
                <div className="icon-title g-20">
                  <img src={Sunset} alt="Sunset" />
                  <h6 className="icon-title-text">The Spirit of Tulia</h6>
                </div>
                <div className="text-muted info-text">
                  <p>
                    Each member of the Tulia team is committed and thrilled to
                    be able to share our properties and experiences with our
                    guests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* our-accommodation section */}
        <section className="our-accommodation section-mt animate-fadeIn-scroll p-responsive">
          <div className="accommodation-content">
            <div className="accommodation-heading">
              <div className="main-heading type-heading text-dance">
                <h2>Our Accommodation</h2>
              </div>

              <div className="explore-action">
                <button className="btn golden-btn tracking-md">
                  Explore All
                </button>
              </div>
            </div>
            <div className="accommodation-detail text-muted">
              <p>
                Spread over lush greenery, ample space for privacy and a chance
                to relax and rejuvenate, Tulia Amboseli Safari Camp offers
                spacious Tents, each with stunning views of Mt Kilimanjaro.
              </p>
            </div>
            <div className="mobile-explore">
              <button className="btn golden-btn tracking-md">
                Explore All
              </button>
            </div>
          </div>
          <div className="accommodation-card grid-responsive-3">
            <div className="section-container">
              <img
                src={SuperbTents}
                alt="Superb Tents"
                className="img-cover-full"
              />
              <div className="overlay-content">
                <div className="tent-heading title-white">
                  <div className="tent-title">
                    <h3>Superb Tents</h3>
                  </div>
                  <div className="explore-link">
                    <a>Explore</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <img
                src={SuperbFamilyTents}
                alt="SuperbFamilyTents"
                className="img-cover-full"
              />
              <div className="overlay-content">
                <div className="tent-heading title-white">
                  <div className="tent-title">
                    <h3>Superb Family Tents</h3>
                  </div>
                  <div className="explore-link">
                    <a href="#">Explore</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <img
                src={DeluxeTents}
                alt="DeluxeTents"
                className="img-cover-full"
              />
              <div className="overlay-content">
                <div className="tent-heading title-white">
                  <div className="tent-title">
                    <h3>Deluxe Tents</h3>
                  </div>
                  <div className="explore-link">
                    <a>Explore</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experiences section */}
        <section className="experiences-wrapper section-mt animate-fadeIn-scroll">
          <div className="swiper-wrapper-custom">
            <Swiper
              modules={[Navigation, Mousewheel, Keyboard]}
              mousewheel={false}
              keyboard={true}
              onSwiper={(swiper) => {
                setExpSwiper(swiper);
                swiper.params.navigation.prevEl = expPrevRef.current;
                swiper.params.navigation.nextEl = expNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="experiences overlay-section">
                  <img src={Lion} alt="Lion" className="media-cover " />
                  <div className="experiences-details p-responsive absolute-center-col">
                    <div className="experiences-content">
                      <div className="experiences-heading title-white">
                        <div className="sub-title">
                          <h6>Experiences</h6>
                        </div>
                        <div className="title-md type-heading">
                          <h2>Breathe in the Real Africa</h2>
                        </div>
                      </div>
                      <div className="experiences-description text-white-primary">
                        <p>
                          Nothing can prepare you for a trip to Africa - the
                          vast landscapes, the thrilling encounters with big
                          game, the details brought to life by your expert
                          guides. It's in the cool of the morning and afternoon
                          that your senses will be most alive, stimulated
                          whether you are on foot, atop a horse, in a game
                          vehicle, hot air balloon or boat.
                        </p>
                      </div>
                    </div>
                    <div className="experience-actions">
                      <button className="btn white-btn tracking-sm">
                        Explore Experiences
                      </button>

                      <div className="game-drives">
                        <div className="text-white-primary">
                          <p>Game Drives</p>
                        </div>
                        <div className="arrow-btn">
                          <button onClick={() => expSwiper?.slidePrev()}>
                            <img src={LeftArrow} alt="Previous" />
                          </button>

                          <button onClick={() => expSwiper?.slideNext()}>
                            <img src={RightArrow} alt="Next" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="experiences overlay-section">
                  <img src={Lion} alt="Lion" className="media-cover " />
                  <div className="experiences-details p-responsive absolute-center-col">
                    <div className="experiences-content">
                      <div className="experiences-heading title-white">
                        <div className="sub-title">
                          <h6>Experiences</h6>
                        </div>
                        <div className="title-md type-heading">
                          <h2>Breathe in the Real Africa</h2>
                        </div>
                      </div>
                      <div className="experiences-description text-white-primary">
                        <p>
                          Nothing can prepare you for a trip to Africa - the
                          vast landscapes, the thrilling encounters with big
                          game, the details brought to life by your expert
                          guides. It's in the cool of the morning and afternoon
                          that your senses will be most alive, stimulated
                          whether you are on foot, atop a horse, in a game
                          vehicle, hot air balloon or boat.
                        </p>
                      </div>
                    </div>
                    <div className="experience-actions">
                      <button className="btn white-btn tracking-sm">
                        Explore Experiences
                      </button>

                      <div className="game-drives">
                        <div className="text-white-primary">
                          <p>Game Drives</p>
                        </div>
                        <div className="arrow-btn">
                          <button onClick={() => expSwiper?.slidePrev()}>
                            <img src={LeftArrow} alt="Previous" />
                          </button>

                          <button onClick={() => expSwiper?.slideNext()}>
                            <img src={RightArrow} alt="Next" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="experiences overlay-section">
                  <img src={Lion} alt="Lion" className="media-cover " />
                  <div className="experiences-details p-responsive absolute-center-col">
                    <div className="experiences-content">
                      <div className="experiences-heading title-white">
                        <div className="sub-title">
                          <h6>Experiences</h6>
                        </div>
                        <div className="title-md type-heading">
                          <h2>Breathe in the Real Africa</h2>
                        </div>
                      </div>
                      <div className="experiences-description text-white-primary">
                        <p>
                          Nothing can prepare you for a trip to Africa - the
                          vast landscapes, the thrilling encounters with big
                          game, the details brought to life by your expert
                          guides. It's in the cool of the morning and afternoon
                          that your senses will be most alive, stimulated
                          whether you are on foot, atop a horse, in a game
                          vehicle, hot air balloon or boat.
                        </p>
                      </div>
                    </div>
                    <div className="experience-actions">
                      <button className="btn white-btn tracking-sm">
                        Explore Experiences
                      </button>

                      <div className="game-drives">
                        <div className="text-white-primary">
                          <p>Game Drives</p>
                        </div>
                        <div className="arrow-btn">
                          <button onClick={() => expSwiper?.slidePrev()}>
                            <img src={LeftArrow} alt="Previous" />
                          </button>

                          <button onClick={() => expSwiper?.slideNext()}>
                            <img src={RightArrow} alt="Next" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* Dining section */}
        <section className="Dining section-mt animate-fadeIn-scroll ">
          <div className="dining-detail grid-responsive-2">
            <img
              src={Dining}
              alt="Dine in the open"
              className="img-cover-full"
            />
            <div className="dining-content">
              <div className="dining-subsection">
                <div className="sub-title">
                  <h6>Dining</h6>
                </div>
                <div className="title-md type-heading">
                  <h2>Dine in the open</h2>
                </div>
                <div className="text-muted">
                  <p>
                    Enjoy cereals, fresh fruit, and pastries along with a hot
                    breakfast in the morning.For lunch we offer the option of a
                    packed lunch on safari or a cooked 3-course lunch back at
                    the camp, depending on your plans for the day.In the
                    evening, our chef will prepare a delicious 4-course meal
                    that can be accompanied by a selection of fine wines or a
                    drink from the fully stocked bar.
                  </p>
                  <p>
                    The highly trained chefs will cater to any dietary
                    restrictions.
                  </p>
                </div>
              </div>
              <div className="cta-wrapper">
                <button className="btn golden-btn tracking-md">
                  Explore Dining
                </button>
              </div>
            </div>
          </div>
        </section>
        <img src={Path2} alt="path2" className="path" />

        {/* Enquire section  */}
        <section className="section-container animate-fadeIn-scroll">
          <div className="swiper-wrapper-custom">
            <div className="swipe-btn">
              <div className="swiper-button-prev" ref={enquirePrevRef}>
                <img src={LeftArrow} alt="Left arrow" className="arrow" />
              </div>
              <div className="swiper-button-next" ref={enquireNextRef}>
                <img src={RightArrow} alt="Right arrow" className="arrow" />
              </div>
            </div>
            <Swiper
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              navigation={{
                prevEl: enquirePrevRef.current,
                nextEl: enquireNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = enquirePrevRef.current;
                swiper.params.navigation.nextEl = enquireNextRef.current;
              }}
              pagination={true}
              keyboard={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="slide overlay-section">
                  <img
                    src={Enquirenow}
                    alt="Enquirenow"
                    className="media-cover "
                  />
                  <div className="slide-content absolute-center">
                    <div className="review text-white-primary type-heading">
                      <p>
                        “I visited this beautiful property in the wilderness
                        just outside the gates of Amboseli. It's a myth that one
                        needs to stay inside the park. I would stay at this
                        property any day. You face Mt. Kilimanjaro and usually
                        have elephants visit you every evening. The service is
                        fantastic and when on safari one needs to get the full
                        experience which is what this camp does for you. Very
                        comfortable with excellent food. Yes! Very very highly
                        recommended.”
                      </p>
                      <div className="author">
                        <span>Ranjan P</span>
                      </div>
                    </div>
                    <button className="btn white-btn tracking-md">
                      Enquire Now Trip
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide overlay-section">
                  <img
                    src={Enquirenow}
                    alt="Enquirenow"
                    className="media-cover "
                  />
                  <div className="slide-content absolute-center">
                    <div className="review text-white-primary type-heading">
                      <p>
                        “I visited this beautiful property in the wilderness
                        just outside the gates of Amboseli. It's a myth that one
                        needs to stay inside the park. I would stay at this
                        property any day. You face Mt. Kilimanjaro and usually
                        have elephants visit you every evening. The service is
                        fantastic and when on safari one needs to get the full
                        experience which is what this camp does for you. Very
                        comfortable with excellent food. Yes! Very very highly
                        recommended.”
                      </p>
                      <div className="author">
                        <span>Ranjan P</span>
                      </div>
                    </div>
                    <button className="btn white-btn tracking-md">
                      Enquire Now Trip
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide overlay-section">
                  <img
                    src={Enquirenow}
                    alt="Enquirenow"
                    className="media-cover"
                  />
                  <div className="slide-content absolute-center">
                    <div className="review text-white-primary type-heading">
                      <p>
                        “I visited this beautiful property in the wilderness
                        just outside the gates of Amboseli. It's a myth that one
                        needs to stay inside the park. I would stay at this
                        property any day. You face Mt. Kilimanjaro and usually
                        have elephants visit you every evening. The service is
                        fantastic and when on safari one needs to get the full
                        experience which is what this camp does for you. Very
                        comfortable with excellent food. Yes! Very very highly
                        recommended.”
                      </p>
                      <div className="author">
                        <span>Ranjan P</span>
                      </div>
                    </div>
                    <button className="btn white-btn tracking-md">
                      Enquire Now Trip
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </main>
      {/* footer section */}
      <footer className="bg-light">
        <div className="footer-section animate-fadeIn-scroll">
          <div className="news-text">
            <p>Hear the latest news about Tulia</p>
            <div className="footer-input grid-footer-input">
              <input type="text" name="name" id="name" placeholder="Name" />
              <input
                type="text"
                name="surname"
                id="surname"
                placeholder="Surname"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
              <button className="footer-btn btn shadow">Subscribe</button>
            </div>
          </div>
          <div className="footer-details grid-footer-details g-20">
            <div className="footer-brand">
              <div className="logo-size">
                <img src={FooterImg} alt="Footer Image" srcSet="" />
              </div>
              <div className="footer-detail title-light text-light ">
                <p>
                  Tulia Amboseli Safari Camp is an eco-friendly safari camp just
                  outside of Kimana Gate in the southeast area of the Amboseli
                  National Park in Kenya.
                </p>
              </div>
              <div className="socialmedia-links g-10">
                <img src={Instagram} alt="Instagram" />
                <img src={Facebook} alt="Facebook" />
                <img src={Youtube} alt="Youtube" />
              </div>
            </div>
            <div className="footer-links">
              <button
                className="links-title"
                onClick={() => toggleMenu("about")}
              >
                <span>About </span>
                <img
                  src={ArrowIcon}
                  alt="Dropdown"
                  className={`dropdown-arrow ${openMenu === "about" ? "rotate-180" : ""}`}
                />
              </button>

              <hr />
              <ul
                className={`
        title-light text-faded flex-col md:flex 
      ${openMenu === "about" ? "flex" : "hidden"}
    `}
              >
                <li>
                  <a href="#ourstory">Our Story</a>
                </li>
                <li>
                  <a href="#location">Location</a>
                </li>
                <li>
                  <a href="#dining">Dining</a>
                </li>
                <li>
                  <a href="#rates">Rates</a>
                </li>
                <li>
                  <a href="#liveavailability">Live Availability</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
                <li>
                  <a href="#contactus">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <button
                className="links-title"
                onClick={() => toggleMenu("accommodation")}
              >
                <span>Accommodation </span>
                <img
                  src={ArrowIcon}
                  alt="Dropdown"
                  className={`dropdown-arrow ${openMenu === "accommodation" ? "rotate-180" : ""}`}
                />
              </button>
              <hr />
              <ul
                className={`title-light text-faded flex-col md:flex ${openMenu === "accommodation" ? "flex" : "hidden"}`}
              >
                <li>
                  <a href="#superbtents">Superb tents</a>
                </li>
                <li>
                  <a href="#superbfamilytents">Superb family tents</a>
                </li>
                <li>
                  <a href="#deluxetents">Deluxe tents</a>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <button
                className="links-title "
                onClick={() => toggleMenu("experiences")}
              >
                <span>Experiences </span>
                <img
                  src={ArrowIcon}
                  alt="Dropdown"
                  className={`dropdown-arrow ${openMenu === "experiences" ? "rotate-180" : ""}`}
                />
              </button>
              <hr />
              <ul
                className={`
       title-light text-faded flex-col md:flex
      ${openMenu === "experiences" ? "flex" : "hidden"}
    `}
              >
                <li>
                  <a href="#gamedrives">Game Drives</a>
                </li>
                <li>
                  <a href="#balloon">Balloon</a>
                </li>
                <li>
                  <a href="#safaris">Safaris</a>
                </li>
                <li>
                  <a href="#bushwalks">Bush walks</a>
                </li>
                <li>
                  <a href="#spa">Spa</a>
                </li>
                <li>
                  <a href="#bushbreakfast">Bush Breakfast</a>
                </li>
                <li>
                  <a href="#sundowners">Sundowners</a>
                </li>
                <li>
                  <a href="#culturaltours">Cultural Tours</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="footer-hr" />
        <div className="rights-reserved">
          <p>All rights reserved © 2025 Tulia</p>
          <div className="policy-links">
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
