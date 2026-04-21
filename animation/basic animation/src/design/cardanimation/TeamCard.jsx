import "./css/TeamCard.css";

const team = [
  {
    name: "Michele Miller",
    role: "Web Developer",
    img: "https://picsum.photos/130/130?image=1027",
  },
  {
    name: "Patricia Knott",
    role: "Web Developer",
    img: "https://picsum.photos/130/130?image=839",
  },
  {
    name: "Justin Ramos",
    role: "Web Developer",
    img: "https://picsum.photos/130/130?image=856",
  },
  {
    name: "Mary Huntley",
    role: "Web Developer",
    img: "https://picsum.photos/130/130?image=836",
  },
];

function TeamCard() {
  return (
    <div className="team-wrapper">
      {team.map((member, i) => (
        <div className="our-team" key={i}>
          <div className="picture">
            <img src={member.img} alt={member.name} />
          </div>

          <div className="team-content">
            <h3 className="name">{member.name}</h3>
            <h4 className="title">{member.role}</h4>
          </div>

          <ul className="social">
            <li>
              <a href="#">FB</a>
            </li>
            <li>
              <a href="#">TW</a>
            </li>
            <li>
              <a href="#">IG</a>
            </li>
            <li>
              <a href="#">IN</a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TeamCard;
