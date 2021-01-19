import React, { Component, useState } from "react";
import API from "../utils/API";
import Container from "../components/container";
import SearchForm from "../components/searchForm";
import Results from "../components/results";

function Search() 

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: ""
});

const PhotoComp = ({ photo }) => {
  const { user, urls } = photo;

  return (
    <Fragment>
      <img className="img" src={urls.regular} />
      <a
        className="credit"
        target="_blank"
        href={`https://unsplash.com/@${user.username}`}
      >
        {user.name}
      </a>
    </Fragment>
  );
};

};


export default Search;