import React from 'react';
import './searchbox.style.css';

const SearchBox = (props) => {
  return (
    <input
      className="searchbox"
      type="search"
      name="search"
      placeholder="Enter robot name(s)"
      onChange={props.onSearchChange}
    />
  );
};

export default SearchBox;
