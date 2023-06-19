import React, { useState } from "react";
import Header from "../header";
import Clock from "../clock";
import "./style.scss";
import DetailsWrapper from "../../detailsSection/detailsWrapper";

function MainWrapper() {
  const [isExpanded, setIsExpanded] = useState("");
  console.log(isExpanded);
  return (
    <div className={`mainWrapper ${isExpanded}`}>
      <div className={`color ${isExpanded}`}>
        <div className={`wrapperHeader ${isExpanded}`}>
          <Header expanded={isExpanded} />
        </div>
        <div className="wrapperClock">
          <Clock expanded={isExpanded} setIsExpanded={setIsExpanded} />
        </div>
      </div>
      <div className={`detailsWrapper ${isExpanded}`}>
        <DetailsWrapper expanded={isExpanded} />
      </div>
    </div>
  );
}

export default MainWrapper;
