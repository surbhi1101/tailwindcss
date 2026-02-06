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
import Lion from "./assets/images/Lion.png";
import RightArrow from "./assets/images/Right-arrow.png";
import LeftArrow from "./assets/images/Left-arrow.png";
import Dining from "./assets/images/Dining.png";
import Enquirenow from "./assets/images/Enquirenow.png";
import FooterImg from "./assets/images/FooterImg.png";
import Instagram from "./assets/images/Instagram.png";
import Facebook from "./assets/images/Facebook.png";
import Youtube from "./assets/images/Youtube.png";

function App() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <div>
      {/* Navbar section */}
      <nav className="fixed-header">
        <img
          src={isMobileMenuOpen ? Logo : FooterImg}
          alt="Logo"
          className={`block md:hidden h-8 sm:h-10 w-auto object-contain
 ${isMobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
        />
        <img src={Logo} alt="Logo" className="logo" />

        <ul className="navbar">
          <li>
            <a href="#">Accommodation</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">Experiences</a>
          </li>
          <li>
            <button className="white-btn btn-sm">Plan Your Trip</button>
          </li>
        </ul>
        <button
          className="menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "x" : "☰"}
        </button>
      </nav>
      {isMobileMenuOpen && (
        <div className="menu-icon">
          <ul>
            <li>
              <a href="#">Accommodation</a>
            </li>
            <li>
              <a href="#">Location</a>
            </li>
            <li>
              <a href="#">Experiences</a>
            </li>
            <li>
              <button className="border btn-sm">Plan Your Trip</button>
            </li>
          </ul>
        </div>
      )}
      {/* Header section */}
      <header className="header">
        <section className="hero animate-fadeIn-scroll">
          <div className="hero-content">
            <h1 className="header-title">Authentic African Safaris</h1>
            <button className="white-btn btn-md">Explore Accommodation</button>
          </div>
        </section>
      </header>
      {/* Our Story section */}
      <section className="hero-section animate-fadeIn-scroll">
        <div className="our-story">
          <img src={heroSection} alt="herosection image" />
          <div className="story-text-container">
            <div className="story-content">
              <div className="story-details">
                <div className="story-heading">
                  <h6 className="title">Our Story</h6>
                  <h1 className="heading-title">Tulia Amboseli Safari Camp</h1>
                  <div className="text-content ">
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
                      waterhole where daily visits from elephant, giraffe,
                      zebra, eland, cheetah, lion, wildebeest, warthog, gazelle,
                      waterbuck, and perhaps gerenuk if you are lucky, offers
                      guests an up close, intimate experience.
                    </p>
                    <p>
                      Enjoy the African Sunset during our daily sundowners at
                      the campfire and reminisce about your day's safari with
                      other guests.
                    </p>
                  </div>
                </div>
              </div>
              <button className="golden-btn w-40 items-center lg:w-39.5">
                Our Story
              </button>
            </div>
          </div>
        </div>

        <img src={Path} alt="path" />
      </section>
      {/* why-book-with-us section */}
      <section className="why-book-with-us animate-fadeIn-scroll">
        <div className="why-book-inner">
          <h1 className="main-title">Why book with us?</h1>
          <div className="book-section">
            <div className="info-block">
              <div className="icon-title">
                <img src={Location} alt="Location" />
                <h6 className="title">Location, Location, Location</h6>
              </div>
              <p>
                Our portfolio features properties in Africa's most celebrated
                wildlife regions, ensuring that our guests get as close to the
                action as possible
              </p>
            </div>
            <div className="info-block">
              <div className="icon-title">
                <img src={Heart} alt="Heart" />
                <h6 className="title"> Our Impact</h6>
              </div>
              <p>
                We're committed to supporting conservation, education and
                empowerment in the reserves and communities we call home.
              </p>
            </div>
            <div className="info-block">
              <div className="icon-title">
                <img src={Compass} alt="Compass" />
                <h6 className="title">Authentic Experiences</h6>
              </div>
              <p>
                Whether it's game viewing, climbing Kilimanjaro, diving in
                Zanzibar or just relaxing in a pristine hideaway, we'll help you
                fulfil your wildest dreams.
              </p>
            </div>
            <div className="info-block">
              <div className="icon-title">
                <img src={Sunset} alt="Sunset" />
                <h6 className="title">The Spirit of Tulia</h6>
              </div>
              <p>
                Each member of the Tulia team is committed and thrilled to be
                able to share our properties and experiences with our guests.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* our-accommodation section */}
      <section className="our-accommodation animate-fadeIn-scroll">
        <div className="accommodation-content">
          <div className="accommodation-heading">
            <h1 className="heading-title">Our Accommodation</h1>
            <button className="golden-btn btn-md">Explore All</button>
          </div>
          <p className="w-full lg:w-154.75">
            Spread over lush greenery, ample space for privacy and a chance to
            relax and rejuvenate, Tulia Amboseli Safari Camp offers spacious
            Tents, each with stunning views of Mt Kilimanjaro.
          </p>
        </div>
        <div className="our-accommodation-grid">
          <div className="relative">
            <img
              src={SuperbTents}
              alt="Superb Tents"
              className="our-accommodation-img"
            />
            <div className="overlay-content">
              <h2 className="tent-title">Superb Tents</h2>
              <a className="explore-link">Explore</a>
            </div>
          </div>
          <div className="relative">
            <img
              src={SuperbFamilyTents}
              alt="SuperbFamilyTents"
              className="our-accommodation-img"
            />
            <div className="overlay-content">
              <h2 className="tent-title">Superb Family Tents</h2>
              <a className="explore-link">Explore</a>
            </div>
          </div>
          <div className="relative">
            <img
              src={DeluxeTents}
              alt="DeluxeTents"
              className="our-accommodation-img"
            />
            <div className="overlay-content">
              <h2 className="tent-title">Deluxe Tents</h2>
              <a className="explore-link">Explore</a>
            </div>
          </div>
        </div>
      </section>
      {/* Experiences section */}
      <section className="experiences-wrapper animate-fadeIn-scroll">
        <img src={Lion} alt="Lion" className="experiences-img" />
        <div className="experiences">
          <div className="experiences-content">
            <div className="experiences-heading">
              <h6 className="title">Experiences</h6>
              <h1 className="heading-title">Breathe in the Real Africa</h1>
            </div>
            <p>
              Nothing can prepare you for a trip to Africa - the vast
              landscapes, the thrilling encounters with big game, the details
              brought to life by your expert guides. It's in the cool of the
              morning and afternoon that your senses will be most alive,
              stimulated whether you are on foot, atop a horse, in a game
              vehicle, hot air balloon or boat.
            </p>
          </div>
          <div className="experience-actions">
            <button className="white-btn btn-md">Explore Accommodation</button>
            <div className="game-drives">
              <p>Game Drives</p>
              <button>
                <img src={LeftArrow} />
              </button>
              <button>
                <img src={RightArrow} />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Dining section */}
      <section className="Dining animate-fadeIn-scroll ">
        <img src={Dining} alt="Dining" />
        <div className="Dining-grid">
          <div className="Dining-subsection">
            <h6 className="title">Dining</h6>
            <h1 className="heading-title">Dine in the open</h1>
            <div className="text-content">
              <p>
                Enjoy cereals, fresh fruit, and pastries along with a hot
                breakfast in the morning.For lunch we offer the option of a
                packed lunch on safari or a cooked 3-course lunch back at the
                camp, depending on your plans for the day.In the evening, our
                chef will prepare a delicious 4-course meal that can be
                accompanied by a selection of fine wines or a drink from the
                fully stocked bar.
                <span className="block">
                  The highly trained chefs will cater to any dietary
                  restrictions.
                </span>
              </p>
            </div>
          </div>
          <button className="golden-btn w-50">Explore Dining</button>
        </div>
      </section>
      {/* Enquire section  */}
      <section className="EnquireNow animate-fadeIn-scroll">
        <img src={Path2} alt="path2" className="w-screen" />
        <div className="swiper-wrapper-custom">
          <div className="swiper-button-prev" ref={prevRef}>
            <img src={LeftArrow} alt="Left arrow" />
          </div>
          <div className="swiper-button-next" ref={nextRef}>
            <img src={RightArrow} alt="Right arrow" />
          </div>

          <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            onSwiper={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide">
                <img
                  src={Enquirenow}
                  alt="Enquirenow"
                  srcSet=""
                  className="w-screen"
                />
                <div className="slide-content">
                  <p className="review">
                    “I visited this beautiful property in the wilderness just
                    outside the gates of Amboseli. It's a myth that one needs to
                    stay inside the park. I would stay at this property any day.
                    You face Mt. Kilimanjaro and usually have elephants visit
                    you every evening. The service is fantastic and when on
                    safari one needs to get the full experience which is what
                    this camp does for you. Very comfortable with excellent
                    food. Yes! Very very highly recommended.”
                  </p>
                  <span className="author">Ranjan P</span>
                  <button className="white-btn btn-md">Enquire Now Trip</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <img
                  src={Enquirenow}
                  alt="Enquirenow"
                  srcSet=""
                  className="w-screen"
                />
                <div className="slide-content">
                  <p className="review">
                    “I visited this beautiful property in the wilderness just
                    outside the gates of Amboseli. It's a myth that one needs to
                    stay inside the park. I would stay at this property any day.
                    You face Mt. Kilimanjaro and usually have elephants visit
                    you every evening. The service is fantastic and when on
                    safari one needs to get the full experience which is what
                    this camp does for you. Very comfortable with excellent
                    food. Yes! Very very highly recommended.”
                  </p>
                  <span className="author">Ranjan P</span>
                  <button className="white-btn btn-md">Enquire Now Trip</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <img
                  src={Enquirenow}
                  alt="Enquirenow"
                  srcSet=""
                  className="w-screen"
                />
                <div className="slide-content">
                  <p className="review">
                    “I visited this beautiful property in the wilderness just
                    outside the gates of Amboseli. It's a myth that one needs to
                    stay inside the park. I would stay at this property any day.
                    You face Mt. Kilimanjaro and usually have elephants visit
                    you every evening. The service is fantastic and when on
                    safari one needs to get the full experience which is what
                    this camp does for you. Very comfortable with excellent
                    food. Yes! Very very highly recommended.”
                  </p>
                  <span className="author">Ranjan P</span>
                  <button className="white-btn btn-md">Enquire Now Trip</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* footer section */}
      <footer>
        <div className="footer-section animate-fadeIn-scroll">
          <div className="news-text">
            <p>Hear the latest news about Tulia</p>
            <div className="footer-input">
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
              <button className="footer-btn">Subscribe</button>
            </div>
          </div>
          <div className="footer-details">
            <div>
              <img src={FooterImg} alt="Footer Image" srcSet="" />
              <p className="footer-detail">
                Tulia Amboseli Safari Camp is an eco-friendly safari camp just
                outside of Kimana Gate in the southeast area of the Amboseli
                National Park in Kenya.
              </p>
              <div className="socialmedia-links">
                <img src={Instagram} alt="Instagram" />
                <img src={Facebook} alt="Facebook" />
                <img src={Youtube} alt="Youtube" />
              </div>
            </div>
            <div className="footer-links">
              <p className="links-title">About</p>
              <ul>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Location</a>
                </li>
                <li>
                  <a href="#">Dining</a>
                </li>
                <li>
                  <a href="#">Rates</a>
                </li>
                <li>
                  <a href="#">Live Availability</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <p className="links-title">Accommodation</p>
              <ul>
                <li>
                  <a href="#">Superb tents</a>
                </li>
                <li>
                  <a href="#">Superb family tents</a>
                </li>
                <li>
                  <a href="#">Deluxe tents</a>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <p className="links-title">Experiences</p>
              <ul>
                <li>
                  <a href="#">Game Drives</a>
                </li>
                <li>
                  <a href="#">Balloon</a>
                </li>
                <li>
                  <a href="#">Safaris</a>
                </li>
                <li>
                  <a href="#">Bush walks</a>
                </li>
                <li>
                  <a href="#">Spa</a>
                </li>
                <li>
                  <a href="#">Bush Breakfast</a>
                </li>
                <li>
                  <a href="#">Sundowners</a>
                </li>
                <li>
                  <a href="#">Cultural Tours</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
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
