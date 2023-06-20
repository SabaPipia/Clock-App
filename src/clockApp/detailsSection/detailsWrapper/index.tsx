import React from "react";
import Card from "../card";
import "./style.scss";

interface DetailsWrapperProps {
  expanded: string;
  timeZone: string | undefined;
  dayOfYear: number | undefined;
  dayOfWeek: number | undefined;
  weekNumber: number | undefined;
}

const DetailsWrapper: React.FC<DetailsWrapperProps> = (props) => {
  const timeZoneE = props.timeZone?.split("/")[0];
  // console.log(timeZoneE);
  return (
    <div className={`details ${props.expanded}`}>
      <div className="detailsLeft">
        <Card title="Current Timezone" content={timeZoneE} />
        <Card title="Day of the Year" content={props.dayOfYear} />
      </div>
      <div className="line"></div>
      <div className="detailsRight">
        <Card title="Day of the week" content={props.dayOfWeek} />
        <Card title="week number" content={props.weekNumber} />
      </div>
    </div>
  );
};

export default DetailsWrapper;
