import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

function Splittext() {
  const containerRef = useRef(null);
  const linesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // show container
      gsap.set(containerRef.current, { visibility: "visible" });

      // split text
      const splitLines = linesRef.current.map(
        (line) => new SplitText(line, { type: "chars", charsClass: "char" }),
      );

      const width = window.innerWidth;
      const depth = -width / 8;
      const transformOrigin = `50% 50% ${depth}`;

      gsap.set(linesRef.current, {
        perspective: 700,
        transformStyle: "preserve-3d",
      });

      const tl = gsap.timeline({ repeat: -1 });

      splitLines.forEach((split, index) => {
        tl.fromTo(
          split.chars,
          { rotationX: -90 },
          {
            rotationX: 90,
            stagger: 0.08,
            duration: 0.9,
            ease: "none",
            transformOrigin,
          },
          index * 0.45,
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center w-full h-screen invisible"
    >
      <div className="relative w-full h-[24vw]">
        {["SplitText", "SplitText", "SplitText", "SplitText"].map((text, i) => (
          <h1
            key={i}
            ref={(el) => (linesRef.current[i] = el)}
            className="absolute top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2 
              leading-none tracking-[-0.6vw] text-[18vw] 
              whitespace-nowrap text-center"
          >
            {text}
          </h1>
        ))}
      </div>
    </div>
  );
}

export default Splittext;
