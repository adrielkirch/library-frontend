import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs"; // Import search icon from react-icons library

const SearchInput = ({ placeholder, onChange }) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>
        <BsSearch className="search-icon" />
      </InputGroup.Text>
      <FormControl
        placeholder={placeholder}
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={onChange}
        className="search-input"
      />
    </InputGroup>
  );
};

export default SearchInput;
