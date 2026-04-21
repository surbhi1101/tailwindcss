import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function FeaturesCards() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
      });

      gsap.from(cardsRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2, // 👈 important for cards
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="feature-section">
      <h2 className="feature-title">Our Features</h2>

      <div className="feature-grid">
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="feature-card"
          >
            <h3>Feature {item}</h3>
            <p>Clean UI with smooth animation using GSAP.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesCards;
