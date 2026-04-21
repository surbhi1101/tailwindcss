import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./css/ProfileCard.css";

function ProfileCard() {
  const cardRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.set(".card", { autoAlpha: 0 })
        .set(".card-top-section", { y: -100, autoAlpha: 0 })
        .set(".card-block, .card-action", { y: 100, autoAlpha: 0 })
        .set(".card-img-top", { autoAlpha: 0, scale: 0.5 })
        .to(".card", { duration: 0.5, autoAlpha: 1 })
        .to(
          ".card-top-section, .card-block, .card-action",
          { duration: 0.35, y: 0, autoAlpha: 1 },
          "-=0.2",
        )
        .to(".card-img-top", {
          duration: 0.5,
          autoAlpha: 1,
          scale: 1,
          ease: "elastic.out(1, 0.5)",
        });
    }, cardRef);

    return () => ctx.revert();
  }, []);
  const cards = [
    {
      name: "NYZ",
      text: "Hello! This is Zuhib Daud aka NYZ. I'm a young and aspiring web developer.",
      img: "https://i.pravatar.cc/300?img=1",
    },
    {
      name: "ALEX",
      text: "Frontend engineer who loves animations and clean UI design systems.",
      img: "https://i.pravatar.cc/300?img=2",
    },
    {
      name: "SARA",
      text: "Creative designer focused on modern UI/UX and interactive experiences.",
      img: "https://i.pravatar.cc/300?img=3",
    },
  ];
  return (
    <div className="profile-wrapper">
      <div ref={cardRef} className="profile-wrapper">
        {cards.map((card, i) => (
          <div key={i} className="card">
            {/* TOP */}
            <div className="card-top-section">
              <div
                className="card-img-top"
                style={{ backgroundImage: `url(${card.img})` }}
              ></div>
            </div>

            {/* BODY */}
            <div className="card-block">
              <h4 className="card-title">{card.name}</h4>
              <p className="card-text">{card.text}</p>
            </div>

            {/* FOOTER */}
            <div className="card-action">
              <a href="#" className="btn">
                <i className="fa fa-info"></i> More Info
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;
