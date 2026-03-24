import { useState, useEffect, useRef } from "react";
import "./assets/css/app.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import logo from "./assets/images/logo.svg";
import locationicon from "./assets/images/location.png";
import delanoix from "./assets/images/anthony-delanoix.jpg";
import reungere from "./assets/images/anthony-reungere.jpg";
import damiano from "./assets/images/damiano-baschiera.jpg";
import tom from "./assets/images/tom-byrom.jpg";
import prevbtn from "./assets/images/prev-btn.png";
import nextbtn from "./assets/images/next-btn.png";
import offer1 from "./assets/images/offer1.jpg";
import offer2 from "./assets/images/offer2.jpg";
import offer3 from "./assets/images/offer3.jpg";
import trip1 from "./assets/images/trip1.jpg";
import trip2 from "./assets/images/trip2.jpg";
import trip3 from "./assets/images/trip3.jpg";
import trip4 from "./assets/images/trip4.jpg";
import star from "./assets/images/star.png";
import blog from "./assets/images/blog.jpg";
import gallery1 from "./assets/images/gallery1.jpg";
import gallery2 from "./assets/images/gallery2.jpg";
import gallery3 from "./assets/images/gallery3.jpg";
import gallery4 from "./assets/images/gallery4.jpg";
import facebook from "./assets/images/facebook.png";
import instagram from "./assets/images/instagram.png";
import twitter from "./assets/images/twitter.png";
import pinterest from "./assets/images/pinterest.png";
function App() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [offerIndex, setOfferIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const cardsPerView = isDesktop ? 3 : 1;
  const swiperRef = useRef(null);

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

  // popular destinations
  const destinations = [
    {
      img: reungere,
      title: "Monument of Berlin",
      location: "Berlin, Germany",
    },
    {
      img: delanoix,
      title: "Millennium Bridge",
      location: "London, United Kingdom",
    },
    {
      img: damiano,
      title: "Rialto Bridge",
      location: "Venice, Italy",
    },
    {
      img: tom,
      title: "Sea of Orange Tiles",
      location: "Lisbon, Portugal",
    },
  ];

  // offer data
  const cards = [
    {
      img: offer1,
      title: "Lisbon, Portugal",
      content:
        "  5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
      price: "€500",
    },
    {
      img: offer2,
      title: "Paris, France",
      content:
        "  5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
      price: "€600",
    },
    {
      img: offer3,
      title: "Rome, Italy",
      content:
        "  5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
      price: "€700",
    },
    {
      img: offer1,
      title: "Lisbon, Portugal",
      content:
        "  5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
      price: "€500",
    },
    {
      img: offer2,
      title: "Paris, France",
      content:
        "  5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
      price: "€600",
    },
    {
      img: offer3,
      title: "Rome, Italy",
      content:
        "  5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
      price: "€700",
    },
  ];

  const nextOffer = () => {
    setOfferIndex((prev) =>
      prev >= cards.length - cardsPerView ? 0 : prev + 1,
    );
  };
  const prevOffer = () => {
    setOfferIndex((prev) =>
      prev <= 0 ? cards.length - cardsPerView : prev - 1,
    );
  };
  // destination gallery
  const [galleryIndex, setGalleryIndex] = useState(0);

  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    offer1,
    offer2,
    offer3,
    gallery1,
  ];
  const trips = [
    {
      img: trip1,
      maintitle: "Guided Tour",
      imgtitle: "Rome City Tour image",
      price: "€99/Day",
      subtitle: "Rome City Tour",
      days: "7 Days tour",
    },
    {
      img: trip2,
      maintitle: "Guided Tour",
      imgtitle: "Paris City Tour image",
      price: "€95/Day",
      subtitle: "Paris City Tour",
      days: "7 Days tour",
    },
    {
      img: trip3,
      maintitle: "Guided Tour",
      imgtitle: "Barcelona City Tour image",
      price: "€99/Day",
      subtitle: "Barcelona City Tour",
      days: "7 Days tour",
    },
    {
      img: trip4,
      maintitle: "Guided Tour",
      imgtitle: "Guided Tour image",
      price: "€99/Day",
      subtitle: "Rome City Tour",
      days: "7 Days tour",
    },
  ];
  const imagesPerView = 4;

  const nextGallery = () => {
    setGalleryIndex((prev) =>
      Math.min(prev + imagesPerView, galleryImages.length - imagesPerView),
    );
  };

  const prevGallery = () => {
    setGalleryIndex((prev) => Math.max(prev - imagesPerView, 0));
  };

  const visibleImages = galleryImages.slice(
    galleryIndex,
    galleryIndex + imagesPerView,
  );

  return (
    <div>
      {/* popular-destinations-section */}
      <section className="popular-destinations-section fade-section">
        <div className="section-heading">
          <div className="section-heading-content">
            <div className="section-heading-top">
              <div className="section-heading-title">
                <h3>Popular Destinations</h3>
              </div>

              <div className="underline-base underline-popular-destinations"></div>
            </div>

            <div className="section-heading-desc">
              <p>
                Most popular destinations around the world, from historical
                places to natural wonders.
              </p>
            </div>
          </div>
          <div className="nav-btn-group nav-btn-desktop">
            <div className="nav-btn nav-btn-prev">
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <img src={prevbtn} alt="previous" />
              </button>
            </div>

            <div className="nav-btn nav-btn-next">
              <button onClick={() => swiperRef.current?.slideNext()}>
                <img src={nextbtn} alt="next" />
              </button>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={32}
          slidesPerView={1}
          slidesPerGroup={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            1152: {
              slidesPerView: 2.2,
              slidesPerGroup: 2,
            },
            1440: {
              slidesPerView: 2.75,
              slidesPerGroup: 2,
            },
            1920: {
              slidesPerView: 3.35,
              slidesPerGroup: 3,
            },
          }}
          className="destinationSwiper"
        >
          {destinations.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="destination-card-wrapper">
                <div className="destination-img">
                  <img src={item.img} alt="destination-image" />
                </div>

                <div className="destination-content">
                  <h3>{item.title}</h3>

                  <div className="location-row">
                    <img src={locationicon} alt="location-image" />
                    <p>{item.location}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="nav-btn-group nav-btn-mobile">
          <div className="nav-btn nav-btn-prev">
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <img src={prevbtn} alt="previous" />
            </button>
          </div>

          <div className="nav-btn nav-btn-next">
            <button onClick={() => swiperRef.current?.slideNext()}>
              <img src={nextbtn} alt="next" />
            </button>
          </div>
        </div>
      </section>
      {/* special-offer-section */}
      <section className="special-offer-section fade-section">
        <div className="section-heading">
          <div className="section-heading-content">
            <div className="section-heading-top">
              <div className="section-heading-title">
                <h3>Special Offer</h3>
              </div>
              <div className="underline-base underline-special-offer"></div>
            </div>

            <div className="section-heading-desc">
              <p>Check out our special offer and discounts</p>
            </div>
          </div>
          <div className="nav-btn-group nav-btn-desktop">
            <div className="nav-btn nav-btn-prev">
              <button
                onClick={prevOffer}
                disabled={offerIndex === 0}
                className={
                  offerIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }
              >
                <img src={prevbtn} alt="previous" />
              </button>
            </div>

            <div className="nav-btn nav-btn-next">
              <button
                onClick={nextOffer}
                disabled={offerIndex >= cards.length - cardsPerView}
                className={
                  offerIndex >= cards.length - cardsPerView
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }
              >
                <img src={nextbtn} alt="next" />
              </button>
            </div>
          </div>
        </div>

        <div className="offer-slider">
          <div
            className="offer-track"
            ref={trackRef}
            style={{
              transform: `translateX(-${offerIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {cards.map((card, index) => (
              <div key={index} className="offer-card">
                <div className="offer-card-inner">
                  <div className="offer-card-img">
                    <img src={card.img} alt="" />
                  </div>

                  <div className="offer-card-content">
                    <h4 className="offer-card-title">{card.title}</h4>

                    <div className="star-img">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <img key={i} src={star} alt="star" />
                      ))}
                    </div>

                    <div className="offer-card-desc">
                      <p>{card.content}</p>
                    </div>

                    <div className="price-details">
                      <div className="price-tag">
                        <span>From</span>
                        <p>{card.price}</p>
                      </div>

                      <div className="offer-btn">
                        <a href="#">Details</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="nav-btn-group nav-btn-mobile">
          <div className="nav-btn nav-btn-prev">
            <button
              onClick={prevOffer}
              disabled={offerIndex === 0}
              className={
                offerIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }
            >
              <img src={prevbtn} alt="previous" />
            </button>
          </div>

          <div className="nav-btn nav-btn-next">
            <button
              onClick={nextOffer}
              disabled={offerIndex >= cards.length - cardsPerView}
              className={
                offerIndex >= cards.length - cardsPerView
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }
            >
              <img src={nextbtn} alt="next" />
            </button>
          </div>
        </div>
      </section>
      {/* our-blog-section */}
      <section className="our-blog-section fade-section">
        <div className="section-heading">
          <div className="section-heading-top">
            <div className="section-heading-title">
              <h3>Our Blog</h3>
            </div>
            <div className="underline-base underline-our-blog"></div>
          </div>
          <div className="section-heading-desc">
            <p>An insight the incredible experience in the world</p>
          </div>
        </div>

        <div className="our-blog-content">
          <div className="our-blog-image">
            <img src={blog} alt="blog" />
          </div>
          <div className="our-blog-body">
            <div className="our-blog-title">
              <h3>
                Beautiful Italy <br />
                Let's travel
              </h3>
            </div>
            <div className="our-blog-desc">
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system and expound the actual
                teachings of the great explorer of the truth, the master-
                builder of human happiness. No one rejects, dislike, or avoids
                plasure itself, because it is pleasure, but because those who do
                not know how to pursue pleasure rationally encounter
                consequences that are extremly painful. Nor again is there
                anyone who loves or pursues.
              </p>
            </div>

            <div className="our-blog-cta">
              <button>
                Read More
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* trip-planner-section */}
      <section className="trip-planner-section fade-section">
        <div className="section-heading trip-planner-left">
          <div className="section-heading-top">
            <div className="section-heading-title">
              <h3>Trip Planners</h3>
            </div>
            <div className="underline-base underline-trip-planner"></div>
          </div>
          <div className="section-heading-desc">
            <p>
              20 years from now you will be more disappointed by the things that
              you didn't do. Stop regretting and start travelling, start
              throwing off the bowlines.
            </p>
          </div>
          <div className="trip-button ">
            <div className="trip-btn-wrapper">
              <div className="trip-btn-bg trip-btn-bg-left"></div>
              <div className="trip-btn-bg trip-btn-bg-right"></div>

              <button className="trip-btn">View all trip plans</button>
            </div>
          </div>
        </div>
        <div className="planner-mobile">
          {trips.map((trip, i) => (
            <div key={i} className="planner-card">
              <div className="planner-img">
                <img src={trip.img} alt={trip.imgtitle} />
              </div>

              <div className="planner-content">
                <div className="planner-top">
                  <h5>{trip.maintitle}</h5>
                  <p>{trip.price}</p>
                </div>

                <h3>{trip.subtitle}</h3>

                <div className="planner-bottom">
                  <div className="star-img">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <img key={i} src={star} alt="star" />
                    ))}
                  </div>
                  <p>{trip.days}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="trip-planner-right">
          <Swiper
            spaceBetween={32}
            breakpoints={{
              1152: {
                slidesPerView: 2.2,
              },
              1440: {
                slidesPerView: 2.9,
              },
              1920: {
                slidesPerView: 3.8,
              },
            }}
            className="trip-swiper"
          >
            {trips.map((trip, i) => (
              <SwiperSlide key={i}>
                <div className="planner-card group">
                  <div className="planner-img">
                    <img src={trip.img} alt={trip.imgtitle} />
                  </div>
                  <div className="planner-content desktop">
                    <div className="planner-top">
                      <h5>{trip.maintitle}</h5>
                      <p>{trip.price}</p>
                    </div>

                    <h3>{trip.subtitle}</h3>

                    <div className="planner-bottom">
                      <div className="star-img">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <img key={index} src={star} alt="star" />
                        ))}
                      </div>
                      <p>{trip.days}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* destination-gallery-section */}
      <section className="destination-gallery-section fade-section">
        <div className="section-heading">
          <div className="section-heading-content">
            <div className="section-heading-top">
              <div className="section-heading-title">
                <h3>Destination Gallery</h3>
              </div>
              <div className="underline-base underline-destination-gallery"></div>
            </div>

            <div className="section-heading-desc">
              <p>Our photo gallery on trip</p>
            </div>
          </div>
          <div className="nav-btn-group nav-btn-desktop">
            <div className="nav-btn nav-btn-prev">
              <button
                onClick={prevGallery}
                disabled={galleryIndex === 0}
                className={
                  galleryIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }
              >
                <img src={prevbtn} alt="previous" />
              </button>
            </div>

            <div className="nav-btn nav-btn-next">
              <button
                onClick={nextGallery}
                disabled={galleryIndex >= galleryImages.length - imagesPerView}
                className={
                  galleryIndex >= galleryImages.length - imagesPerView
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }
              >
                <img src={nextbtn} alt="next" />
              </button>
            </div>
          </div>
        </div>

        <div className="gallery-wrapper">
          {visibleImages.map((img, i) => (
            <div key={i} className="gallery-card">
              <img src={img} alt="gallery" />
            </div>
          ))}
        </div>

        <div className="nav-btn-group nav-btn-mobile">
          <div className="nav-btn nav-btn-prev">
            <button
              onClick={prevGallery}
              disabled={galleryIndex === 0}
              className={
                galleryIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }
            >
              <img src={prevbtn} alt="previous" />
            </button>
          </div>

          <div className="nav-btn nav-btn-next">
            <button
              onClick={nextGallery}
              disabled={galleryIndex >= galleryImages.length - imagesPerView}
              className={
                galleryIndex >= galleryImages.length - imagesPerView
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }
            >
              <img src={nextbtn} alt="next" />
            </button>
          </div>
        </div>
      </section>
      {/* travelers-experiences-section */}
      <section className="travelers-experiences-section fade-section">
        <div className="section-heading">
          <div className="section-heading-top">
            <div className="section-heading-title">
              <h3>Traveler's Experiences</h3>
            </div>
            <div className="underline-base underline-travelers-exp"></div>
          </div>
          <div className="section-heading-desc">
            <p>Here some awesome feedback from our travelers</p>
          </div>
        </div>
        <div className="nav-btn-group nav-btn-mobile">
          <div>
            <button className="nav-btn nav-btn-prev">
              <img src={prevbtn} alt="previous" />
            </button>
          </div>

          <div>
            <button className="nav-btn nav-btn-next">
              <img src={nextbtn} alt="next" />
            </button>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          {/* Logo + Copyright */}
          <div className="footer-brand">
            <img src={logo} alt="logo" />
            <p className="footer-copy">
              Copyright © Travellian 2020 All rights reserved
            </p>
          </div>

          {/* Column 1 */}
          <div className="footer-menu">
            <h4>Menu</h4>
            <ul className="footer-list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="#">Travel</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-menu">
            <h4>Information</h4>
            <ul className="footer-list footer-list-lg">
              <li>
                <a href="#">Destinations</a>
              </li>
              <li>
                <a href="#">Supports</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-menu footer-menu-wide">
            <h4>Contact Info</h4>
            <ul className="footer-list footer-list-lg">
              <li>
                <a href="#">+123 456 789</a>
              </li>
              <li>
                <a href="#">info@travellian.com</a>
              </li>
              <li>
                <a href="#">Travel</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer-social">
            <h4>Follow us on</h4>
            <div className="footer-icons">
              <img src={facebook} alt="social" />
              <img src={pinterest} alt="social" />
              <img src={instagram} alt="social" />
              <img src={twitter} alt="social" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
