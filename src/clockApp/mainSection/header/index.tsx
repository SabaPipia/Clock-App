import React, { useState } from "react";
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
              "4b3cc38ef9msh5b1b9b6097d88c7p1b4880jsna6fdd16393e9",
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
      }
    } catch (error) {
      return "something went Wrong";
    }
  };
  const handleClick = () => {
    fetchData();
    setIsLoading("loading");
    setTimeout(() => {
      setIsLoading("");
    }, 2000);
  };
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
