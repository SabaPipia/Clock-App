import React from "react";
import "./style.scss";
import { Sun, ArrowDown, ArrowUp } from "../../../images/icons";

interface ClockProps {
  expanded: string;
  setIsExpanded: (info: string) => void;
  datetime: string | undefined;
  timezone: string | undefined;
}

const Clock: React.FC<ClockProps> = (props) => {
  const dataDate: string | undefined = props.datetime;
  const date: Date | undefined = dataDate ? new Date(dataDate) : undefined;
  let formattedTime = "";
  if (date) {
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hourCycle: "h24",
    };
    formattedTime = date.toLocaleTimeString(undefined, options);
  }
  let message = "";
  // console.log(formattedTime.slice(0, -6));
  const hrs: number | undefined = Number(formattedTime.slice(0, -6));
  // console.log(hrs);
  if (hrs >= 5 && hrs <= 12) {
    message = "Good morning";
  } else if (hrs >= 12 && hrs <= 18) {
    message = "Good Afternoon";
  } else {
    message = "Good evening";
  }
  return (
    <div className="clock">
      <div className="clockPart">
        <div className="message">
          <Sun />
          <h3>{message} It's Currently</h3>
        </div>
        <div className="time">
          <h1>
            {formattedTime.slice(0, -2)}
            {formattedTime.split(":")[2]}
          </h1>
        </div>
        <div className="location">
          <h2>{props.timezone?.replace("/", ",")}</h2>
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
          {props.expanded === "expanded" ? <h6>LESS</h6> : <h6>MORE</h6>}

          <div className={`${props.expanded}`}>
            <ArrowUp />
            {/* {props.expanded === "expanded" ? <ArrowUp /> : <ArrowDown />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
