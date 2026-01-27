import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./App.css";
import Logo from "./assets/Logo.png";
import Path from "./assets/path.png";
import Path2 from "./assets/path2.png";
import heroSection from "./assets/hero-section.png";
import Location from "./assets/Location.png";
import Heart from "./assets/Heart.png";
import Compass from "./assets/Compass.png";
import Sunset from "./assets/Sunset.png";
import SuperbTents from "./assets/SuperbTents.png";
import SuperbFamilyTents from "./assets/SuperbFamilyTents.png";
import DeluxeTents from "./assets/DeluxeTents.png";
import Lion from "./assets/Lion.png";
import RightArrow from "./assets/Right-arrow.png";
import LeftArrow from "./assets/Left-arrow.png";
import Dining from "./assets/Dining.png";
import Enquirenow from "./assets/Enquirenow.png";
import FooterImg from "./assets/FooterImg.png";
import Instagram from "./assets/Instagram.png";
import Facebook from "./assets/Facebook.png";
import Youtube from "./assets/Youtube.png";

function App() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isMobileDropDownOpen, setIsMobileDropDownOpen] = useState(false);
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
    <div className="container animate-fadeIn-scroll">
      <header className="header min-h-screen relative">
        <nav className="fixed top-0 left-0 w-full justify-between flex">
          <img src={Logo} alt="Logo" />
          <ul className="hidden md:flex gap-8 items-center text-white font-poppins">
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
              <button className="white-btn w-166">Plan Your Trip</button>
            </li>
          </ul>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
          {isMobileMenuOpen && (
            <div className="md:hidden px-4 py-6">
              <ul className="flex gap-8 items-center text-white font-poppins">
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
                  <button className="white-btn w-166">Plan Your Trip</button>
                </li>
              </ul>
            </div>
          )}
        </nav>
        <section className="hero absolute animate-fadeIn-scroll">
          <div className="text-center items-center flex flex-col gap-8">
            <p className=" text-white text-50 font-light tracking-[1.14px]">
              Authentic African Safaris
            </p>
            <button className="white-btn w-291">Explore Accommodation</button>
          </div>
        </section>
      </header>

      <section className="hero-section relative top-20 animate-fadeIn-scroll">
        <div className="grid grid-cols-2 items-center">
          <div className="flex justify-center">
            <img src={heroSection} alt="herosection image" className="h-630" />
          </div>
          <div className="flex flex-col gap-4 w-491 content">
            <p className="title text-color">Our Story</p>
            <p className="heading-title">Tulia Amboseli Safari Camp</p>
            <p className="text-paragraph">
              Tulia Amboseli Safari Camp is an eco-friendly safari camp just
              outside of Kimana Gate in the southeast area of the Amboseli
              National Park in Kenya.
            </p>
            <p className="text-paragraph">
              lia offers an intimacy like no other camp in the area. Each tent
              opens to Mt Kilimanjaro and offers wonderful views of both sunrise
              and sunset. The welcoming restaurant and lounge overlook a very
              active waterhole where daily visits from elephant, giraffe, zebra,
              eland, cheetah, lion, wildebeest, warthog, gazelle, waterbuck, and
              perhaps gerenuk if you are lucky, offers guests an up close,
              intimate experience.
            </p>
            <p className="text-paragraph">
              Enjoy the African Sunset during our daily sundowners at the
              campfire and reminisce day's safari with other guests.
            </p>

            <button className="golden-btn w-158">Our Story</button>
          </div>
        </div>
      </section>

      <img src={Path} alt="path" className="path" />

      <section className="why-book-with-us animate-fadeIn-scroll">
        <p className="section-title">Why book with us?</p>
        <div className="grid grid-cols-4 items-center justify-center gap-8 relative">
          <div className="flex flex-col items-center gap-4">
            <img src={Location} alt="Location" />
            <p className="title text-color items-center">
              Location, Location, Location
            </p>
            <p className="text-paragraph">
              Our portfolio features properties in Africa's most celebrated
              wildlife regions, ensuring that our guests get as close to the
              action as possible
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={Heart} alt="Heart" />
            <p className="title text-color"> Our Impact</p>
            <p className="text-paragraph">
              We're committed to supporting conservation, education and
              empowerment in the reserves and communities we call home.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={Compass} alt="Compass" />
            <p className="title text-color">Authentic Experiences</p>
            <p className="text-paragraph">
              Whether it's game viewing, climbing Kilimanjaro, diving in
              Zanzibar or just relaxing in a pristine hideaway, we'll help you
              fulfil your wildest dreams.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={Sunset} alt="Sunset" />
            <p className="title text-color">The Spirit of Tulia</p>
            <p className="text-paragraph">
              Each member of the Tulia team is committed and thrilled to be able
              to share our properties and experiences with our guests.
            </p>
          </div>
        </div>
      </section>

      <section className="our-accommodation animate-fadeIn-scroll">
        <div className="flex items-center justify-between">
          <p className="heading-title">Our Accommodation</p>
          <button className="golden-btn self-end">Explore All</button>
        </div>
        <p className="text-paragraph w-619">
          Spread over lush greenery, ample space for privacy and a chance to
          relax and rejuvenate, Tulia Amboseli Safari Camp offers spacious
          Tents, each with stunning views of Mt Kilimanjaro.
        </p>
        <div className="grid grid-cols-3 gap-41">
          <div className="relative">
            <img src={SuperbTents} alt="Superb Tents" className="w-full" />
            <div className="overlay-content">
              <p className="tent-title">Superb Tents</p>
              <p className="explore-btn">Explore</p>
            </div>
          </div>
          <div className="relative">
            <img src={SuperbFamilyTents} alt="SuperbFamilyTents" />
            <div className="overlay-content">
              <p className="tent-title">Superb Family Tents</p>
              <p className="explore-btn">Explore</p>
            </div>
          </div>
          <div className="relative">
            <img src={DeluxeTents} alt="DeluxeTents" />
            <div className="overlay-content">
              <p className="tent-title">Deluxe Tents</p>
              <p className="explore-btn">Explore</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrapper animate-fadeIn-scroll">
        <div className="relative">
          <img src={Lion} alt="Lion" className="w-full" />
          <div className="experience">
            <div className="flex flex-col gap-30">
              <p className="title">Experiences</p>
              <p className="heading-title">Breathe in the Real Africa</p>
              <p className="w-40">
                Nothing can prepare you for a trip to Africa - the vast
                landscapes, the thrilling encounters with big game, the details
                brought to life by your expert guides. It's in the cool of the
                morning and afternoon that your senses will be most alive,
                stimulated whether you are on foot, atop a horse, in a game
                vehicle, hot air balloon or boat.
              </p>
            </div>
            <div className="flex items-end justify-between mt-8">
              <button className="white-btn w-291">Explore Accommodation</button>
              <div className="flex items-center gap-10 mr-100">
                <p>Game Drives</p>
                <button>
                  <img src={LeftArrow} alt="Left arrow" />
                </button>
                <button>
                  <img src={RightArrow} alt="Right arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Dining animate-fadeIn-scroll">
        <div className="grid grid-cols-2 gap-0 h-full">
          <img src={Dining} alt="" className="h-full w-full" />
          <div className="content bg-grey">
            <div className="gap-24 flex flex-col">
              <p className="title">Dining</p>
              <p className="heading-title">Dine in the open</p>
              <p className="text-paragraph w-63">
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
              <button className="golden-btn w-32">Explore Dining</button>
            </div>
          </div>
        </div>
      </section>

      <section className="EnquireNow animate-fadeIn-scroll">
        <img src={Path2} alt="path2" className="path2" />
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
                <img src={Enquirenow} alt="Enquirenow" srcSet="" />
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
                  <button className="white-btn w-291">Enquire Now Trip</button>
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
                    <span className="author">Ranjan P</span>
                    <button className="white-btn w-291">
                      Enquire Now Trip
                    </button>
                  </p>
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
                  <button className="white-btn w-291">Enquire Now Trip</button>
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
                  <button className="white-btn w-291">Enquire Now Trip</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <footer>
        <div className="footer-section animate-fadeIn-scroll">
          <p className="text-36">Hear the latest news about Tulia</p>
          <div className="flex grid-cols-4 gap-26">
            <div>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Name"
                className="footer-input w-294"
              />
            </div>
            <div>
              <input
                type="text"
                name="surname"
                id="surname"
                placeholder="Surname"
                className="footer-input w-294"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="footer-input w-377"
              />
            </div>
            <div>
              <button className="footer-btn">Subscribe</button>
            </div>
          </div>
          <div className="grid grid-cols-4 footer-details">
            <div>
              <img src={FooterImg} alt="" srcSet="" />
              <p className="text-paragraph w-63">
                Tulia Amboseli Safari Camp is an eco-friendly safari camp just
                outside of Kimana Gate in the southeast area of the Amboseli
                National Park in Kenya.
              </p>
              <div className="flex gap-2">
                <img src={Instagram} alt="Instagram" />
                <img src={Facebook} alt="Facebook" />
                <img src={Youtube} alt="Youtube" />
              </div>
            </div>
            <div className="footer-links">
              <p>About</p>
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
              <p>Accommodation</p>
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
              <p>Experiences</p>
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
        <div className="flex justify-between rights-reserved">
          <p>All rights reserved © 2025 Tulia</p>
          <div className="flex gap-6 ml-auto">
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
