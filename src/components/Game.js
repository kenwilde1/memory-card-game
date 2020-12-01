import { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import Header from "./Header";

const Game = () => {
  const [cards, addCard] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleClick = (e) => {
    const card = e.currentTarget
      .querySelector(".card-content-container")
      .querySelector("h3").innerHTML;

    if (!cards.includes(card)) {
      addCard((prevArray) => [...prevArray, card]);
      increaseScore();
    } else {
      increaseHighScore();
      resetScore();
    }
  };

  const increaseScore = () => {
    setScore(score + 1);
  };

  const resetScore = () => {
    setScore(0);
    addCard([]);
  };

  const increaseHighScore = () => {
    if (score > highScore) {
      setHighScore(score);
    }
  };

  return (
    <div>
      <Header score={score} highScore={highScore} />
      <CardContainer
        handleClick={handleClick}
        score={score}
        highScore={highScore}
      />
    </div>
  );
};

export default Game;
