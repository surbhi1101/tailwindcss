import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Box() {
  const boxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(boxRef.current, {
        y: 150,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert(); // cleanup (important)
  }, []);

  return (
    <div className="main-box">
      <div ref={boxRef} className="sub-box"></div>
    </div>
  );
}

export default Box;
