const Card = (props) => {
  return (
    <div
      className="individual-card-container"
      style={{ background: props.bgcolor }}
      onClick={props.handleClick}
    >
      <div className="card-content-container">
        <img src={props.image} alt={`${props.name}`} />
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};

export default Card;
