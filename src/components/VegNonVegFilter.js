import React from 'react';
import { FaLeaf, FaDrumstickBite } from 'react-icons/fa';

const VegNonVegFilter = ({ vegOnly, nonVegOnly, onVegToggle, onNonVegToggle }) => {
  return (
    <div className="veg-nonveg-toggle">
      <button
        className={`toggle-button ${vegOnly ? 'active' : ''}`}
        onClick={onVegToggle}
      >
        <FaLeaf size={20} />
      </button>
      <button
        className={`toggle-button ${nonVegOnly ? 'active' : ''}`}
        onClick={onNonVegToggle}
      >
        <FaDrumstickBite size={20} />
      </button>
    </div>
  );
};

export default VegNonVegFilter;
