import React from 'react';

const Footer = ({ totalDishes, onContinue }) => {
  return (
    <div className="footer">
      <span>Total Dishes Selected: {totalDishes}</span>
      <button className="continue-btn" onClick={onContinue}>
        Continue
      </button>
    </div>
  );
};

export default Footer;