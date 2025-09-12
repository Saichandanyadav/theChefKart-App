import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { useState } from 'react';

const DishCard = ({ dish, onAdd, onRemove, onIngredientClick, isAdded }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncatedDescription = dish.description.length > 50 ? `${dish.description.substring(0, 50)}...` : dish.description;

  return (
    <div className="dish-card">
      <div className="dish-info">
        <div className="dish-details">
          <div className="dish-name">
            <h3>{dish.name}</h3>
            <span className="dish-type-icon">{dish.type === 'VEG' ? '🟢' : '🔴'}</span>
          </div>
          <p className={`dish-description ${showFullDescription ? 'full-text' : ''}`}>
            {showFullDescription ? dish.description : truncatedDescription}
            {dish.description.length > 50 && (
              <span className="read-more-link" onClick={toggleDescription}>
                {showFullDescription ? ' Read less' : ' Read more'}
              </span>
            )}
          </p>
          <div className="dish-actions">
            <span className="ingredient-link" onClick={() => onIngredientClick(dish)}>
              Ingredient
            </span>
          </div>
        </div>
      </div>
      <div className="dish-image-container">
        <img src={dish.image} alt={dish.name} className="dish-image" />
        <div className="add-remove-btn-container">
          {!isAdded ? (
            <button className="add-btn" onClick={() => onAdd(dish)}>
              <FaPlusCircle /> Add
            </button>
          ) : (
            <button className="remove-btn" onClick={() => onRemove(dish)}>
              <FaMinusCircle /> Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DishCard;
