import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import DishCard from '../components/DishCard';
import Footer from '../components/Footer';
import VegNonVegFilter from '../components/VegNonVegFilter';
import IngredientModal from '../components/IngredientModal';
import mockData from '../assets/mockData.json';

const DishListPage = () => {
  const navigate = useNavigate();
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [activeTab, setActiveTab] = useState('MAIN COURSE');
  const [searchTerm, setSearchTerm] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [nonVegOnly, setNonVegOnly] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mealTypes = useMemo(() => ['STARTER', 'MAIN COURSE', 'DESSERT', 'SIDES'], []);

  const getDishCount = (type) => {
    return selectedDishes.filter(dish => dish.mealType === type).length;
  };

  const filteredDishes = useMemo(() => {
    return mockData.filter(dish => {
      const matchesTab = dish.mealType === activeTab;
      const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesVeg = vegOnly ? dish.type === 'VEG' : true;
      const matchesNonVeg = nonVegOnly ? dish.type === 'NON-VEG' : true;
      return matchesTab && matchesSearch && matchesVeg && matchesNonVeg;
    });
  }, [activeTab, searchTerm, vegOnly, nonVegOnly]);

  const handleAddDish = (dish) => {
    setSelectedDishes(prev => [...prev, dish]);
  };

  const handleRemoveDish = (dishToRemove) => {
    setSelectedDishes(prev => prev.filter(dish => dish.id !== dishToRemove.id));
  };

  const handleIngredientClick = (dish) => {
    navigate(`/ingredients/${dish.id}`);
  };

  const handleContinue = () => {
    setIsModalOpen(true);
  };

  const handleVegToggle = () => {
    setVegOnly(prev => !prev);
    setNonVegOnly(false);
  };

  const handleNonVegToggle = () => {
    setNonVegOnly(prev => !prev);
    setVegOnly(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="container dish-list-page">
      <div className="content-wrapper">
        <Header
          onBack={() => navigate(-1)}
          searchTerm={searchTerm}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="tabs-container">
          {mealTypes.map(type => (
            <button
              key={type}
              className={`tab ${activeTab === type ? 'active' : ''}`}
              onClick={() => setActiveTab(type)}
            >
              {type} {getDishCount(type) > 0 && `(${getDishCount(type)})`}
            </button>
          ))}
        </div>
        <div className="filters-section">
          <h2>{activeTab} Selected {getDishCount(activeTab)}</h2>
          <VegNonVegFilter
            vegOnly={vegOnly}
            nonVegOnly={nonVegOnly}
            onVegToggle={handleVegToggle}
            onNonVegToggle={handleNonVegToggle}
          />
        </div>
        <div className="dish-list">
          {filteredDishes.map(dish => (
            <DishCard
              key={dish.id}
              dish={dish}
              onAdd={handleAddDish}
              onRemove={handleRemoveDish}
              onIngredientClick={handleIngredientClick}
              isAdded={selectedDishes.some(d => d.id === dish.id)}
            />
          ))}
        </div>
        <div className="scroll-icons">
          <button className="scroll-top" onClick={scrollToTop}>↑</button>
          <button className="scroll-bottom" onClick={scrollToBottom}>↓</button>
        </div>
      </div>
      <Footer
        totalDishes={selectedDishes.length}
        onContinue={handleContinue}
      />
      {isModalOpen && (
        <IngredientModal
          selectedDishes={selectedDishes}
          onRemove={handleRemoveDish}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default DishListPage;
