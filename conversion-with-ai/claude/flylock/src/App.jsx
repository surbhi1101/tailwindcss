import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./assets/css/app.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import logo from "./assets/images/logo.png";
import fingureprint from "./assets/images/fingureprint.png";
import service1 from "./assets/images/service1.png";
import service2 from "./assets/images/service2.png";
import service3 from "./assets/images/service3.png";
import service4 from "./assets/images/service4.jpg";
import service5 from "./assets/images/service5.png";
import service6 from "./assets/images/service6.png";
import service7 from "./assets/images/service7.png";
import service8 from "./assets/images/service8.png";
import hero1 from "./assets/images/hero1.jpg";
import hero2 from "./assets/images/hero2.jpg";
import hero3 from "./assets/images/hero3.png";
import Eac from "./assets/images/eac.png";
import leftarrow from "./assets/images/leftarrow.png";
import rightarrow from "./assets/images/rightarrow.png";
import advantage1 from "./assets/images/advantage1.png";
import advantage2 from "./assets/images/advantage2.png";
import advantage3 from "./assets/images/advantage3.png";
import advantage4 from "./assets/images/advantage4.png";
import advantage5 from "./assets/images/advantage5.png";
import overlay1 from "./assets/images/overlay1.png";
import footeroverlay from "./assets/images/footeroverlay.png";
import overlay2 from "./assets/images/overlay2.jpg";
import overlay3 from "./assets/images/overlay3.png";
import map from "./assets/images/map.png";
import headerimg5 from "./assets/images/headerimg5.png";
import footerimg1 from "./assets/images/footerimg1.png";
import searchicon from "./assets/images/searchicon.png";
import menuicon from "./assets/images/menuicon.png";
import footerimg2 from "./assets/images/footerimg2.png";
import whitebracket1 from "./assets/images/whitebracket1.png";
import whitebracket2 from "./assets/images/whitebracket2.png";
import whitebracket3 from "./assets/images/whitebracket3.png";
import whitebracket4 from "./assets/images/whitebracket4.png";
import blackbracket1 from "./assets/images/blackbracket1.png";
import blackbracket2 from "./assets/images/blackbracket2.png";
import blackbracket3 from "./assets/images/blackbracket3.png";
import blackbracket4 from "./assets/images/blackbracket4.png";
import line1 from "./assets/images/line1.png";
import line2 from "./assets/images/line2.png";
import line3 from "./assets/images/line3.png";
import line4 from "./assets/images/line4.png";
import line5 from "./assets/images/line5.png";
import contactimg from "./assets/images/contact.png";
import heart from "./assets/images/heart.png";
import google from "./assets/images/google.png";
import star from "./assets/images/star.png";
import facebook from "./assets/images/facebook.png";
import instagram from "./assets/images/instagram.png";
import youtube from "./assets/images/youtube.png";
import linkedin from "./assets/images/linkedin.png";

/* DATA*/
const NAV_LINKS = ["SERVICES", "LOCATIONS", "CAREERS", "FRANCHISING", "BLOG"];

/*  NAVBAR DATA */
const NAV_SERVICES = [
  {
    label: "Access Control",
    items: [
      "AirAllow Access Control",
      "Alarm Lock/Trilogy Locks",
      "Biometric Access Control",
      "Card Access & Keypads",
      "Camden Surewave",
      "Codelocks CI5500",
      "Key Fob Access Systems",
      "Electric Strikes",
      "KISI Access Control",
      "Avigilon Access Control",
      "PDK IO Access Control",
      "PDK Touch Technology",
      "Remote Lock Installation",
      "Smart Lock Installation",
      "Vizpin Access Control",
      "Zkteco Biometric Access",
    ],
    img: service1,
  },
  {
    label: "Security Cameras",
    items: ["CCTV/Security Camera", "Security Camera Systems"],
    img: service2,
  },
  {
    label: "Doors",
    items: [
      "Automatic Door Operators",
      "Door Alignments",
      "Door Closers",
      "Door Installation",
      "Door Realignment",
      "Door Repairs",
      "Door/Lite Inserts",
      "Metal Door Replacement",
      "Sliding Glass Doors",
      "Storefront Doors",
      "Thresholds",
    ],
    img: service3,
  },
  {
    label: "Door Hardware",
    items: [
      "Door Alarms",
      "Door Closers",
      "Exit & Panic Devices",
      "Hands-Free Hardware",
      "Hinges & Repair",
      "Kick Plates",
    ],
    img: service4,
  },
  {
    label: "Intercoms",
    items: [
      "Aiphone Intercoms",
      "Butterfly MX Intercoms",
      "Building Intercom Systems",
      "DoorBird Intercoms",
      "LiftMaster Intercom Systems",
      "Siedle Intercoms",
      "Hospital Intercom Systems",
      "Home & Office Intercom Systems",
    ],
    img: service5,
  },
  {
    label: "Locks & Keys",
    items: [
      "Deadbolt Installation",
      "Door Knobs",
      "Fire Cabinet Locks & Keys",
      "House Keys",
      "Lockouts",
      "Master Key Systems",
      "Motors",
      "Padlocks",
      "Primus",
      "Rekeying",
    ],
    img: service6,
  },
  {
    label: "Locksmith Services",
    items: [
      "Security Risk Assessment",
      "Counter-Measure",
      "Emergency Lockouts",
      "Government Lockdowns",
      "High Security Locks & Keys",
      "Hospital Lockdowns",
      "Maintenance & Repair",
      "Door Maintenance",
      "Handbags & Briefcases",
      "School Lockdowns",
    ],
    img: service7,
  },
  {
    label: "Safes",
    items: [
      "Biometric Vaults",
      "CDK 40",
      "Gun Setup",
      "Safe Finds",
      "Safe Installation & Repair",
      "Safe Opening & Combo Changes",
      "Safety Deposit Boxes",
      "S16 & LM 1500",
    ],
    img: service8,
  },
];
const HERO_SLIDES = [
  {
    id: 1,
    align: "left",
    bg: hero1,
    subtitle:
      "Your Local Experts in Commercial Security –\nBacked by a Nationwide Network",
    heading: "FIND THE LOCATION\nNEAREST YOU",
    cta: "OUR LOCATIONS",
  },
  {
    id: 2,
    align: "right",
    bg: hero2,
    subtitle:
      "The Leading Nationwide Provider of Access Control Systems & Security Solutions",
    heading: "IF IT'S ON A DOOR, WE HANDLE IT!",
    cta: "EXPLORE SERVICES",
  },
  {
    id: 3,
    align: "left",
    bg: hero3,
    subtitle: "Rooted in Locksmithing Since 1946.Powered by Innovation.",
    heading: "FOCUSED ON THE FUTURE OF SECURITY",
    cta: "OWN A FRANCHISE",
  },
];

const SERVICES = [
  {
    title: "Access Control",
    img: service1,
  },
  {
    title: "CCTV / Security Cameras",
    img: service2,
  },
  {
    title: "Doors & Frames",
    img: service3,
  },
  {
    title: "Door Hardware",
    img: service4,
  },
  {
    title: "Intercoms",
    img: service5,
  },
  {
    title: "Locks & Keys",
    img: service6,
  },
  {
    title: "Locksmith Services",
    img: service7,
  },
  {
    title: "Safes",
    img: service8,
  },
];

const ADVANTAGE_CARDS = [
  {
    icon: advantage1,
    title: "AVAILABILITY",
    desc: "24/7 Commercial Service",
  },
  {
    icon: advantage2,
    title: "NATIONAL REACH",
    desc: "Serving North America, Coast to Coast",
  },
  {
    icon: advantage3,
    title: "ABILITY TO SCALE",
    desc: "Rapid Team Assembly for Large Projects",
  },
  ,
  {
    icon: advantage4,
    title: "ABILITY TO SCALE",
    desc: "Rapid Team Assembly for Large Projects",
  },
  {
    icon: advantage5,
    title: "ABILITY TO SCALE",
    desc: "Rapid Team Assembly for Large Projects",
  },
];

const REVIEWS = [
  {
    date: "January 1",
    platform: "Google",
    text: "Lorem ipsum dolor sit amet, Lorem consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, Lorem consectetur...",
  },
  {
    date: "January 1",
    platform: "Google",
    text: "Lorem ipsum dolor sit amet, Lorem consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, Lorem consectetur...",
  },
  {
    date: "January 1",
    platform: "Facebook",
    text: "Lorem ipsum dolor sit amet, Lorem consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, Lorem consectetur...",
  },
  {
    date: "January 1",
    platform: "Google",
    text: "Lorem ipsum dolor sit amet, Lorem consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, Lorem consectetur...",
  },
  {
    date: "January 1",
    platform: "Google",
    text: "Lorem ipsum dolor sit amet, Lorem consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, Lorem consectetur...",
  },
];

const FOOTER_MARKETS = [
  ["Educational Institutions", "Property Management"],
  ["Government Buildings", "Restaurant Venues"],
  ["Healthcare Facilities", "Retail Stores"],
  ["Multifamily Housing", "Small & Medium Businesses"],
];

const FOOTER_RESOURCES = [
  ["About FlyLock", "Careers"],
  ["Blog", "FlyLock History"],
  ["Contact", "Residential"],
  ["Locations", "Commercial"],
];

/* MAIN APP*/
export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [swiperProgress, setSwiperProgress] = useState(0);
  const searchInputRef = useRef(null);
  const advantageSwiperRef = useRef(null);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeService, setActiveService] = useState(NAV_SERVICES[0]);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileServiceExpanded, setMobileServiceExpanded] = useState(null);
  const [marketsOpen, setMarketsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  /* Auto-focus search when panel opens */
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  /* Fade-in on scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("fade-in");
        }),
      { threshold: 0.1 },
    );
    document
      .querySelectorAll(".fade-section")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="announcement-bar">
        <div className="ticker-track">
          <span className="announcement-text">
            Own a Security Franchise with FlyLock! Exclusive Territories
            Available –&nbsp;<a href="#">Claim Yours!</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Own a Security Franchise with
            FlyLock! Exclusive Territories Available –&nbsp;
            <a href="#">Claim Yours!</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Own a Security Franchise with
            FlyLock! Exclusive Territories Available –&nbsp;
            <a href="#">Claim Yours!</a>
          </span>
        </div>
      </div>

      <nav className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-mobile-right">
            <button
              className="hamburger-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <img src={menuicon} alt="menuicon" />
            </button>
          </div>

          <img src={logo} alt="logo" className="navbar-logo" />

          <div className="navbar-center">
            <div
              className="nav-link-mega-wrap"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <a href="#" className="nav-link">
                SERVICES
              </a>
              {megaOpen && (
                <div className="mega-menu">
                  <div className="mega-sidebar">
                    {NAV_SERVICES.map((svc) => (
                      <div
                        key={svc.label}
                        className={`mega-sidebar-item${activeService.label === svc.label ? " active" : ""}`}
                        onMouseEnter={() => setActiveService(svc)}
                      >
                        <span>{svc.label}</span>
                        <span className="mega-chevron">›</span>
                      </div>
                    ))}
                  </div>
                  <div className="mega-content">
                    <div className="mega-content-inner">
                      <h3 className="mega-content-heading">
                        {activeService.label.toUpperCase()}
                      </h3>
                      <div className="mega-content-body">
                        <div className="mega-items-grid">
                          {activeService.items.map((item) => (
                            <a key={item} href="#" className="mega-item-link">
                              {item}
                            </a>
                          ))}
                        </div>
                        <div className="mega-content-img">
                          <img
                            src={activeService.img}
                            alt={activeService.label}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {NAV_LINKS.filter((l) => l !== "SERVICES").map((link) => (
              <a key={link} href="#" className="nav-link">
                {link}
              </a>
            ))}
          </div>

          <button
            className={`navbar-search-toggle mobile-search ${searchOpen ? " is-active" : ""}`}
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Toggle search"
          >
            {searchOpen ? (
              <img src={searchicon} alt="searchicon" />
            ) : (
              <img src={searchicon} alt="searchicon" />
            )}
          </button>
          <div className="navbar-right">
            <div className="nav-phone">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="#1A1A1A"
                xmlns="http://www.w3.org/2000/svg"
                className="nav-phone-icon"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
              <span>833-FLY-LOCK</span>
            </div>
            <button className="btn-main btn-main--sm">SCHEDULE SERVICE</button>
            <button
              className={`navbar-search-toggle${searchOpen ? " is-active" : ""}`}
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Toggle search"
            >
              {searchOpen ? (
                <img src={searchicon} alt="searchicon" />
              ) : (
                <img src={searchicon} alt="searchicon" />
              )}
            </button>
          </div>
        </div>
        <div className={`navbar-search-panel ${searchOpen ? "open" : ""}`}>
          <div className="navbar-search-inner">
            <div className="navbar-search-field">
              <span className="navbar-search-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="16.5" y1="16.5" x2="22" y2="22" />
                </svg>
              </span>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search"
                className="navbar-search-input"
              />
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-item">
              <div
                className="mobile-nav-link mobile-nav-services-toggle"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span
                  className={mobileServicesOpen ? "mobile-nav-link-red" : ""}
                >
                  SERVICES
                </span>
                <span
                  className={`mobile-chevron${mobileServicesOpen ? " open" : ""}`}
                >
                  {mobileServicesOpen ? "∧" : "∨"}
                </span>
              </div>
              {mobileServicesOpen && (
                <div className="mobile-services-list">
                  {NAV_SERVICES.map((svc) => (
                    <div key={svc.label} className="mobile-service-group">
                      <div
                        className="mobile-service-heading"
                        onClick={() =>
                          setMobileServiceExpanded(
                            mobileServiceExpanded === svc.label
                              ? null
                              : svc.label,
                          )
                        }
                      >
                        <span
                          className={
                            mobileServiceExpanded === svc.label
                              ? "mobile-nav-link-red"
                              : ""
                          }
                        >
                          {svc.label.toUpperCase()}
                        </span>
                        <span className="mobile-chevron">
                          {mobileServiceExpanded === svc.label ? "∧" : "∨"}
                        </span>
                      </div>
                      {mobileServiceExpanded === svc.label && (
                        <div className="mobile-service-items">
                          {svc.items.map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="mobile-service-item"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {["LOCATIONS", "CAREERS", "FRANCHISING", "BLOG"].map((link) => (
              <a key={link} href="#" className="mobile-nav-link">
                {link}
              </a>
            ))}

            <div className="mobile-menu-bottom">
              <div className="mobile-menu-phone">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#1A1A1A">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
                </svg>
                <span>833-FLY-LOCK</span>
              </div>
              <button className="btn-main btn-main--sm btn-main--full mobile-schedule-btn">
                SCHEDULE SERVICE
              </button>
            </div>
          </div>
        )}
      </nav>
      <section className="hero-section fade-section">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          speed={800}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".hero-pagination" }}
          className="hero-swiper"
        >
          {HERO_SLIDES.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="hero-slide"
                style={{ backgroundImage: `url(${slide.bg})` }}
              >
                <div className="hero-slide-overlay"></div>
                <div
                  className={`hero-slide-content hero-slide-content--${slide.align}`}
                >
                  <p className="hero-slide-subtitle">
                    {slide.subtitle.split("\n").map((line, i, arr) => (
                      <span key={i}>
                        {line}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  <h1 className="hero-slide-heading">
                    {slide.heading.split("\n").map((line, i, arr) => (
                      <span key={i}>
                        {line}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </h1>
                  <div>
                    <button className="btn-main">{slide.cta}</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hero-pagination"></div>
      </section>

      {/*  SECTION 4: COMPREHENSIVE SECURITY SERVICES */}
      <section className="services-section fade-section">
        <div className="services-container">
          <div className="services-heading-area">
            <div className="services-main-heading">
              <h2 className="services-heading">
                <span className="services-line ">
                  <span className="red">
                    <img
                      src={fingureprint}
                      alt="fingerprint"
                      className="services-icon"
                    />
                    COMPREHENSIVE
                  </span>

                  <span className="services-second-line">
                    SECURITY SERVICES
                  </span>
                </span>
              </h2>
            </div>
            <p className="services-sub-bold">
              Not sure where to start with your business security?
            </p>
            <p className="services-body-text">
              We've got you covered. From electronic locks and access control
              systems to door hardware, video surveillance, master key systems,
              intercoms, and more—FlyLock Security Solutions specializes in
              designing customized security plans tailored to your specific
              needs. Whether you're upgrading a single office or securing
              multiple commercial properties, our team of experts will guide you
              through the process and recommend the best solutions for your
              space, budget, and goals.
            </p>
            <p className="services-body-text">
              With 90+ locally owned and operated locations across the country,
              we combine national expertise with local service you can trust.{" "}
              <strong>
                Contact us today, and let's build a safer, smarter security
                solution for your business.
              </strong>
            </p>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={800}
            spaceBetween={28}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".hero-pagination" }}
            onProgress={(swiper, progress) => {
              setSwiperProgress(progress * 100);
            }}
            onSlideChange={(swiper) => {
              const total = swiper.slides.length - swiper.loopedSlides * 2;
              const current = swiper.realIndex;
              const percent = ((current + 1) / total) * 100;
              setSwiperProgress(percent);
            }}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              768: { slidesPerView: 1.2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4 },
              1920: { slidesPerView: 5 },
            }}
            className="serviceSwiper"
          >
            {SERVICES.map((s, i) => (
              <SwiperSlide key={i}>
                <div className="service-card">
                  <img src={s.img} alt={s.title} className="service-card-img" />
                  <div className="service-card-overlay"></div>
                  <div className="service-card-body">
                    <p className="service-card-title">{s.title}</p>
                    <button className="btn-main">LEARN MORE</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Progress bar */}
          <div className="swiper-progress-bar-wrap ">
            <div className="swiper-progress-track">
              <div
                className="swiper-progress-thumb"
                style={{ transform: `translateX(${swiperProgress}%)` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: ABOUT (Dark)*/}

      <section className="about-section fade-section">
        <div className="about-section-bg">
          <img src={headerimg5} alt="headerimg" />
          <img src={overlay1} alt="overlay1" className="overlay-img" />
        </div>
        <img src={line1} alt="line1" className="line1" />

        <div className="about-content">
          <div className="about-heading-sub">
            <h2 className="about-label bracket-parent">
              <img src={whitebracket1} alt="" className="bracket tl" />
              <img src={whitebracket2} alt="" className="bracket tr" />
              <img src={whitebracket3} alt="" className="bracket br" />
              <img src={whitebracket4} alt="" className="bracket bl" />
              <div className="about-title">
                <div className="sub-title">
                  ABOUT <span className="red">FLYLOCK</span>
                </div>
                <span className="red">SECURITY </span>
                <span className="red">SOLUTIONS</span>
              </div>
            </h2>
            <p className="about-subtitle">Expertise in Door Security</p>
          </div>
          <p className="about-body">
            FlyLock Security Solutions is a nationwide leader in commercial
            access control and physical security integration, proudly serving
            clients across 35 states. Founded in 1946, our company has grown
            from a family-run business into a cutting-edge provider of security
            solutions for businesses of all sizes.
          </p>
          <p className="about-body">
            With decades of experience and a commitment to evolving with the
            industry, we've stayed ahead of the curve—moving beyond traditional
            locksmith services to deliver comprehensive, technology-forward
            systems that protect and empower our clients. From intelligent door
            access control to 24/7 emergency support, FlyLock combines trusted
            expertise with modern innovation to offer scalable, dependable
            solutions tailored to today's commercial security needs.
          </p>
          <p className="about-body">
            Our local teams deliver personal service backed by national
            strength, making FlyLock the go-to partner for businesses looking to
            secure their people, property, and peace of mind.
          </p>
          <button className="btn-main">LEARN MORE</button>
        </div>
        <img src={line2} alt="line2" className="line2" />
      </section>
      {/* <img src={footerimg1} alt="footerimg1" className="footerimg" /> */}
      {/*  SECTION 6: EAC SPECIALISTS */}
      <section className="eac-section fade-section">
        <div className="about-section-bg">
          <img src={overlay1} alt="overlay1" className="overlay-img" />
        </div>
        <img src={line3} alt="line3" className="line3" />
        <div className="eac-grid">
          {/* Left - Image */}
          <div className="eac-image-col desktop-eac">
            <img src={Eac} alt="EAC technician" className="eac-image" />
          </div>

          {/* Right - Text */}
          <div className="eac-text-col bracket-box bracket-inner eac-bracket-color">
            <div className="eac-heading-sub">
              <h2 className="eac-label">
                <span className="services-line">
                  <img
                    src={fingureprint}
                    alt="fingureprint"
                    className="fingureprint"
                  />
                  THE
                  <span className="red">ELECTRONIC </span>{" "}
                </span>
                <span className="red">
                  ACCESS CONTROL SYSTEMS{" "}
                  <span className="black"> SPECIALISTS</span>{" "}
                </span>
              </h2>
              <p className="eac-subtitle">How Can We Help You?</p>
            </div>
            <p className="eac-body">
              At FlyLock Security Solutions, we specialize in delivering
              integrated door security and electronic access control systems
              tailored to modern commercial environments. Our nationwide teams
              are experts in the full spectrum of physical security—from
              commercial door installation and repair to high-tech access
              control, surveillance systems, and building compliance.
            </p>
            <p className="eac-body">
              We take a consultative approach to every project, performing
              detailed on-site assessments to evaluate vulnerabilities, ensure
              ADA and life safety code compliance, and design scalable systems
              that meet the unique needs of each property. Whether it's securing
              a single entry point or managing hundreds of doors across multiple
              locations, FlyLock provides the hardware, technology, and know-how
              to protect your business from the ground up.
            </p>
            <button className="btn-main">REQUEST A QUOTE</button>
          </div>

          {/* <img src={line4} alt="line4" className="line4" /> */}
          <div className="eac-image-col mobile-eac">
            <img src={Eac} alt="EAC technician" className="eac-image" />
          </div>

          <img src={line5} alt="line5" className="line5" />
        </div>
      </section>

      {/* SECTION 7: THE FLYLOCK ADVANTAGE*/}
      <section className="advantage-section dot-pattern-bg fade-section">
        <div className="advantage-inner">
          <div className="overlay2">
            <img src={overlay2} alt="overlay2" />
          </div>
          <div className="advantage-heading">
            <h2 className="advantage-heading-text bracket-parent">
              <img
                src={blackbracket4}
                alt="blackbracket4"
                className="bracket tl"
              />
              <img
                src={blackbracket3}
                alt="blackbracket3"
                className="bracket tr"
              />
              <img
                src={blackbracket2}
                alt="blackbracket2"
                className="bracket br"
              />
              <img
                src={blackbracket1}
                alt="blackbracket1"
                className="bracket bl"
              />
              THE <span className="red">FLYLOCK ADVANTAGE</span>
            </h2>
          </div>
          <Swiper
            modules={[Navigation]}
            slidesPerView={1.2}
            onSwiper={(swiper) => (advantageSwiperRef.current = swiper)}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 5 },
            }}
            className="advantageSwiper"
          >
            {ADVANTAGE_CARDS.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="advantage-card">
                  <div>
                    <img src={card.icon} alt="" />
                  </div>
                  <div className="advantage-sub">
                    <p className="advantage-title">{card.title}</p>
                    <p className="advantage-desc">{card.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-btn">
            <img
              src={leftarrow}
              alt="leftarrow"
              onClick={() => advantageSwiperRef.current?.slidePrev()}
              style={{ cursor: "pointer" }}
            />
            <img
              src={rightarrow}
              alt="rightarrow"
              onClick={() => advantageSwiperRef.current?.slideNext()}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <img src={footerimg2} alt="footerimg" className="footerimg2" />
      </section>

      {/* SECTION 8: FIND LOCATIONS*/}
      <section className="locations-section fade-section">
        <div className="locations-grid">
          {/* Left */}

          <div className="locations-right mobile-map">
            <div className="us-map-wrap">
              <img src={map} alt="map" />
            </div>
          </div>
          <div className="locations-left">
            <div>
              <div className="locations-label-small">
                <img src={fingureprint} alt="fingureprint" />
                <span>FIND</span>
              </div>
              <h2 className="locations-heading">
                <span className="red">COMMERCIAL</span>
                <br />
                <span className="red">
                  SECURITY <span className="white">&</span> ACCESS CONTROL
                  EXPERTS
                </span>{" "}
                <br />
                <span className="white">NEAR </span>
                <span className="red">YOU</span>
              </h2>
            </div>
            <p className="locations-body">
              Proudly serving businesses in over 40 states through 90+ locally
              owned and operated locations across the U.S.
            </p>
            <button className="btn-main">FIND A LOCATION NEAR ME</button>
          </div>
          {/* Right - Map */}
          <div className="locations-right desktop-map">
            <div className="us-map-wrap">
              <img src={map} alt="map" />
            </div>
          </div>
        </div>
      </section>

      <img src={footerimg1} alt="footerimg" className="footerimg1" />
      {/* SECTION 9: TESTIMONIALS*/}
      <section className="testimonials-section fade-section">
        <div className="testimonials-inner">
          <div className="testimonials-mainheading">
            <h2 className="testimonials-heading bracket-parent">
              <img
                src={blackbracket4}
                alt="blackbracket4"
                className="bracket tl"
              />
              <img
                src={blackbracket3}
                alt="blackbracket3"
                className="bracket tr"
              />
              <img
                src={blackbracket2}
                alt="blackbracket2"
                className="bracket br"
              />
              <img
                src={blackbracket1}
                alt="blackbracket1"
                className="bracket bl"
              />
              <span className="red">REAL FEEDBACK</span>
              <span className="text-black">FROM </span>
              <span className="red">REAL CLIENTS</span>
            </h2>
          </div>
          <div className="testimonials-filter">
            {/* Filter Tabs */}
            <div className="filter-tab">
              <div className="review-filter-tabs">
                <div
                  className={`review-tab${activeTab === "all" ? " active" : ""}`}
                  onClick={() => setActiveTab("all")}
                >
                  All Reviews <span className="review-rating">5.0</span>
                </div>
                <div
                  className={`review-tab${activeTab === "google" ? " active" : ""}`}
                  onClick={() => setActiveTab("google")}
                >
                  <img src={google} alt="google" />
                  Google<span className="review-rating">5.0</span>
                </div>
                <div
                  className={`review-tab${activeTab === "facebook" ? " active" : ""}`}
                  onClick={() => setActiveTab("facebook")}
                >
                  <img src={facebook} alt="facebook" />
                  Facebook<span className="review-rating">5.0</span>
                </div>
              </div>

              {/* Overall Rating Block */}
              <div className="overall-rating-block">
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  <p className="overall-rating-label">OVERALL RATING</p>
                  <div className="overlall-rating-desc">
                    {" "}
                    <p className="overall-rating-score">5.0</p>
                    <div className="stars-row">
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                    </div>
                    <span className="reviews-no">74 Reviews</span>
                  </div>
                </div>
                <button className="btn-main btn-main--self-start">
                  WRITE A REVIEW
                </button>
              </div>
            </div>
            {/* Reviews Swiper */}
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              slidesPerGroup={1}
              spaceBetween={28}
              navigation={{
                nextEl: ".review-next",
                prevEl: ".review-prev",
              }}
              breakpoints={{
                320: { slidesPerView: 1, slidesPerGroup: 1 },
                1152: { slidesPerView: 3, slidesPerGroup: 3 },
              }}
              className="review-swiper"
            >
              {REVIEWS.map((r, i) => (
                <SwiperSlide key={i}>
                  <div className="review-card">
                    <div className="review-card-top">
                      <div className="review-card-top-left">
                        <span className="review-date">{r.date}</span>
                        <div className="stars-row-sm">
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                        </div>
                      </div>
                    </div>
                    <p className="review-text">{r.text}</p>
                    <div className="review-footer">
                      <span className="review-read-more">Read more</span>
                    </div>
                    <div className="review-platform">
                      <img src={google} alt="google" className="google-icon" />
                      <div className="flex flex-col">
                        <span className="platform-postedOn">
                          Posted On <br />
                          <span className="platform-title"> {r.platform}</span>
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Navigation */}
          <div className="swiper-nav-row desktop-review">
            <button className="swiper-btn-nav review-prev">&#8592;</button>
            <button className="swiper-btn-nav review-next">&#8594;</button>
          </div>
          <div className="btn-more">
            <button className="btn-main mobile-review">
              View More Reviews
            </button>
          </div>
        </div>
      </section>

      {/*  SECTION 10: CONTACT / QUOTE FORM*/}

      <section className="contact-section fade-section">
        <div className="overlay2">
          <img src={overlay3} alt="overlay3" />
        </div>
        <div className="contact-grid">
          {/* Left - Image */}
          <div className="contact-image-col">
            <img
              src={contactimg}
              alt="FlyLock technician"
              className="contact-image"
            />
          </div>

          {/* Right - Form */}
          <div className="contact-form-col">
            <div className="contact-heading-wrap">
              <div className="contact-fingerprint-wrap">
                <img src={fingureprint} alt="fingureprint" />
                <h2>
                  REQUEST A
                  <span style={{ color: "var(--color-primary-red)" }}>
                    QUOTE
                  </span>
                </h2>
              </div>
              <p>
                Our client services team is standing by to assist with security
                doors, hardware, access control systems, security cameras,
                locksmith services and more!
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Row 1 */}
              <div className="form-row">
                <div className="input-box">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-input" placeholder="" />
                </div>
                <div className="input-box">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" placeholder="" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="form-row">
                <div className="input-box">
                  <label className="form-label">Zip Code</label>
                  <input type="text" className="form-input" placeholder="" />
                </div>
                <div className="input-box">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-input" placeholder="" />
                </div>
              </div>

              {/* Radio */}
              <div className="form-radio-group">
                <label className="form-radio-label">
                  <input
                    type="radio"
                    name="type"
                    defaultChecked
                    className="form-radio-input"
                  />
                  Commercial - Business
                </label>
                <label className="form-radio-label">
                  <input
                    type="radio"
                    name="type"
                    className="form-radio-input"
                  />
                  Residential - Home
                </label>
              </div>

              {/* Textarea */}
              <div className="input-box">
                <label className="form-label">How can we help?</label>
                <textarea className="form-textarea" placeholder=""></textarea>
              </div>

              {/* Checkbox */}
              <label className="form-checkbox-label">
                <input
                  type="checkbox"
                  style={{ width: 16, height: 16, flexShrink: 0, marginTop: 2 }}
                />
                <span>
                  I agree to the <a href="#">privacy policy</a>.
                </span>
              </label>

              {/* Submit */}
              <div>
                <button className="btn-main btn-main--submit">
                  SUBMIT REQUEST
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: FOOTER*/}
      <footer className="footer-section">
        <div className="about-section-bg">
          <img src={overlay1} alt="overlay1" className="overlay-img" />
        </div>

        <div className="footer-grid">
          {/* Left */}
          <div className="footer-left">
            <h2 className="footer-brand-heading">
              TALK TO A <span className="red">SECURITY PROFESSIONAL</span>,
              TODAY!
            </h2>
            <p className="footer-brand-body">
              FlyLock Security Solutions is a nationwide network of commercial
              security experts, delivering access control and door security
              systems tailored to the needs of modern businesses. We blend
              time-tested values with cutting-edge technology to create life
              safety and security solutions that protect people, property, and
              peace of mind—one door at a time.
            </p>
          </div>

          {/* Center */}
          <div className="footer-center">
            <div className="footer-accordion">
              <button
                type="button"
                className="footer-accordion-header"
                onClick={() => setMarketsOpen(!marketsOpen)}
                aria-expanded={marketsOpen}
              >
                <span className="footer-col-heading">MARKETS WE SERVE</span>
                <span className="footer-accordion-chevron">
                  {marketsOpen ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </span>
              </button>
              <div
                className={`footer-accordion-body${marketsOpen ? " open" : ""}`}
              >
                <div className="footer-links-sub-grid">
                  {FOOTER_MARKETS.flat().map((item, i) => (
                    <a key={i} href="#" className="footer-link-markets">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="footer-right">
            <div className="footer-accordion">
              <button
                type="button"
                className="footer-accordion-header"
                onClick={() => setResourcesOpen(!resourcesOpen)}
                aria-expanded={resourcesOpen}
              >
                <span className="footer-col-heading-sm">RESOURCES</span>
                <span className="footer-accordion-chevron">
                  {resourcesOpen ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </span>
              </button>
              <div
                className={`footer-accordion-body${resourcesOpen ? " open" : ""}`}
              >
                <div className="footer-links-sub-grid">
                  {FOOTER_RESOURCES.flat().map((item, i) => (
                    <a key={i} href="#" className="footer-link-resources">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Footer Bottom Bar ── */}
      <div className="footer-bottom-bar">
        {/* Legal links */}
        <div className="footer-bottom-sub">
          {[
            "Accessibility Statement",
            "Privacy Policy",
            "Terms & Conditions",
            "All FlyLock Services",
          ].map((l, i) => (
            <a key={i} href="#" className="footer-bottom-link">
              {l}
            </a>
          ))}
        </div>
        {/* Copyright */}
        <p className="footer-bottom-copy">
          © 2025 FlyLock | <img src={heart} alt="heart" />
          //TECHYSCOUTS
        </p>
        {/* Socials */}
        <div className="footer-social-wrap">
          <div className="social-icon">
            <img src={instagram} alt="social-icon" />
          </div>
          <div className="social-icon">
            <img src={facebook} alt="social-icon" />
          </div>
          <div className="social-icon">
            <img src={youtube} alt="social-icon" />
          </div>
          <div className="social-icon">
            <img src={linkedin} alt="social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
