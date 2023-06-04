import star from "../images/Starlogo.png";

export default function Card(props) {
  let badgeText;
  if (props.cardItem.openSpots <= 0) {
    badgeText = "SOLD OUT";
  } else if (props.cardItem.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {(props.cardItem.openSpots <= 0 ||
        props.cardItem.location === "Online") && (
        <div className="soldout">{badgeText}</div>
      )}
      <img className="photo-1" src={props.cardItem.coverImg} alt="" />
      <div className="lil-desc">
        <img src={star} alt="" />
        <span>{props.cardItem.stats.rating}</span>
        <p>
          ({props.cardItem.stats.reviewCount}) • {props.cardItem.location}
        </p>
      </div>
      <p className="card-1desc">{props.cardItem.title}</p>
      <p>
        <span className="Bold">€ {props.cardItem.price}</span>/ per person
      </p>
    </div>
  );
}
