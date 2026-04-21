import "./css/FlipCards.css";

const cards = [
  {
    title: "Brohm Lake",
    img: "https://images.unsplash.com/photo-1486162928267-e6274cb3106f",
    hue: 220,
  },
  {
    title: "Mountain Escape",
    img: "https://images.unsplash.com/photo-1545436864-cd9bdd1ddebc",
    hue: 170,
  },
  {
    title: "Nature View",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    hue: 350,
  },
];

function FlipCards() {
  return (
    <div className="wrapper">
      {cards.map((card, i) => (
        <div
          key={i}
          className="flip-card-container"
          style={{ "--hue": card.hue }}
        >
          <div className="flip-card">
            {/* FRONT */}
            <div className="card-front">
              <figure>
                <div className="img-bg"></div>
                <img src={card.img} alt={card.title} />
                <figcaption>{card.title}</figcaption>
              </figure>

              <ul>
                <li>Beautiful Location</li>
                <li>Peaceful Nature</li>
                <li>Photography Spot</li>
                <li>Adventure Ready</li>
                <li>Explore Now</li>
              </ul>
            </div>

            {/* BACK */}
            <div className="card-back">
              <figure>
                <div className="img-bg"></div>
                <img src={card.img} alt={card.title} />
              </figure>

              <button>Book Now</button>

              <div className="design-container">
                {[...Array(8)].map((_, i) => (
                  <span key={i} className={`design design--${i + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FlipCards;
