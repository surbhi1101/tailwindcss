import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
function Lineanimation() {
  const lineRef = useRef(null);
  const lineSplit = useRef(null);

  // line split is used to divide the lines
  useEffect(() => {
    lineSplit.current = new SplitText(lineRef.current, {
      type: "lines",
    });

    gsap.from(lineSplit.current.lines, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      // it is used for the line by line output
      stagger: 0.2,
    });

    return () => lineSplit.current.revert();
  }, []);

  return (
    <div className="line-spliting" ref={lineRef}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        consequuntur sint velit magnam provident maiores distinctio, ipsa
        expedita odio? Repudiandae, architecto? Eveniet ipsum repellat facere
        quasi. Esse, porro magni. Doloremque. Eligendi quo voluptatem aperiam
        quas nesciunt maxime consequuntur tempore. Cumque laudantium
        exercitationem optio aut laborum? Aperiam commodi in, nemo distinctio
        hic doloribus ut maxime perferendis placeat, ipsum repudiandae officia
        dignissimos?
      </p>
    </div>
  );
}

export default Lineanimation;
