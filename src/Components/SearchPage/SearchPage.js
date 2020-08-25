import React from "react";
import "./SearchPages.css";
import { useStateValue } from "../../StateProvider";
import useGoogleSearch from "../../useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
// import Response from '../../response'

//Img&Icons
import googleLogo from "../../images/google.png";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const SearchPage = () => {
  const [{ term }] = useStateValue();
  //Live API CALL
  const { data } = useGoogleSearch(term);
  //MAKE API CALL
  // const data = Response;

  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img src={googleLogo} alt="logo" className="searchPage_Logo" />
        </Link>
        {/* ICONS */}

        <div className="searchPage_Body">
          <Search hideButtons />
         
          <div className="searchpage_options">
            <div className="searchpage_optionsLeft">
              <div className="searchpage_option">
                <SearchIcon />
                <Link to="all">All</Link>
              </div>
              <div className="searchpage_option">
                <DescriptionIcon />
                <Link to="news">News</Link>
              </div>
              <div className="searchpage_option">
                <ImageIcon />
                <Link to="images">Images</Link>
              </div>
              <div className="searchpage_option">
                <LocalOfferIcon />
                <Link to="shopping">shopping</Link>
              </div>
              <div className="searchpage_option">
                <RoomIcon />
                <Link to="maps">maps</Link>
              </div>
              <div className="searchpage_option">
                <MoreVertIcon />
                <Link to="more">more</Link>
              </div>
            </div>
            <div className="searchpage_optionRight">
              <div className="searchpage_option">
                <Link to="settings">Settings</Link>
              </div>
              <div className="searchpage_option">
                <Link to="tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchpage_results">
          <p className="searchpage_resultCount">
            About {data?.searchInformation.formattedTotalResults} results found
            in ({data?.searchInformation.formattedSearchTime} seonds) for {term}
          </p>
          {data?.items.map((item, index) => (
            <div className="searchpage_result" key={index}>
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchpage_resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a href={item.link} className="searchgpage_result_Title">
                <h3> {item.title}</h3>
              </a>
              <p className="searchpage_result_Snippet">{item.snippet}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
