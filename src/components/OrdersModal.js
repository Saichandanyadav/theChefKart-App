import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const OrdersModal = ({ placedOrders, onClose }) => {
  const [openOrder, setOpenOrder] = useState(null);
  const [hoveredOrder, setHoveredOrder] = useState(null);

  const handleOrderClick = (orderIndex) => {
    setOpenOrder(openOrder === orderIndex ? null : orderIndex);
  };

  const isOrderExpanded = (orderIndex) => {
    return openOrder === orderIndex || (openOrder === null && hoveredOrder === orderIndex);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Your Placed Orders ({placedOrders.length})</h3>
          <button onClick={onClose} className="modal-close-btn">
            <FaTimes />
          </button>
        </div>
        <div className="modal-dish-list">
          {placedOrders.length === 0 ? (
            <p>You haven't placed any orders yet.</p>
          ) : (
            placedOrders.map((order, orderIndex) => (
              <div
                key={orderIndex}
                className={`order-item ${isOrderExpanded(orderIndex) ? 'expanded' : ''}`}
                onMouseEnter={() => setHoveredOrder(orderIndex)}
                onMouseLeave={() => setHoveredOrder(null)}
                onClick={() => handleOrderClick(orderIndex)}
              >
                <div className="order-header">
                  <p className="order-date">
                    Order {orderIndex + 1}: {new Date(order.date).toLocaleString()}
                  </p>
                  <p className="order-total-items">Items: {order.items.length}</p>
                </div>
                <div className="order-items-container">
                  {order.items.map(dish => (
                    <div key={dish.id} className="modal-dish-card">
                      <img src={dish.image} alt={dish.name} className="modal-dish-image" />
                      <div className="modal-dish-info">
                        <h4>{dish.name}</h4>
                        <p>{dish.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <hr className="order-separator" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersModal;