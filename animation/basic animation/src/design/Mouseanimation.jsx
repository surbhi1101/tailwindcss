import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../assets/css/MouseAnimation.css";
function Mouseanimation() {
  const containerRef = useRef(null);

  // image float when the mouse move
  useEffect(() => {
    let flair = gsap.utils.toArray(".flair");

    let gap = 100;
    let index = 0;
    let wrapper = gsap.utils.wrap(0, flair.length);

    gsap.defaults({ duration: 1 });

    let mousePos = { x: 0, y: 0 };
    let lastMousePos = { x: 0, y: 0 };
    let cachedMousePos = { x: 0, y: 0 };

    function playAnimation(shape) {
      let tl = gsap.timeline();

      tl.from(shape, {
        opacity: 0,
        scale: 0,
        ease: "elastic.out(1,0.3)",
      })
        .to(
          shape,
          {
            rotation: "random([-360,360])",
          },
          "<",
        )
        .to(shape, { y: "120vh", ease: "back.in(.4)", duration: 1 }, 0);
    }
    function animateImage() {
      let wrappedIndex = wrapper(index);
      let img = flair[wrappedIndex];
      gsap.killTweensOf(img);
      gsap.set(img, { clearProps: "all" });
      gsap.set(img, {
        opacity: 1,
        left: mousePos.x,
        top: mousePos.y,
        xPercent: -50,
        yPercent: -50,
      });
      playAnimation(img);
      index++;
    }
    function ImageTrail() {
      let travelDistance = Math.hypot(
        lastMousePos.x - mousePos.x,
        lastMousePos.y - mousePos.y,
      );
      cachedMousePos.x = gsap.utils.interpolate(
        cachedMousePos.x || mousePos.x,
        mousePos.x,
        0.1,
      );
      cachedMousePos.y = gsap.utils.interpolate(
        cachedMousePos.y || mousePos.y,
        mousePos.y,
        0.1,
      );
      if (travelDistance > gap) {
        animateImage();
        lastMousePos = { ...mousePos };
      }
    }

    function handleMouse(e) {
      mousePos = {
        x: e.clientX,
        y: e.clientY,
      };
    }

    window.addEventListener("mousemove", handleMouse);
    gsap.ticker.add(ImageTrail);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      gsap.ticker.remove(ImageTrail);
    };
  }, []);
  return (
    <div className="mouse-container" ref={containerRef}>
      <div className="content">
        {Array.from({ length: 18 }).map((_, i) => (
          <img
            key={i}
            className="flair"
            src={`https://assets.codepen.io/16327/Revised+Flair-${i % 9}.png`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}
export default Mouseanimation;
