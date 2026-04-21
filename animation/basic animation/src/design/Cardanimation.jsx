import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../assets/css/card.css";
function Cardanimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.set(containerRef.current.querySelectorAll(".information"), {
      yPercent: 100,
    });

    const containers = containerRef.current.querySelectorAll(".container");

    containers.forEach((container) => {
      let info = container.querySelector(".information");
      let silhouette = container.querySelector(".silhouette .cover");

      let tl = gsap.timeline({ paused: true });

      tl.to(info, { yPercent: 0 }).to(silhouette, { opacity: 0 }, 0);

      container.addEventListener("mouseenter", () => tl.timeScale(1).play());

      container.addEventListener("mouseleave", () => tl.timeScale(3).reverse());
    });
  }, []);

  return (
    <div ref={containerRef} className="wrapper">
      <div className="card-container">
        <div className="silhouette" id="Bulbasaur">
          <div className="cover"></div>
        </div>

        <div className="card-abc">
          <h1>Who's</h1>

          <div className="information" id="BulbasaurInfo">
            <h2 id="BulbasaurName">Bulbasaur</h2>

            <p>
              Bulbasaur can be seen napping in bright sunlight. There is a seed
              on its back.
            </p>

            <p className="type">
              Type:
              <button id="grass">Grass</button>
              <button id="poison">Poison</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardanimation;
