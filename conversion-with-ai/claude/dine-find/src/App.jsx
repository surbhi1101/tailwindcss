import "./assets/css/app.css";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import logo from "./assets/images/logo.png";
import search from "./assets/images/search.png";
import location from "./assets/images/location.png";
import usericon from "./assets/images/usericon.png";
import cartbtn from "./assets/images/cartbtn.png";
import icon1 from "./assets/images/icon1.png";
import icon2 from "./assets/images/icon2.png";
import icon3 from "./assets/images/icon3.png";
import icon4 from "./assets/images/icon4.png";
import icon5 from "./assets/images/icon5.png";
import Category1 from "./assets/images/Category1.png";
import Category2 from "./assets/images/Category2.png";
import Category3 from "./assets/images/Category3.png";
import Category4 from "./assets/images/Category4.png";
import Category5 from "./assets/images/Category5.png";
import Category6 from "./assets/images/Category6.png";
import Listing1 from "./assets/images/Listing1.png";
import Listing2 from "./assets/images/Listing2.png";
import Listing3 from "./assets/images/Listing3.png";
import Listing4 from "./assets/images/Listing4.png";
import location1 from "./assets/images/location1.png";
import location2 from "./assets/images/location2.png";
import location3 from "./assets/images/location3.png";
import location4 from "./assets/images/location4.png";
import location5 from "./assets/images/location5.png";
import location6 from "./assets/images/location6.png";
import blog1 from "./assets/images/blog1.png";
import blog2 from "./assets/images/blog2.png";
import blog3 from "./assets/images/blog3.png";
import event1 from "./assets/images/event1.png";
import event2 from "./assets/images/event2.png";
import event3 from "./assets/images/event3.png";
import titleimg from "./assets/images/titleimg.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".fade-section");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("fade-in"),
        ),
      { threshold: 0.12 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const categories = [
    { icon: Category1, label: "Fashion & Beauty", count: "450 Ads" },
    { icon: Category2, label: "Real Estate", count: "320 Ads" },
    { icon: Category3, label: "Health & Fitness", count: "210 Ads" },
    { icon: Category4, label: "Business Shop", count: "180 Ads" },
    { icon: Category5, label: "Cafe Shop", count: "95 Ads" },
    { icon: Category6, label: "Restaurants", count: "760 Ads" },
  ];

  const listings = [
    {
      img: Listing1,
      badge: "Real Estate",
      badgeColor: "green",
      title: "Greenrock Real Estate",
      desc: "Clown famously raised against to political Clown famously raised against to political",
      phone: "+1 123 456 7890",
      address: "Nova Russia",
      category: "Real Estate",
      rating: 4,
    },
    {
      img: Listing2,
      badge: "Weddings",
      badgeColor: "purple",
      title: "Dining Wedding Planner",
      desc: "Clown famously raised against to political Clown famously raised against to political",
      phone: "+1 234 567 8901",
      address: "Toronto Canada",
      category: "Weddings",
      rating: 5,
    },
    {
      img: Listing3,
      badge: "Restaurant",
      badgeColor: "red",
      title: "Dim-dim Ivy Light",
      desc: "Clown famously raised against to political Clown famously raised against to political",
      phone: "+1 345 678 9012",
      address: "Sydney Australia",
      category: "Restaurant",
      rating: 4,
    },
    {
      img: Listing4,
      badge: "Education",
      badgeColor: "blue",
      title: "Cosmo Study Centre",
      desc: "Clown famously raised against to political Clown famously raised against to political",
      phone: "+1 456 789 0123",
      address: "Berlin Germany",
      category: "Education",
      rating: 3,
    },
    {
      img: Listing4,
      badge: "Cafe",
      badgeColor: "orange",
      title: "Brew Morning Cafe",
      desc: "Clown famously raised against to political Clown famously raised against to political",
      phone: "+1 567 890 1234",
      address: "London UK",
      category: "Cafe",
      rating: 5,
    },
  ];

  const cities = [
    {
      name: "Jersey City",
      state: "New Jersey",
      count: "10 listing",
      img: location1,
    },
    {
      name: "San Diego",
      state: "California",
      count: "8 listing",
      img: location2,
    },
    {
      name: "New Orleans",
      state: "Louisiana",
      count: "12 listing",
      img: location3,
    },
    {
      name: "San Antonio",
      state: "Texas",
      count: "6 listing",
      img: location4,
    },
    {
      name: "Los Angeles",
      state: "California",
      count: "25 listing",
      img: location5,
    },
    {
      name: "San Francisco",
      state: "California",
      count: "19 listing",
      img: location6,
    },
  ];

  const reviews = [
    {
      quote:
        "One of the Superb Platform! This is an incredible platform. This application is a powerful tool for anyone in the business. It's reliable, extensive job listings, and user-friendly.",
      name: "Rubika K. Soote",
      role: "CEO of Tagenta",
      avatar: "https://i.pravatar.cc/60?img=1",
      rating: 5,
    },
    {
      quote:
        "One of the Superb Platform! This is an incredible platform. This application is a powerful tool for anyone in the business, most legal for the other sites with distinctionary. This is updated by means that employers.",
      name: "Danyl Kumar Tailor",
      role: "Brand Manager",
      avatar: "https://i.pravatar.cc/60?img=3",
      rating: 5,
    },
    {
      quote:
        "One of the Superb Platform! This is an incredible platform that apps we first right now. They guys people that are spending is the only email I got due to.",
      name: "Adisa G. Mehin",
      role: "HR Head of Google",
      avatar: "https://i.pravatar.cc/60?img=5",
      rating: 5,
    },
    {
      quote:
        "One of the Superb Platform! This is an incredible platform that apps we first right now. They guys people that are spending is the only email I got due to.",
      name: "Diana K. Patel",
      role: "12 of Accounts",
      avatar: "https://i.pravatar.cc/60?img=7",
      rating: 5,
    },
  ];

  const blogs = [
    {
      img: blog1,
      title: "10 Must Have Bootstrap Templates for Modern Web Design",
      excerpt:
        "Find of a searching that's filled with content politbut the first right now that's content politbut line of giving baw.",
      date: "13th Sept 2022",
      views: "146 Views",
    },
    {
      img: blog2,
      title: "Top 3 Bootstrap Themes for E-commerce Websites",
      excerpt:
        "Find of a searching that's filled with content politbut the first right now that's content politbut line of giving baw.",
      date: "21st Nov 2022",
      views: "64 Views",
    },
    {
      img: blog3,
      title: "The Ultimate Guide to Customizing Bootstrap Templates",
      excerpt:
        "Find of a searching that's filled with content politbut the first right now that's content politbut line of giving baw.",
      date: "11th March 2022",
      views: "188 Views",
    },
  ];

  const events = [
    {
      img: event1,
      date: "13",
      month: "JAN",
      title: "Learn Cook with Steve Feed",
      datetime: "01:00 AM to 8:40 PM",
    },
    {
      img: event2,
      date: "5",
      month: "FEB",
      title: "Expo with Adobe Giveaway",
      datetime: "10:00 AM to 12:00 PM",
    },
    {
      img: event3,
      date: "19",
      month: "MAR",
      title: "Join AI Community Workshop",
      datetime: "09:00 AM to 03:00 PM",
    },
  ];

  const badgeColors = {
    green: "badge-green",
    purple: "badge-purple",
    red: "badge-red",
    blue: "badge-blue",
    orange: "badge-orange",
  };

  return (
    <div className="app-wrapper">
      {/* ── NAVBAR ── */}
      <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-left">
            <div className="navbar-logo">
              <img src={logo} alt="logo" />
            </div>

            <div
              className={`navbar-links${menuOpen ? " navbar-links--open" : ""}`}
            >
              <a href="#">Home</a>
              <a href="#">Listings</a>
              <a href="#">User Dashboard</a>
              <a href="#">Themes</a>
            </div>
          </div>
          <div className="navbar-actions">
            <div className="navbar-auth">
              <div className="auth-icon">
                <img src={usericon} alt="usericon" />
              </div>
              <a href="#">Register or Sign In</a>
              <img src={cartbtn} alt="cartbtn" />
            </div>
            <button className="btn-add-listing">+ Add Listing</button>
          </div>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content fade-section">
          <div className="hero-title">
            <div className="hero-heading">
              <h1>Explore Nearby Restaurants</h1>
            </div>
            <div className="hero-subheading">
              <p>
                Terrace high-rated hotels, restaurants, attractions, activities
                and more
              </p>
            </div>
          </div>
          <div className="hero-search-bar">
            <div className="search-field">
              <input type="text" placeholder="What are you looking for?" />
            </div>

            <div className="search-divider"></div>

            <div className="search-field search-field--icon">
              <img src={location} alt="location" className="search-icon" />
              <input type="text" placeholder="Location" />
            </div>

            <div className="search-divider"></div>

            <div className="search-field search-field--icon">
              <input type="text" placeholder="Eat & Drinking" />
            </div>
            <div className="searh-button search-field--icon">
              <img src={search} alt="search" className="search-icon" />
              <button className="btn-search">Search</button>
            </div>
          </div>
          <div className="hero-pill-row">
            {[
              {
                img: icon1,
                label: "Restaurant",
              },
              {
                img: icon2,
                label: "Real Estate",
              },
              {
                img: icon3,
                label: "Business",
              },
              {
                img: icon4,
                label: "Bar",
              },
              {
                img: icon5,
                label: "Events",
              },
            ].map((pill, i) => (
              <div className="hero-pill" key={i}>
                <img src={pill.img} alt={pill.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOT & TRENDING CATEGORIES ── */}
      <section className="section-pad bg-white fade-section">
        <div className="section-container">
          <div className="section-head center-head">
            <div className="section-title-wrap">
              <h2>
                Hot &amp; Trending
                <span className="accent-red">Categories</span>
                <img src={titleimg} alt="titleimg" className="titleimg" />
              </h2>
            </div>
            <div className="section-subtitle">
              <p>
                Explore all types of popular categories for submit your listing
              </p>
            </div>
          </div>

          <div className="categories-grid">
            {categories.map((cat, i) => (
              <div className="category-card" key={i}>
                <div className="cat-icon-wrap">
                  <img src={cat.icon} alt="" />
                </div>
                <div className="cat-label">
                  <p>{cat.label}</p>
                </div>
                <div className="cat-count">
                  <p>{cat.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR LISTINGS ── */}
      <section className="section-pad bg-light fade-section">
        <div className="section-container">
          <div className="section-head center-head">
            <div className="section-title-wrap">
              <h2>
                Popular Listings In <span className="accent-red">Chicago</span>
                <span className="title-curl">↗</span>
              </h2>
            </div>
            <div className="section-subtitle">
              <p>Explore Hot &amp; Popular Business Listings</p>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            slidesPerGroup={1}
            pagination={{ clickable: true, el: ".listings-pagination" }}
            breakpoints={{
              768: { slidesPerView: 2, slidesPerGroup: 2 },
              1152: { slidesPerView: 4, slidesPerGroup: 4 },
            }}
            className="listings-swiper"
          >
            {listings.map((l, i) => (
              <SwiperSlide key={i}>
                <div className="listing-card">
                  <div className="listing-img-wrap">
                    <div className="hero-overlay"></div>
                    <img src={l.img} alt={l.title} />
                    <div
                      className={`listing-badge ${badgeColors[l.badgeColor]}`}
                    >
                      <span>{l.badge}</span>
                    </div>
                    <div className="listing-heart">♡</div>
                  </div>
                  <div className="listing-body">
                    <div className="listing-title">
                      <h3>{l.title}</h3>
                    </div>
                    <div className="listing-desc">
                      <p>{l.desc}</p>
                    </div>
                    <div className="listing-meta">
                      <div className="listing-phone">
                        <span>📞 {l.phone}</span>
                      </div>
                      <div className="listing-address">
                        <span>📍 {l.address}</span>
                      </div>
                    </div>
                    <div className="listing-footer">
                      <div className="listing-cat-tag">
                        <span>{l.category}</span>
                      </div>
                      <div className="listing-stars">
                        {"★".repeat(l.rating)}
                        {"☆".repeat(5 - l.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="listings-pagination swiper-pagination"></div>
        </div>
      </section>

      {/* ── EXPLORE BY CITY ── */}
      <section className="section-pad bg-white fade-section">
        <div className="section-container">
          <div className="section-head center-head">
            <div className="section-title-wrap">
              <h2>
                Explore Listings By <span className="accent-red">Cities</span>
                <span className="title-curl">↗</span>
              </h2>
            </div>
            <div className="section-subtitle">
              <p>
                Our clients love our services and give great &amp; positive
                reviews
              </p>
            </div>
          </div>
          <div className="cities-grid">
            {cities.map((city, i) => (
              <div className="city-card" key={i}>
                <img src={city.img} alt={city.name} />
                <div className="city-overlay"></div>

                <div className="city-badge">
                  <span>{city.count}</span>
                </div>

                <div className="city-info">
                  <div className="city-name">
                    <h3>{city.name}</h3>
                  </div>
                  <div className="city-state">
                    <p>{city.state}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="section-pad bg-light fade-section">
        <div className="section-container">
          <div className="section-head center-head">
            <div className="section-title-wrap">
              <h2>
                Our Great <span className="accent-red">Reviews</span>
                <span className="title-curl">↗</span>
              </h2>
            </div>
            <div className="section-subtitle">
              <p>
                Our clients love our services and give great &amp; positive
                reviews
              </p>
            </div>
          </div>

          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            slidesPerGroup={1}
            pagination={{ clickable: true, el: ".reviews-pagination" }}
            breakpoints={{
              768: { slidesPerView: 2, slidesPerGroup: 2 },
              1152: { slidesPerView: 4, slidesPerGroup: 4 },
            }}
            className="reviews-swiper"
          >
            {reviews.map((r, i) => (
              <SwiperSlide key={i}>
                <div className="review-card">
                  <div className="review-stars">
                    <span>{"★".repeat(r.rating)}</span>
                  </div>
                  <div className="review-quote">
                    <p>"{r.quote}"</p>
                  </div>
                  <div className="review-author">
                    <div className="review-avatar">
                      <img src={r.avatar} alt={r.name} />
                    </div>
                    <div className="review-info">
                      <div className="review-name">
                        <h4>{r.name}</h4>
                      </div>
                      <div className="review-role">
                        <p>{r.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="reviews-pagination swiper-pagination"></div>
        </div>
      </section>

      {/* ── LATEST UPDATES / BLOG ── */}
      <section className="section-pad bg-white fade-section">
        <div className="section-container">
          <div className="section-head center-head">
            <div className="section-title-wrap">
              <h2>
                Latest Updates <span className="accent-red">News</span>
                <span className="title-curl news-curl">📰</span>
              </h2>
            </div>
            <div className="section-subtitle">
              <p>
                Join ListingHub and get ideal &amp; trending updates about
                listing
              </p>
            </div>
          </div>

          <div className="blog-grid">
            {blogs.map((b, i) => (
              <div className="blog-card" key={i}>
                <div className="blog-img-wrap">
                  <img src={b.img} alt={b.title} />
                </div>
                <div className="blog-body">
                  <div className="blog-title">
                    <h3>{b.title}</h3>
                  </div>
                  <div className="blog-excerpt">
                    <p>{b.excerpt}</p>
                  </div>
                  <div className="blog-read">
                    <a href="#">Continue Reading</a>
                  </div>
                  <div className="blog-meta">
                    <div className="blog-date">
                      <span>📅 {b.date}</span>
                    </div>
                    <div className="blog-views">
                      <span>👁 {b.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section className="section-pad bg-light fade-section">
        <div className="section-container">
          <div className="section-head center-head">
            <div className="section-title-wrap">
              <h2>
                Explore Upcoming <span className="accent-red">Events</span>
                <span className="title-curl">↗</span>
              </h2>
            </div>
            <div className="section-subtitle">
              <p>Browse our upcoming events near your span</p>
            </div>
          </div>

          <div className="events-grid">
            {events.map((ev, i) => (
              <div className="event-card" key={i}>
                <div className="event-img-wrap">
                  <img src={ev.img} alt={ev.title} />
                  <div className="event-date-badge">
                    <div className="event-day">
                      <span>{ev.date}</span>
                    </div>
                    <div className="event-month">
                      <span>{ev.month}</span>
                    </div>
                  </div>
                </div>
                <div className="event-body">
                  <div className="event-title">
                    <h3>{ev.title}</h3>
                  </div>
                  <div className="event-time">
                    <span>🕐 {ev.datetime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="newsletter-section fade-section">
        <div className="newsletter-container">
          <div className="newsletter-text">
            <div className="nl-heading">
              <h2>Subscribe Our Newsletter!</h2>
            </div>
            <div className="nl-sub">
              <p>Stay tuned on our marketing platform for best updates</p>
            </div>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Your Email Here" />
            <button className="btn-subscribe">Subscribe</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer-section">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">🍽️</span>
              <span>DinoFind</span>
            </div>
            <div className="footer-tagline">
              <p>© 2022 DinoFind. Dealing with ❤ in Ahmedabad</p>
            </div>
            <div className="footer-social">
              <a href="#">f</a>
              <a href="#">t</a>
              <a href="#">in</a>
              <a href="#">yt</a>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">
              <h4>COMPANY</h4>
            </div>
            <div className="footer-links">
              <a href="#">About us</a>
              <a href="#">Listings</a>
              <a href="#">Listing Cities</a>
              <a href="#">Member Plans</a>
              <a href="#">Blog</a>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">
              <h4>GET LISTING</h4>
            </div>
            <div className="footer-links">
              <a href="#">Add a Listing</a>
              <a href="#">Signup, Members</a>
              <a href="#">Login</a>
              <a href="#">Members</a>
              <a href="#">Listing Blog</a>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">
              <h4>RESOURCES &amp; SUPPORT</h4>
            </div>
            <div className="footer-links">
              <a href="#">Documentation</a>
              <a href="#">Video Tutorials</a>
              <a href="#">Knowledgebase</a>
              <a href="#">Submit Ticket</a>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">
              <h4>GO IN TOUCH</h4>
            </div>
            <div className="footer-links">
              <a href="#">📍 123 Main St, Los Angeles, CA 90001</a>
              <a href="#">📞 +1-202-555-0178</a>
              <a href="#">✉ info@dinofind.com</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <div className="footer-copy">
              <p>© 2022 DinoFind. Dealing with ❤ in Ahmedabad</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
