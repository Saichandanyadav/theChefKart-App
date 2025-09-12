import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const IngredientModal = ({ selectedDishes, onRemove, onClose }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleOrderNow = () => {
    if (selectedDishes.length > 0) {
      setOrderPlaced(true);
      setShowConfirmation(true);
      
      setTimeout(() => {
        setShowConfirmation(false);
        onClose();
      }, 3000);
    }
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
        {selectedDishes.length > 0 && !orderPlaced && (
          <div className="order-now-btn-container">
            <button onClick={handleOrderNow} className="order-now-btn">Order Now</button>
          </div>
        )}
      </div>

      {showConfirmation && (
        <div className="order-confirmation">
          <p>Your order has been successfully placed!</p>
        </div>
      )}
    </div>
  );
};

export default IngredientModal;
