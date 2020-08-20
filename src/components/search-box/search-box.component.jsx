import React from "react";
import styled from "styled-components";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <Wrapper type="search" placeholder={placeholder} onChange={handleChange} />
  );
};

const Wrapper = styled.input`
  -webkit-appearance: none;
  border: none;
  outline: none;
  padding: 10px;
  width: 180px;
  line-height: 1.5rem;
  margin-bottom: 3rem;
`;

export default SearchBox;
