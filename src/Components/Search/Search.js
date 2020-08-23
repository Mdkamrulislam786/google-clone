import React, { useState } from "react";
import "./Search.css";
import SearcIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";

const Search = () => {
  const [input, setInput] = useState("");
  const search = (e) => {
    e.preventDefault();
    console.log('You hit the neter button')
  };

  return (
    <form className="search">
      <div className="search_inpput">
        <SearcIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      <div className="search_buttons">
        <Button type="submit" varient="outlined" onClick={search}>
          Google Search
        </Button>
        <Button varient="outlined">I am feeling lucky</Button>
      </div>
    </form>
  );
};

export default Search;
