import React from "react";
import "./SearchPages.css";
import { useStateValue } from "../../StateProvider";
import useGoogleSearch from '../../useGoogleSearch'
import response from '../../response'

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  //Live API CALL
  // const {data} = useGoogleSearch(term);
  const data = response
  console.log(data)
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage_Results"></div>
    </div>
  );
};

export default SearchPage;
