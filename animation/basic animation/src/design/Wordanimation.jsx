import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
function Wordanimation() {
  const wordRef = useRef(null);
  const wordSplit = useRef(null);

  // words to show one word after one
  useEffect(() => {
    wordSplit.current = new SplitText(wordRef.current, {
      type: "words",
    });

    gsap.from(wordSplit.current.words, {
      //can give animation from the both direction x & y
      x: 50,
      opacity: 0,
      duration: 1,
      // bounce effect
      ease: "back.out(1.7)",
      stagger: 0.1,
    });

    return () => wordSplit.current.revert();
  }, []);
  return (
    <div className="word-split">
      <h4 ref={wordRef}>Thank you for watching this animation</h4>
    </div>
  );
}

export default Wordanimation;
