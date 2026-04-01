import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../assets/css/CanvasAnimation.css";

const CanvasAnimation = () => {
  // canvasRef → gives direct access to <canvas>
  // tlRef → stores GSAP timeline (so React doesn’t re-render it)
  // Important:
  // You are avoiding React state intentionally → this is correct for animation performance.
  const canvasRef = useRef(null);
  const tlRef = useRef(null);

  //   This runs once on mount → perfect for:
  // Canvas setup
  // Animation setup
  // Event listeners
  useEffect(() => {
    //     What’s happening:
    // Getting 2D drawing context
    // Setting canvas size dynamically
    // radius → used to push particles far outside screen initially
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    let cw = (c.width = window.innerWidth);
    let ch = (c.height = window.innerHeight);
    let radius = Math.max(cw, ch);

    // Particles Creation
    const particles = Array(99)
      .fill()
      .map((_, i) => {
        const img = new Image();
        // Image logic:
        // Cycles through 21 images → reused across 99 particles
        img.src = `https://assets.codepen.io/16327/flair-${2 + (i % 21)}.png`;

        return {
          // Key idea:
          // You’re not animating DOM elements
          // You’re animating data objects
          // Canvas renders them manually
          x: 0,
          y: 0,
          scale: 0,
          rotate: 0,
          img,
        };
      });
    // Draw Function (Core Rendering)
    const draw = () => {
      // Depth sorting
      // Bigger scale = drawn later = appears on top (fake z-index)
      particles.sort((a, b) => a.scale - b.scale);
      // Clear canvas
      ctx.clearRect(0, 0, cw, ch);
      // Draw each particle
      particles.forEach((p) => {
        // Inside loop:
        // Moves origin to center + rotates canvas
        ctx.translate(cw / 2, ch / 2);
        ctx.rotate(p.rotate);
        // Draws image using:
        // position (x, y)
        // size (scale)
        ctx.drawImage(
          p.img,
          p.x,
          p.y,
          p.img.width * p.scale,
          p.img.height * p.scale,
        );

        //VERY IMPORTANT
        // Resets transform so next particle isn’t affected

        ctx.resetTransform();
      });
    };
    // GSAP Timeline (Animation Brain)
    // Every frame → draw() runs
    const tl = gsap
      .timeline({ onUpdate: draw })
      .fromTo(
        particles,
        {
          //Particles start:
          // In circular pattern
          // Far outside screen
          x: (i) => {
            const angle = (i / particles.length) * Math.PI * 2 - Math.PI / 2;
            return Math.cos(angle * 10) * radius;
          },
          y: (i) => {
            const angle = (i / particles.length) * Math.PI * 2 - Math.PI / 2;
            return Math.sin(angle * 10) * radius;
          },
          scale: 1.1,
          rotate: 0,
        },
        {
          duration: 5,
          ease: "sine",
          //They:
          // Move to center
          // Shrink
          // Rotate
          x: 0,
          y: 0,
          scale: 0,
          rotate: -3,
          // Stagger magic
          // Important:
          // Negative stagger → reverse wave effect
          // repeat: -1 → infinite loop
          stagger: { each: -0.05, repeat: -1 },
        },
        0,
      )
      // Jump animation forward
      // Skips initial delay → animation already in motion
      .seek(99);

    // Store Timeline
    //     Useful if later:
    // pause/play externally
    // sync with scroll
    tlRef.current = tl;
    // Resize Handling
    // Updates:
    // canvas size
    // radius
    // re-calculates animation
    // Forces GSAP to recalc positions
    const handleResize = () => {
      cw = c.width = window.innerWidth;
      ch = c.height = window.innerHeight;
      radius = Math.max(cw, ch);
      tl.invalidate();
    };
    // Click Interaction
    // Logic:
    // If running → pause (timeScale: 0)
    // If paused → play (timeScale: 1)
    // Smart toggle without restarting animation
    const handlePointer = () => {
      gsap.to(tl, {
        timeScale: tl.isActive() ? 0 : 1,
      });
    };

    window.addEventListener("resize", handleResize);
    c.addEventListener("pointerup", handlePointer);
    // Cleanup;
    //     Prevents:
    // Memory leaks
    // Duplicate listeners
    // GSAP stacking bugs
    return () => {
      window.removeEventListener("resize", handleResize);
      c.removeEventListener("pointerup", handlePointer);
      tl.kill();
    };
  }, []);

  return (
    <main className="canvas-wrapper">
      <canvas ref={canvasRef} className="canvas-el"></canvas>
    </main>
  );
};

export default CanvasAnimation;
