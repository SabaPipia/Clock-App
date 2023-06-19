import React from "react";
import "./style.scss";
interface CardProps {
  sur: string;
  sec: string;
}
const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="card">
      <h4>{props.sur}</h4>
      <h1>{props.sec}</h1>
    </div>
  );
};

export default Card;
