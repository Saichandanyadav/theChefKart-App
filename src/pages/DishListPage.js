import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import DishCard from '../components/DishCard';
import Footer from '../components/Footer';
import VegNonVegFilter from '../components/VegNonVegFilter';
import IngredientModal from '../components/IngredientModal';
import OrdersModal from '../components/OrdersModal';
import mockData from '../assets/mockData.json';

const DishListPage = () => {
  const navigate = useNavigate();

  const [selectedDishes, setSelectedDishes] = useState(() => {
    const savedDishes = localStorage.getItem('selectedDishes');
    return savedDishes ? JSON.parse(savedDishes) : [];
  });

  const [placedOrders, setPlacedOrders] = useState(() => {
    const savedOrders = localStorage.getItem('placedOrders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  const [activeTab, setActiveTab] = useState('MAIN COURSE');
  const [searchTerm, setSearchTerm] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [nonVegOnly, setNonVegOnly] = useState(false);
  const [isIngredientModalOpen, setIsIngredientModalOpen] = useState(false);
  const [isOrdersModalOpen, setIsOrdersModalOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    localStorage.setItem('selectedDishes', JSON.stringify(selectedDishes));
    localStorage.setItem('placedOrders', JSON.stringify(placedOrders));
  }, [selectedDishes, placedOrders]);

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
    if (!selectedDishes.some(d => d.id === dish.id)) {
      setSelectedDishes(prev => [...prev, dish]);
    }
  };

  const handleRemoveDish = (dishToRemove) => {
    setSelectedDishes(prev => prev.filter(dish => dish.id !== dishToRemove.id));
  };

  const handlePlaceOrder = () => {
    if (selectedDishes.length > 0) {
      const newOrder = {
        date: new Date(),
        items: selectedDishes
      };
      setPlacedOrders(prev => [...prev, newOrder]);
      setSelectedDishes([]);
      setIsIngredientModalOpen(false);
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);
    }
  };

  const handleIngredientClick = (dish) => {
    navigate(`/ingredients/${dish.id}`);
  };

  const handleContinue = () => {
    setIsIngredientModalOpen(true);
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
          onShowOrders={() => setIsOrdersModalOpen(true)}
          orderCount={placedOrders.length}
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
      {selectedDishes.length > 0 && (
        <Footer
          totalDishes={selectedDishes.length}
          onContinue={handleContinue}
        />
      )}
      {isIngredientModalOpen && (
        <IngredientModal
          selectedDishes={selectedDishes}
          onRemove={handleRemoveDish}
          onPlaceOrder={handlePlaceOrder}
          onClose={() => setIsIngredientModalOpen(false)}
        />
      )}
      {isOrdersModalOpen && (
        <OrdersModal
          placedOrders={placedOrders}
          onClose={() => setIsOrdersModalOpen(false)}
        />
      )}
      {showConfirmation && (
        <div className="order-confirmation">
          <p>Your order has been successfully placed!</p>
        </div>
      )}
    </div>
  );
};

export default DishListPage;
