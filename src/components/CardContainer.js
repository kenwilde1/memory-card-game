import { useState, useEffect } from "react";
import Card from "./Card";
import cardData from "../cardData";

const CardContainer = (props) => {
  const { handleClick } = props;
  const [cards, setCards] = useState(cardData);

  // Uses the Durstenfield shuffle to rearrange array - https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
  const shuffleCards = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
  };

  useEffect(() => {
    let nextCards = [...cards];
    shuffleCards(nextCards);
    setCards(nextCards);
  }, [handleClick]);

  return (
    <div className="card-container">
      {cards.map((card) => (
        <Card
          name={card.title}
          image={card.image}
          bgcolor={card.bgColor}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default CardContainer;
