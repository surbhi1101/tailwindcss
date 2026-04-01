import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./assets/css/App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in");
            }
          });
        },
        { threshold: 0.1 },
      );

      document
        .querySelectorAll(".fade-section")
        .forEach((section) => observer.observe(section));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container-fluid">
      {/* 1. Navbar */}
      <nav className={`navbar-container ${scrolled ? "navbar-sticky" : ""}`}>
        <div className="flex justify-between items-center">
          <div className="section-heading text-[24px] mb-0">Brew & Co</div>

          <div className="hidden lg:flex gap-8">
            {["Home", "Menu", "About", "Gallery", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <button className="btn-base btn-primary">Order Now</button>
          </div>

          <button
            className="lg:hidden text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header className="h-screen bg-hero flex items-center px-6 lg:px-[100px] fade-section">
        <div className="overlay-dark"></div>
        <div className="relative z-10 max-w-[800px]">
          <h1 className="text-white text-[48px] md:text-[72px] lg:text-[90px] leading-none mb-6">
            Every Sip Tells a Story
          </h1>
          <p className="text-white/80 text-[18px] lg:text-[22px] mb-10 max-w-[500px]">
            Freshly brewed coffee made with love from hand-picked beans.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-base btn-primary !border-white">
              Explore Menu
            </button>
            <button className="btn-base btn-outline !text-white !border-white">
              Our Story
            </button>
          </div>
        </div>
      </header>

      {/* 3. About Section */}
      <section id="about" className="main-section fade-section">
        <div className="layout-grid">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80"
            alt="About"
            className="w-full aspect-[4/5] object-cover"
          />
          <div>
            <div className="section-heading-wrapper">
              <h2 className="section-heading">
                Born in the heart <br /> of the city
                <span className="underline-system"></span>
              </h2>
            </div>
            <p className="mb-8 text-[16px] leading-relaxed opacity-80">
              We started with a simple idea: better coffee for a better day. Our
              beans are ethically sourced and roasted in small batches to ensure
              the perfect flavor profile in every cup. We started with a simple
              idea: better coffee for a better day. Our beans are ethically
              sourced and roasted in small batches to ensure the perfect flavor
              profile in every cup. We started with a simple idea: better coffee
              for a better day. Our beans are ethically sourced and roasted in
              small batches to ensure the perfect flavor profile in every cup.
              We started with a simple idea: better coffee for a better day. Our
              beans are ethically sourced and roasted in small batches to ensure
              the perfect flavor profile in every cup. We started with a simple
              idea: better coffee for a better day. Our beans are ethically
              sourced and roasted in small batches to ensure the perfect flavor
              profile in every cup.
            </p>
            <div className="grid grid-cols-3 gap-4 border-t border-primary/10 pt-8">
              <div>
                <h4 className="text-[32px]">12+</h4>
                <p className="text-[14px] uppercase">Years</p>
              </div>
              <div>
                <h4 className="text-[32px]">50k+</h4>
                <p className="text-[14px] uppercase">Cups Served</p>
              </div>
              <div>
                <h4 className="text-[32px]">08</h4>
                <p className="text-[14px] uppercase">Locations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Menu Section */}
      <section id="menu" className="main-section bg-secondary-bg fade-section">
        <div className="section-heading-wrapper text-center">
          <h2 className="section-heading">
            Our Menu <span className="underline-system underline-center"></span>
          </h2>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerGroup={1}
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },
            1152: { slidesPerView: 3, slidesPerGroup: 3 },
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <SwiperSlide key={item}>
              <div className="menu-card">
                <img
                  src={`https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&sig=${item}`}
                  alt="Coffee"
                  className="card-img"
                />
                <div className="flex justify-between items-start">
                  <h3 className="text-[24px]">Arabica Roast</h3>
                  <span className="font-bold text-primary">$4.50</span>
                </div>
                <p className="opacity-70 text-[14px]">
                  Deep aroma with hints of caramel and toasted almonds.
                </p>
                <button className="btn-base btn-outline w-full !py-2 !text-[12px]">
                  Order Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 5. Why Choose Us */}
      <section className="main-section fade-section">
        <div className="section-heading-wrapper text-center">
          <h2 className="section-heading">
            Why Choose Us
            <span className="underline-system underline-center"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: "Fresh Ingredients", i: "☕" },
            { t: "Expert Baristas", i: "🧑‍🍳" },
            { t: "Cozy Atmosphere", i: "🛋️" },
            { t: "Fast Service", i: "⚡" },
          ].map((f) => (
            <div key={f.t} className="feature-card">
              <span className="feature-icon">{f.i}</span>
              <h4 className="text-[20px]">{f.t}</h4>
              <p className="text-[14px] opacity-70">
                Quality and comfort are our top priorities for every guest.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Gallery */}
      {/* 6. Gallery Section */}
      <section id="gallery" className="main-section fade-section">
        <div className="section-heading-wrapper text-center">
          <h2 className="section-heading">
            Our Gallery{" "}
            <span className="underline-system underline-center"></span>
          </h2>
        </div>

        <div className="gallery-grid">
          {[
            {
              url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80",
              label: "Cozy Interior",
            },
            {
              url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80",
              label: "Latte Art",
            },
            {
              url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80",
              label: "Morning Brew",
            },
            {
              url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80",
              label: "Fresh Beans",
            },
            {
              url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80",
              label: "Pastry Pairings",
            },
            {
              url: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80",
              label: "Community",
            },
          ].map((img, index) => (
            <div key={index} className="gallery-item">
              <img
                src={img.url}
                alt={img.label}
                className="w-full h-full object-cover"
              />
              <div className="gallery-overlay">{img.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="main-section bg-secondary-bg fade-section">
        <Swiper
          spaceBetween={30}
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },
            1152: { slidesPerView: 3, slidesPerGroup: 3 },
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <SwiperSlide key={item}>
              <div className="bg-white p-10 flex flex-col gap-4 text-center items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <img src={`https://i.pravatar.cc/150?u=${item}`} alt="User" />
                </div>
                <div className="text-yellow-600">★★★★★</div>
                <p className="italic opacity-80">
                  "The best atmosphere in the city. The cold brew is absolutely
                  a game changer for my morning routine."
                </p>
                <h5 className="font-bold">- Alex Johnson</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 8. Contact Section */}
      <section id="contact" className="main-section fade-section">
        <div className="layout-grid">
          <div>
            <h2 className="section-heading">
              Get in touch <span className="underline-system"></span>
            </h2>
            <div className="flex flex-col gap-6 mt-10">
              <p>
                <strong>Address:</strong> 123 Coffee Lane, Brewville
              </p>
              <p>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p>
                <strong>Email:</strong> hello@brewandco.com
              </p>
              <p>
                <strong>Hours:</strong> Mon - Sun: 7am - 9pm
              </p>
            </div>
          </div>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
            <textarea
              placeholder="Message"
              rows="5"
              className="form-input"
            ></textarea>
            <button className="btn-base btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="main-section bg-white fade-section">
        <div className="footer-grid">
          <div>
            <h3 className="mb-6">Brew & Co</h3>
            <p className="opacity-70 text-[14px]">
              Crafting perfect moments, one cup at a time. Join our community of
              coffee lovers.
            </p>
          </div>
          <div>
            <h4 className="mb-6 text-[18px]">Quick Links</h4>
            <div className="flex flex-col gap-2 opacity-70 text-[14px]">
              <a href="#">Menu</a>
              <a href="#">Our Story</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          <div>
            <h4 className="mb-6 text-[18px]">Social</h4>
            <div className="flex gap-4">
              <span className="cursor-pointer hover:text-primary/50">
                Instagram
              </span>
              <span className="cursor-pointer hover:text-primary/50">
                Twitter
              </span>
            </div>
          </div>
          <div>
            <h4 className="mb-6 text-[18px]">Newsletter</h4>
            <div className="flex">
              <input
                type="text"
                placeholder="Email"
                className="form-input !p-2"
              />
              <button className="btn-base btn-primary !px-4 !py-2">Go</button>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center text-[12px] opacity-50">
          © 2026 Brew & Co Coffee Shop. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
