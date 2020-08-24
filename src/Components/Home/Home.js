import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
//icons
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import googleLogo from "../../images/google.png";
//Componne
import Search from "../Search/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home_headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home_body">
        <img className="googleLogo" src={googleLogo} alt="google" />
        <div className="inputContainer">
          <Search hideButtons/>
        </div>
      </div>
    </div>
  );
};

export default Home;
