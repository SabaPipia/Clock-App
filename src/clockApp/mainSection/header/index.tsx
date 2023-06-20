import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./style.scss";
import { Refresh } from "../../../images/icons/";

interface HeaderProps {
  expanded: string;
}
const Header: React.FC<HeaderProps> = (props) => {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [isLoading, setIsLoading] = useState<string>("loading");

  const fetchData = async () => {
    try {
      const response = await axios(
        "https://joe-rogan-quote-generator.p.rapidapi.com/generate_rogan",
        {
          headers: {
            "X-RapidAPI-Key":
              "YOUR-APIKEY-HERE",
            "X-RapidAPI-Host": "joe-rogan-quote-generator.p.rapidapi.com",
          },
        }
      );
      const respData = response.data;
      if (respData) {
        console.log(isLoading);
        const respDataSplit = respData.split("-");
        setQuote(respDataSplit[0]);
        setAuthor(respDataSplit[1]);
        // console.log(quote);
      }
    } catch (error) {
      // #Todo show error message
    }
  };
  const handleClick = () => {
    fetchData();
    setIsLoading("loading");
    setTimeout(() => {
      setIsLoading("");
    }, 2000);
  };
  // fetchData();
  return (
    <div className={`header ${props.expanded}`}>
      <div className="quote">
        <p>{quote}</p>
        <button className="refresh" onClick={handleClick}>
          <Refresh className={`${isLoading}`} onClick={handleClick} />
        </button>
      </div>
      <h3>{author}</h3>
    </div>
  );
};

export default Header;
