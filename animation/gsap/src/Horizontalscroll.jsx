import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function HorizontalScroll() {
  const wrapperRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text into chars
      const split = new SplitText(textRef.current, {
        type: "chars, words",
        charsClass: "char",
      });

      // Horizontal scroll animation
      const scrollTween = gsap.to(textRef.current, {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: true,
          scrub: true,
          end: "+=5000",
        },
      });

      // Animate each character
      split.chars.forEach((char) => {
        gsap.from(char, {
          yPercent: gsap.utils.random(-200, 200),
          rotation: gsap.utils.random(-20, 20),
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: char,
            containerAnimation: scrollTween,
            start: "left 100%",
            end: "left 30%",
            scrub: 1,
          },
        });
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapperRef} className="horizontal-section">
      <div className="horizontal-wrapper">
        <h3 ref={textRef} className="horizontal-text">
          The containerAnimation property allows us to create ScrollTriggered
          animations within a container that's animated horizontally. It's like
          having nested ScrollTriggers!
        </h3>
      </div>
    </section>
  );
}

export default HorizontalScroll;
