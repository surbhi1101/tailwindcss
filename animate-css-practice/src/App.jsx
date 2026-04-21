import { useState } from "react";
import "animate.css";

function App() {
  const [animate, setAnimate] = useState(false);

  return (
    <div>
      <button onClick={() => setAnimate(true)}>Animate</button>

      <h1
        className={`animate__animated ${animate ? "animate__bounce" : ""}`}
        onAnimationEnd={() => setAnimate(false)}
      >
        Hello
      </h1>
      <button className="animate__animated animate__bounce">Click Me</button>
      <button className="animate__animated animate__rubberBand">Submit</button>

      <h1 className="animate__animated animate__fadeInUp">Welcome</h1>

      <button className="animate__animated animate__pulse animate__infinite">
        Buy Now
      </button>
    </div>
  );
}

export default App;
