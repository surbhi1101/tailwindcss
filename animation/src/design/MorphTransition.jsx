import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../assets/css/morph.css";

const MorphTransition = () => {
  //   pathRef → points to the <path> inside SVG (the thing we animate)
  // tlRef → stores the GSAP timeline so you can control it later (play/reverse on click)
  const pathRef = useRef(null);
  const tlRef = useRef(null);

  //   Runs once on mount to:
  // define shapes
  // build GSAP timeline
  // set initial state
  useEffect(() => {
    const path = pathRef.current;
    // SVG Shapes (the “morph targets”)
    // What these mean:
    // They’re SVG path commands (d attribute)
    // Both describe a shape spanning the screen width
    // Animation = morphing one shape into another
    const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
    const end = "M 0 100 V 0 Q 50 0 100 0 V 100 z";

    //     Timeline is paused → you control it manually
    // No animation runs automatically

    const tl = gsap.timeline({ paused: true });
    // Animation Steps
    // Step-by-step:
    // Initial → start
    // Flat shape → wave curve
    // start → end
    // Wave expands → fills top

    // 👉 This creates a liquid transition effect
    tl.to(path, {
      attr: { d: start },
      duration: 0.6,
      ease: "power2.in",
    }).to(path, {
      attr: { d: end },
      duration: 0.6,
      ease: "power2.out",
    });
    // Initial Reverse
    // Why this is important:
    // Timeline is built forward (0 → end)
    // reverse() sets it to:
    // end state internally
    // but visually stays at start

    // 👉 This enables proper toggle behavior on first click
    tl.reverse();
    tlRef.current = tl;
  }, []);
  // Click Handler
  //   Click 1 → wave expands
  // Click 2 → wave collapses
  const handleClick = () => {
    const tl = tlRef.current;

    if (tl.reversed()) {
      tl.play();
    } else {
      tl.reverse();
    }
  };

  return (
    // Entire screen is clickable → triggers animation
    <main onClick={handleClick} className="morph-main">
      <p className="morph-text">click me</p>

      <div className="morph-wrapper">
        {/* Coordinate system: width: 0 → 100 height: 0 → 100 */}
        <svg
          className="morph-svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMin slice"
        >
          <defs>
            {/* Gives the wave: orange → pink gradient fill */}
            <linearGradient id="grad" x1="0" y1="0" x2="99" y2="99">
              <stop offset="0.2" stopColor="rgb(255, 135, 9)" />
              <stop offset="0.7" stopColor="rgb(247, 189, 248)" />
            </linearGradient>
          </defs>
          {/* Initial shape: completely flat at bottom basically invisible 👉
          Animation makes it visible */}
          <path
            ref={pathRef}
            className="morph-path"
            stroke="url(#grad)"
            fill="url(#grad)"
            strokeWidth="2"
            d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
          />
        </svg>
      </div>
    </main>
  );
};

export default MorphTransition;
