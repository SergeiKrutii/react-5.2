import React from "react";
import PropTypes from "prop-types";

const Filter = (props) => {
  const { filter, onInputChange } = props;

  return (
    <>
      <p>Find contacts by name</p>
      <input
        name="filter"
        value={filter}
        onChange={onInputChange}
        type="text"
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Filter;
