import React from "react";
import "./style.scss";
import { Refresh } from "../../../images/icons/";

interface HeaderProps {
  expanded: string;
}
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className={`header ${props.expanded}`}>
      <div className="quote">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          laudantium, ipsum quis dicta veniam ab culpa maxime perferendis
          pariatur et adipisci officiis cumque possimus inventore, voluptatum
          quos deserunt rem assumenda.
        </p>
        <Refresh />
      </div>
      <h3>Ada Lovelace</h3>
    </div>
  );
};

export default Header;
