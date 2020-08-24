import React, { useState } from "react";
import "./Search.css";
import SearcIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

const Search = ({ hideButtons }) => {
  const [ {}, dispatch] = useStateValue();
//api_key=AIzaSyCQUnZoapVot8lkUdS7Ux-hi7ynv4RP_BQ
  const [input, setInput] = useState("");
  const history = useHistory("");

  const search = (e) => {
    e.preventDefault();
    console.log(`You hit the neter button>>`, input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    //do something with input..come back and fix
    history.push("./search");
  };

  return (
    <form className="search">
      <div className="search_inpput">
        <SearcIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search_buttons">
          <Button type="submit" varient="outlined" onClick={search}>
            Google Search
          </Button>
          <Button varient="outlined">I am feeling lucky</Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button
            className="hidebuttons"
            type="submit"
            varient="outlined"
            onClick={search}
          >
            Google Search
          </Button>
          <Button className="hidebuttons" varient="outlined">
            I am feeling lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
