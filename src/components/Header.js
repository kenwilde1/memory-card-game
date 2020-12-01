import TheChildBody from "../images/TheChildBody.png";

const Header = (props) => {
  const { score, highScore } = props;

  return (
    <div className="header">
      <h2>Mandalorian Memory Mangle</h2>
      <h3>Score: {score}</h3>
      <h3>High Score: {highScore}</h3>
    </div>
  );
};

export default Header;
