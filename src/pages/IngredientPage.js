import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import mockData from '../assets/mockData.json';

const IngredientPage = () => {
  const { dishId } = useParams();
  const navigate = useNavigate();
  const [dish, setDish] = useState(null);

  useEffect(() => {
    const foundDish = mockData.find(d => d.id === parseInt(dishId));
    setDish(foundDish);
  }, [dishId]);

  if (!dish) return <div className="container">Dish not found!</div>;

  return (
    <div className="container ingredient-page">
      <div className="ingredient-header">
        <button onClick={() => navigate(-1)} className="icon-button">
          <FaAngleLeft />
        </button>
        <h1>Ingredient List</h1>
      </div>
      <div className="dish-details-section">
        <img src={dish.image} alt={dish.name} className="dish-image" />
        <h2>{dish.name}</h2>
        <p>{dish.description}</p>
        <hr />
        <h3>Ingredients:</h3>
        {dish.ingredients && dish.ingredients.length > 0 ? (
          dish.ingredients.map((item, index) => (
            <div key={index} className="ingredient-item">
              <span>{item.name}</span>
              <span>{item.quantity}</span>
            </div>
          ))
        ) : (
          <p>No ingredients listed.</p>
        )}
      </div>
    </div>
  );
};

export default IngredientPage;
