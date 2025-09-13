import React from 'react';
import { FaTimes } from 'react-icons/fa';

const IngredientModal = ({ selectedDishes, onRemove, onPlaceOrder, onClose }) => {
  const handlePlaceOrder = () => {
    onPlaceOrder();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Your Party Menu</h3>
          <button onClick={onClose} className="modal-close-btn"><FaTimes /></button>
        </div>
        <div className="modal-dish-list">
          {selectedDishes.length === 0 ? (
            <p>No dishes selected yet.</p>
          ) : (
            selectedDishes.map(dish => (
              <div key={dish.id} className="modal-dish-card">
                <img src={dish.image} alt={dish.name} className="modal-dish-image" />
                <div className="modal-dish-info">
                  <h4>{dish.name}</h4>
                  <p>{dish.description}</p>
                </div>
                <button onClick={() => onRemove(dish)} className="modal-remove-btn">
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        {selectedDishes.length > 0 && (
          <div className="order-now-btn-container">
            <button onClick={handlePlaceOrder} className="order-now-btn">Order Now</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default IngredientModal;