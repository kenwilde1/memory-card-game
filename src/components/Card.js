const Card = (props) => {
  return (
    <div className="card-container" style={{ background: props.bgcolor }}>
      <div className="card-content-container">
        <h3>{props.name}</h3>
        <img src={props.image} alt={`${props.name}`} />
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
