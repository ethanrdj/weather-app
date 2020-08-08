import React from "react";
import PropTypes from "prop-types";

const SearchForm = (props) => {
  const handleInputChange = (event) => {
    props.text(event.target.value);
  };
  return (
    <form>
      <input
        type="text"
        onChange={handleInputChange}
        value={props.value}
      ></input>
      <button onClick={() => props.searchValue(props.location)}>Search</button>
    </form>
  );
};

SearchForm.prototype = {
  text: PropTypes.func,
};

export default SearchForm;
