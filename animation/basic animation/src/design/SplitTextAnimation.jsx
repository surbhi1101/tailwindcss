import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import "../assets/css/splitText.css";

gsap.registerPlugin(SplitText);

const SplitTextAnimation = () => {
  //   containerRef → controls visibility (initial hide → show)
  // linesRef → stores multiple <h1> elements
  const containerRef = useRef(null);
  const linesRef = useRef([]);
  // Runs once → initializes:
  // SplitText
  // GSAP timeline
  // 3D transforms
  useEffect(() => {
    const container = containerRef.current;
    const lines = linesRef.current;

    // show container
    gsap.set(container, { visibility: "visible" });

    // split text
    const splitLines = lines.map(
      (line) =>
        new SplitText(line, {
          type: "chars",
          charsClass: "char",
        }),
    );

    // 3D setup
    //     Adds Z-depth to rotation
    // Makes flip feel real 3D instead of flat
    const width = window.innerWidth;
    const depth = -width / 8;
    const transformOrigin = `50% 50% ${depth}`;

    gsap.set(lines, {
      perspective: 700,
      transformStyle: "preserve-3d",
    });

    // Timeline (Animation Engine) infinite loop animation

    const tl = gsap.timeline({ repeat: -1 });

    splitLines.forEach((split, index) => {
      // Character animation
      tl.fromTo(
        split.chars,
        {
          //           Step-by-step:
          // 1. Start state
          // Characters are flipped backward (hidden)
          rotationX: -90,
        },
        {
          // End state
          // Flip forward → like rotating cards
          // Stagger
          // Characters animate one after another
          rotationX: 90,
          stagger: 0.08,
          duration: 0.9,
          ease: "none",
          transformOrigin,
        },
        // Line delay
        // Each line starts later
        index * 0.45,
      );
    });
    // Cleanup
    return () => {
      tl.kill();

      // revert split text (VERY IMPORTANT)
      splitLines.forEach((split) => split.revert());
    };
  }, []);

  return (
    <div ref={containerRef} className="split-container">
      <div className="split-tube">
        {["Hello", "World"].map((text, i) => (
          <h1
            key={i}
            // You’re building an array of DOM nodes → needed for GSAP targeting
            ref={(el) => (linesRef.current[i] = el)}
            className="split-line"
          >
            {text}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default SplitTextAnimation;
