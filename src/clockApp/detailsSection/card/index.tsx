import React from "react";
import "./style.scss";
interface CardProps {
  title: string;
  content: string | number | undefined;
}
const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="card">
      <h4>{props.title}</h4>
      <h1>{props.content}</h1>
    </div>
  );
};

export default Card;
