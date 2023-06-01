import TopSection from "./components/TopSection";
import Card from "./components/Card";
import Data from "./components/Data";

export default function App() {
  const cardElem = Data.map((cardItem) => {
    return (
      <Card
        key={cardItem.id}
        /*img={cardItem.coverImg}
        rating={cardItem.stats.rating}
        reviewCount={cardItem.stats.reviewCount}
        location={cardItem.location}
        title={cardItem.title}
        price={cardItem.price}
        openSpots={cardItem.openSpots}*/
        cardItem={cardItem}
      />
    );
  });

  return (
    <div className="container">
      <TopSection />
      <div className="cardContainer">{cardElem}</div>
    </div>
  );
}
