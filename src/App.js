import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DishListPage from './pages/DishListPage';
import IngredientPage from './pages/IngredientPage';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dishes/:restaurantName" element={<DishListPage />} />
        <Route path="/ingredients/:dishId" element={<IngredientPage />} />
      </Routes>
    </Router>
  );
};

export default App;