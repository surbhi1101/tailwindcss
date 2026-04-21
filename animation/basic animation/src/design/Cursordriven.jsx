import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../assets/css/Cursordriven.css";
import logo from "../assets/images/logo.png";

const Cursordriven = () => {
  //   mainRef → main container (captures mouse movement)
  // outerRef → card/container that rotates (3D tilt)
  // logoRef → inner element that moves (parallax)
  // This separation is very important for depth effect.
  const mainRef = useRef(null);
  const outerRef = useRef(null);
  const logoRef = useRef(null);

  //   Runs once on mount → sets up:
  // GSAP animation
  // Event listeners

  useEffect(() => {
    const main = mainRef.current;
    const outer = outerRef.current;
    const logoEl = logoRef.current;

    // Mobile Guard
    //     Why:
    // Pointer tracking on mobile is useless
    // Saves performance
    // Prevents weird behavior

    if (window.innerWidth < 768) return;

    //     Adds 3D depth to children
    // Without this → rotation looks flat
    gsap.set(main, { perspective: 650 });

    //     What quickTo does:
    // Creates a super fast setter
    // Smoothly animates values on every mouse move
    // Avoids lag (better than gsap.to inside mousemove)
    const outerRX = gsap.quickTo(outer, "rotationX", {
      duration: 0.6,
      ease: "power3.out",
    });

    const outerRY = gsap.quickTo(outer, "rotationY", {
      duration: 0.6,
      ease: "power3.out",
    });

    const innerX = gsap.quickTo(logoEl, "x", {
      duration: 0.6,
      ease: "power3.out",
    });

    const innerY = gsap.quickTo(logoEl, "y", {
      duration: 0.6,
      ease: "power3.out",
    });

    // Mouse Movement Logic

    const handleMove = (e) => {
      // Step 1: Normalize mouse position
      // Converts cursor into:
      const xRatio = e.clientX / window.innerWidth;
      const yRatio = e.clientY / window.innerHeight;

      // Converts cursor into:
      //       Meaning:
      // Top → +15°
      // Bottom → -15°
      // outerRX outerRY Apply rotation This creates 3D tilt effect
      outerRX(gsap.utils.interpolate(15, -15, yRatio));
      outerRY(gsap.utils.interpolate(-15, 15, xRatio));

      // Move inner logo
      // This creates parallax depth
      innerX(gsap.utils.interpolate(-30, 30, xRatio));
      innerY(gsap.utils.interpolate(-30, 30, yRatio));
    };

    // Pointer Leave Reset
    //     Reset everything to original state
    // Prevent stuck animation

    const handleLeave = () => {
      outerRX(0);
      outerRY(0);
      innerX(0);
      innerY(0);
    };
    // Event Binding
    // Attaches animation to cursor interaction
    main.addEventListener("pointermove", handleMove);
    main.addEventListener("pointerleave", handleLeave);

    // Cleanup;

    //     Prevents:
    // Memory leaks
    // Duplicate listeners
    // Performance issues
    return () => {
      main.removeEventListener("pointermove", handleMove);
      main.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <main ref={mainRef} className="logo-main">
      <div ref={outerRef} className="logo-outer">
        <img ref={logoRef} src={logo} alt="logo" className="logo-svg" />
      </div>
    </main>
  );
};

export default Cursordriven;
