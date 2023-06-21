import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../header";
import Clock from "../clock";
import "./style.scss";
import DetailsWrapper from "../../detailsSection/detailsWrapper";

export interface Data {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: null;
  dst_offset: number;
  dst_until: null;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
}
function MainWrapper() {
  const [isExpanded, setIsExpanded] = useState("");
  const [data, setData] = useState<Data | undefined>();
  // console.log(isExpanded);

  const fetchData = async () => {
    try {
      const response = await axios("http://worldtimeapi.org/api/ip");
      const respData = response.data;
      setData(respData);
    } catch (error) {
      return "Something Went Wrong";
    }
  };
  useEffect(() => {
    const interval = setInterval(fetchData, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  // console.log
  return (
    <div className={`mainWrapper ${isExpanded}`}>
      <div className={`color ${isExpanded}`}>
        <div className={`wrapperHeader ${isExpanded}`}>
          <Header expanded={isExpanded} />
        </div>
        <div className="wrapperClock">
          <Clock
            expanded={isExpanded}
            setIsExpanded={setIsExpanded}
            datetime={data?.datetime}
            timezone={data?.timezone}
          />
        </div>
      </div>
      <div className={`detailsWrapper ${isExpanded}`}>
        <DetailsWrapper
          expanded={isExpanded}
          timeZone={data?.timezone}
          dayOfYear={data?.day_of_year}
          dayOfWeek={data?.day_of_week}
          weekNumber={data?.week_number}
        />
      </div>
    </div>
  );
}

export default MainWrapper;
