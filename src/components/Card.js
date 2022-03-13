export default function Card(props) {
  let badgetext;
  if (props.openSpots === 0) badgetext = "SOLD OUT";
  else if (props.openSpots === "Online") badgetext = "Online";
  else badgetext = "Filling Fast";
  return (
    <div className="card">
      {badgetext && <div className="card-badge">{badgetext}</div>}
      <img
        alt="imk"
        src={`../images/${props.coverImg}`}
        className="card--image"
      />
      <div className="card--stats">
        <img src="../images/star.png" alt="imk" className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
