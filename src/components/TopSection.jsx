import logo from "../images/airbnb.png";
import grid from "../images/GroupHeader.png";

export default function TopSection() {
  return (
    <header>
      <nav>
        <img className="logo" src={logo} alt="" />
      </nav>
      <div className="pics-sec">
        <div className="pics">
          <img className="picgrid" src={grid} alt="" />
        </div>
      </div>
      <div className="desc-sec">
        <h2>Online Experiences</h2>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </header>
  );
}
