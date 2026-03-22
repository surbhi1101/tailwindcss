import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
function Charanimation() {
  const textRef = useRef(null);
  const charSplit = useRef(null);

  // chars it is used to divide in charcter
  useEffect(() => {
    charSplit.current = new SplitText(textRef.current, {
      type: "chars",
    });

    // what effect should be there on the letter
    gsap.from(charSplit.current.chars, {
      x: 100,
      opacity: 0,
      duration: 0.6,

      ease: "power4.out",
      //used for the letter to come one by one
      stagger: 0.05,
    });
    //used to return the text it is after the animation
    return () => charSplit.current.revert();
  }, []);

  return (
    <div className="letter-split">
      <h1 ref={textRef}>Hello world</h1>
    </div>
  );
}

export default Charanimation;
