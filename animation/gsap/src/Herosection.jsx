import { useEffect, useRef } from "react";
import { gsap } from "gsap";
function Herosection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline (sequence animation)
      //       Controls animation order
      // Makes UI feel professional
      const tl = gsap.timeline();

      tl.to(".title", {
        y: -20,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      })
        .to(
          ".subtitle",
          {
            y: -10,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.5",
        )
        .to(
          ".btn",
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
          },
          "-=0.5",
        );

      // Cards stagger animation
      gsap.to(".card", {
        y: -20,
        opacity: 1,
        duration: 0.8,
        //Delays each element
        // Creates smooth flow
        stagger: 0.2,
        delay: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="section">
      <h1 className="title">Welcome to GSAP UI</h1>
      <p className="subtitle">Smooth animations for modern websites</p>
      <button className="btn">Get Started</button>

      <div className="card-container">
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
      </div>
    </div>
  );
}

export default Herosection;
