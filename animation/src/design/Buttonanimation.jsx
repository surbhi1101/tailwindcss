import "../assets/css/button.css";
function Buttonanimation() {
  return (
    <>
      <div className="main-container">
        <div className="container">
          {/* Scale Hover Button Used everywhere (safe & clean) */}
          <button className="btn-scale btn">Click Me</button>
          {/* Slide Background Effect Feels premium (used in landing pages) */}
          <button className="btn-slide btn">
            <span>Hover Me</span>
          </button>
          {/*Glow / Shadow Pulse Used in modern UI / neon styles */}
          <button className="btn-glow btn">Hover Me</button>
          {/* Ripple Effect Used in mobile & material design */}
          <button className="btn-ripple btn">Click Me</button>
          {/* Border Animation :Very popular in portfolio sites */}
          <button className="btn-border btn">Hover Me</button>
        </div>
        <div className="container-2">
          {/* button icon Used in "Next", "Read More" */}
          <button className="btn-icon btn">Next →</button>
          {/*btn-bounce Gives tactile feedback (very important UX) */}
          <button className="btn-bounce btn">Click</button>
          {/* Gradient Hover Button Used in modern SaaS UI */}
          <button className="btn-gradient btn">Hover Me</button>
          {/* Outline to Fill Animation Very common in landing pages */}
          <button className="btn-fill btn">Hover Me</button>
          {/* Underline Slide Button Used in text buttons / links */}

          <button className="btn-underline btn">Hover Me</button>
        </div>
      </div>
    </>
  );
}

export default Buttonanimation;
