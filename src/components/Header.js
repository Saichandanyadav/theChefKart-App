import React from 'react';
import { FaAngleLeft, FaSearch } from 'react-icons/fa';

const Header = ({ onBack, onSearchChange, searchTerm }) => {
  return (
    <div className="header">
      <button onClick={onBack} className="icon-button">
        <FaAngleLeft />
      </button>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search for a dish..."
          className="search-bar"
          value={searchTerm}
          onChange={onSearchChange}
        />
        <FaSearch className="search-icon" />
      </div>
    </div>
  );
};

export default Header;