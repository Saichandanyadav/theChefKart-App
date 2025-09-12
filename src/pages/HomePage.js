import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import chef1 from "../../src/assets/images/chef-1.jpeg"
import chef2 from "../../src/assets/images/chef-2.jpg"

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1 className="main-title">Welcome to Thechefkart </h1>
        <p>Your one-stop place for the best culinary experiences</p>
      </header>

      <section className="featured-restaurants">
        <h2>Featured Restaurants</h2>
        <div className="restaurant-cards">
          <div className="restaurant-card" onClick={() => navigate('/dishes/My-Favorite-Restaurant')}>
            <h3>My Favorite Restaurant</h3>
            <p>A place for great food!</p>
          </div>
          <div className="restaurant-card" onClick={() => navigate('/dishes/Best-Pizza-Place')}>
            <h3>Best Pizza Place</h3>
            <p>Delicious, fresh, and hot pizzas!</p>
          </div>
          <div className="restaurant-card" onClick={() => navigate('/dishes/Spicy-Bites')}>
            <h3>Spicy Bites</h3>
            <p>For those who love spicy food!</p>
          </div>
        </div>
      </section>

      <section className="offers-section">
        <h2>Today's Offers</h2>
        <div className="offers-cards">
          <div className="offer-card">
            <h3>50% Off on First Order</h3>
            <p>Get your first meal with a 50% discount!</p>
          </div>
          <div className="offer-card">
            <h3>Free Delivery</h3>
            <p>Enjoy free delivery on orders above $20!</p>
          </div>
          <div className="offer-card">
            <h3>Buy 1 Get 1 Free</h3>
            <p>Buy one meal, get another one free at selected restaurants!</p>
          </div>
        </div>
      </section>

      <section className="chef-section">
        <h2>Meet the Chefs</h2>
        <div className="chef-cards">
          <div className="chef-card">
            <img src={chef1} alt="Chef 1" />
            <h3>Chef Arvind Kumar</h3>
            <p>Expert in Indian Cuisine</p>
          </div>
          <div className="chef-card">
            <img src={chef2} alt="Chef 2" />
            <h3>Chef Tilak Singh</h3>
            <p>Master of Spicy Food</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
