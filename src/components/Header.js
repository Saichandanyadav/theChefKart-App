import React from 'react';
import { FaAngleLeft, FaSearch, FaShoppingBag } from 'react-icons/fa';

const Header = ({ onBack, onSearchChange, searchTerm, onShowOrders, orderCount }) => {
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
      <button className="orders-icon-button" onClick={onShowOrders}>
        <FaShoppingBag />
        {orderCount > 0 && <span className="order-count">{orderCount}</span>}
      </button>
    </div>
  );
};

export default Header;