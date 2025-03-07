import React from "react";
import "./SearchBar.css";

function SearchBar({ searchTerm, handleSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar libros..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar__input"
      />
    </div>
  );
}

export default SearchBar;