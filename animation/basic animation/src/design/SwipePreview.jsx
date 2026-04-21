import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../assets/css/swipePreview.css";

// Data → UI mapping
const data = [
  {
    img: "https://assets.codepen.io/16327/portrait-image-8.jpg",
    text: "restart reverse scrub pin markers overwrite modifiers",
  },
  {
    img: "https://assets.codepen.io/16327/portrait-image-3.jpg",
    text: "toggleActions start end once refresh from to",
  },
  {
    img: "https://assets.codepen.io/16327/portrait-image-1.jpg",
    text: "ScrollSmoother Flip Draggable SplitText InertiaPlugin",
  },
  {
    img: "https://assets.codepen.io/16327/portrait-image-14.jpg",
    text: "onComplete onUpdate quickSetter quickTo utils.toArray.",
  },
  {
    img: "https://assets.codepen.io/16327/portrait-image-6.jpg",
    text: "Power2 Power3 Power4 Back Elastic Bounce Expo Sine",
  },
];

const SwipePreview = () => {
  // Refs (bridge to DOM)
  // Stores all list item DOM nodes
  // Needed because GSAP works on real DOM elements

  const itemsRef = useRef([]);
  // Runs on mount:

  // initializes GSAP
  // attaches hover + mouse listeners
  // prepares animation per item
  useEffect(() => {
    let firstEnter = false;
    // You build an array of elements to loop over later
    itemsRef.current.forEach((el) => {
      const image = el.querySelector(".swipeimage");

      // initial position fix
      // Initial positioning
      // This centers the image on cursor:
      gsap.set(image, { xPercent: -50, yPercent: -50 });

      // Smooth cursor movement
      // Why quickTo?
      // super performant
      // smooth interpolation
      // avoids lag from repeated gsap.to()
      // This is what gives that premium trailing effect
      const setX = gsap.quickTo(image, "x", {
        duration: 0.4,
        ease: "power3",
      });

      const setY = gsap.quickTo(image, "y", {
        duration: 0.4,
        ease: "power3",
      });
      // Cursor tracking logic
      // On every mouse move:
      // image moves to cursor position
      const align = (e) => {
        // firstEnter trick
        //  Prevents jump animation on first hover
        //  directly positions image under cursor
        if (firstEnter) {
          setX(e.clientX);
          setY(e.clientY);
          firstEnter = false;
        } else {
          setX(e.clientX);
          setY(e.clientY);
        }
      };

      // Start / Stop tracking
      //       Tracking is:

      // enabled on hover
      // disabled when leaving
      const startFollow = () => document.addEventListener("mousemove", align);

      const stopFollow = () => document.removeEventListener("mousemove", align);

      // Fade animation
      // autoAlpha:
      // opacity + visibility together

      // Behavior:

      // fade.play() → show image
      // fade.reverse() → hide image
      const fade = gsap.to(image, {
        autoAlpha: 1,
        duration: 0.2,
        paused: true,
        onReverseComplete: stopFollow,
      });
      // Hover Events
      //  Mouse Enter
      //       Sequence:
      // mark first entry
      // show image
      // start tracking
      // immediately position image
      const handleEnter = (e) => {
        firstEnter = true;
        fade.play();
        startFollow();
        align(e);
      };
      // Mouse Leave
      //  Image fades out
      // stopFollow() runs after animation ends
      const handleLeave = () => {
        fade.reverse();
      };

      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);

      // cleanup per element
      // Cleanup;
      //Prevents:
      // memory leaks
      // duplicate listeners
      // performance issues
      el.cleanup = () => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
        stopFollow();
      };
    });

    return () => {
      // Loop over each item
      // For every list item:
      // grab its image
      // create its own animation system
      itemsRef.current.forEach((el) => el?.cleanup?.());
    };
  }, []);

  return (
    // You render a list from this array:
    // Each <li> holds:

    // a hidden preview image
    // some text
    <ul className="swipe-list">
      {data.map((item, i) => (
        <li
          key={i}
          ref={(el) => (itemsRef.current[i] = el)}
          className="swipe-item"
        >
          <img src={item.img} alt="" className="swipeimage" />
          <div className="swipe-text">
            <h3>{item.text}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SwipePreview;
