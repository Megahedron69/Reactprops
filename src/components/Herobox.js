import image2 from "../images/photo-grid.png";
export default function Herobox() {
  return (
    <div className="Herobox">
      <div className="imagebox">
        <img src={image2} alt="grid"></img>
      </div>
      <div className="textboxes">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
