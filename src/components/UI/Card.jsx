import "./Card.css";

const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  return <li className="card">{props.children}</li>;
};

export default Card;
