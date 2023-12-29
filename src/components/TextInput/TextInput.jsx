import React from "react";

import "./styles.css";

export default function TextInput({ searchValue, handleChange }) {
  return (
    <input
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Search for a post"
    />
  );
}
