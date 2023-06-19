import React from "react";
import Card from "../card";
import "./style.scss";

interface DetailsWrapperProps {
  expanded: string;
}

const DetailsWrapper: React.FC<DetailsWrapperProps> = (props) => {
  return (
    <div className={`details ${props.expanded}`}>
      <div className="detailsLeft">
        <Card sur="Current Timezone" sec="Europe" />
        <Card sur="Day of the Year" sec="295" />
      </div>
      <div className="line"></div>
      <div className="detailsRight">
        <Card sur="Day of the week" sec="5" />
        <Card sur="week number" sec="42" />
      </div>
    </div>
  );
};

export default DetailsWrapper;
