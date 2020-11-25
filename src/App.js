import "./App.css";
import Card from "./components/Card";
import cards from "./cardData";

const App = () => {
  const cardComponents = cards.map((card) => (
    <Card
      name={card.title}
      description={card.description}
      image={card.image}
      bgcolor={card.bgColor}
    />
  ));

  return <div className="App">{cardComponents}</div>;
};

export default App;
