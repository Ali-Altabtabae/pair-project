import React from "react";
import { SearchBarStyled } from "../styles";


const SearchBar = (props) => {
    
  return (
    <SearchBarStyled
      placeholder="Search for a actor name"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
