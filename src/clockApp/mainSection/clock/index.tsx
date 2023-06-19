import React from "react";
import "./style.scss";
import { Sun, ArrowDown, ArrowUp } from "../../../images/icons";

interface ClockProps {
  expanded: string;
  setIsExpanded: (info: string) => void;
}

const Clock: React.FC<ClockProps> = (props) => {
  return (
    <div className="clock">
      <div className="clockPart">
        <div className="message">
          <Sun />
          <h3>Good Morning, It's Currently</h3>
        </div>
        <div className="time">
          <h1>11:37</h1>
          <h2>BST</h2>
        </div>
        <div className="location">
          <h2>In London,UK</h2>
        </div>
      </div>
      <div className="moreButton">
        <div
          className="btn"
          onClick={() => {
            if (props.expanded === "expanded") {
              props.setIsExpanded("");
            } else {
              props.setIsExpanded("expanded");
            }
          }}
        >
          <h6>MORE</h6>
          <div>
            <ArrowUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
