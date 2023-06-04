import TopSection from "./components/TopSection";
import Card from "./components/Card";
import Data from "./components/Data";

export default function App() {
  const cardElem = Data.map((cardItem) => {
    return <Card key={cardItem.id} cardItem={cardItem} />;
  });

  return (
    <div className="container">
      <TopSection />
      <div className="cardContainer">{cardElem}</div>
    </div>
  );
}
