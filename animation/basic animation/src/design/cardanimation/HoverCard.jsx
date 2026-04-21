import "./css/HoverCard.css";

const cards = [
  {
    title: "Mountain View",
    copy: "Check out all of these gorgeous mountain trips with beautiful views of the mountains",
    button: "View Trips",
    img: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28",
  },
  {
    title: "To The Beach",
    copy: "Plan your next beach trip with these fabulous destinations",
    button: "View Trips",
    img: "https://images.unsplash.com/photo-1533903345306-15d1c30952de",
  },
  {
    title: "Desert Destinations",
    copy: "It's the desert you've always dreamed of",
    button: "Book Now",
    img: "https://images.unsplash.com/photo-1545243424-0ce743321e11",
  },
  {
    title: "Explore The Galaxy",
    copy: "Seriously, just blast off into outer space today",
    button: "Book Now",
    img: "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99",
  },
];

function HoverCard() {
  return (
    <main className="page-content">
      {cards.map((card, i) => (
        <div key={i} className="card">
          <div
            className="card-bg"
            style={{ backgroundImage: `url(${card.img})` }}
          />
          <div className="content">
            <h2 className="title">{card.title}</h2>
            <p className="copy">{card.copy}</p>
            <button className="ab-btn">{card.button}</button>
          </div>
        </div>
      ))}
    </main>
  );
}

export default HoverCard;
