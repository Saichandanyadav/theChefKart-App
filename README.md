# Thechefkart (party-menu-app)

> **Frontend Assignment — 2025**
>
> Build a Party Menu Selection App to showcase UI design skills, component architecture, and logical thinking. Users can browse a categorized menu, filter dishes, search within categories, select dishes for a party, and view ingredient details.

---

## 🌐 Live links

* **Demo / Production URL:** [https://the-chef-kart-app.vercel.app/](https://the-chef-kart-app.vercel.app/)
* **GitHub Repository:** [https://github.com/Saichandanyadav/theChefKart-App](https://github.com/Saichandanyadav/theChefKart-App)
* **LinkedIn (Owner):** [Sai Chandan Yadav](https://www.linkedin.com/in/saichandanyadav/)

---

## 📑 Table of contents

1. Project overview
2. Features & Functional requirements
3. Project title and branding
4. Directory layout
5. Data format (mock JSON)
6. Component & page breakdown
7. Tech stack & constraints
8. Installation & run
9. Scripts
10. UI / UX notes
11. How to extend / next steps
12. Contribution & License

---

## 1. Project overview

**Thechefkart** (a.k.a. `party-menu-app`) is a ReactJS frontend project that lets users build a party menu by selecting dishes from categorized meal tabs (Starter, Main Course, Dessert, Sides).

The app demonstrates component-driven architecture, React Hooks, search & filter logic, and navigation to an ingredient detail screen. It runs fully on the frontend using **mock JSON data** for dishes and ingredients.

---

## 2. Features & Functional requirements (implemented)

* **Menu categories (tabs):** Starter, Main Course, Dessert, Sides.
* **Dish cards:** Show name, short description, image, Add/Remove button, and “Ingredient” link.
* **Search:** Top search bar filters dishes by name (case-insensitive) within the selected category.
* **Veg / Non-Veg filters:** Instant toggles to filter dish list.
* **Selection tracking:**

  * Visual marker on selected dishes.
  * Category tabs show counts.
  * Footer shows total selected count and a `Continue` button.
* **Ingredient screen:** Dedicated ingredient page with dish name, description, and ingredient list (from mock JSON).

---

## 3. Project title and branding

* **Title:** Thechefkart
* **Brand style:** Minimal, food-friendly color palette with warm accent color for CTAs.
* **Logo:** Simple text-based or lightweight SVG recommended.

---

## 4. Directory layout

```
party-menu-app/
├── public/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── data.json
│   ├── components/
│   │   ├── DishCard.js
│   │   ├── DishList.js
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── Modal.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── IngredientPage.js
│   │   └── RestaurantPage.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
└── package.json
```

---

## 5. Data format (mock JSON)

`src/assets/data.json`:

```json
{
  "dishes": [
    {
      "categoryId": 1,
      "mealType": "MAIN COURSE",
      "type": "VEG",
      "description": "A creamy and flavorful lentil dish, slow-cooked with spices, butter, and cream.",
      "image": "/veg.jpg",
      "category": {
        "id": 1,
        "name": "North Indian",
        "image": "/veg.jpg",
        "isRecommendedForMealSuggestion": true
      },
      "dishType": "CURRY",
      "forChefit": true,
      "forParty": true,
      "id": 1,
      "name": "Dal Makhani",
      "ingredients": [
        { "name": "Black lentils", "quantity": "1 cup" },
        { "name": "Kidney beans", "quantity": "1/4 cup" },
        { "name": "Tomato puree", "quantity": "1/2 cup" },
        { "name": "Cream", "quantity": "1/4 cup" },
        { "name": "Butter", "quantity": "2 tbsp" }
      ]
    },
    {
      "categoryId": 2,
      "mealType": "MAIN COURSE",
      "type": "NON-VEG",
      "description": "Tender chicken cooked in creamy tomato gravy.",
      "image": "/nonveg.jpg",
      "category": {
        "id": 2,
        "name": "North Indian",
        "image": "/nonveg.jpg",
        "isRecommendedForMealSuggestion": false
      },
      "dishType": "CURRY",
      "forChefit": true,
      "forParty": true,
      "id": 2,
      "name": "Butter Chicken",
      "ingredients": [
        { "name": "Chicken", "quantity": "300g" },
        { "name": "Tomato puree", "quantity": "150g" },
        { "name": "Cream", "quantity": "1/4 cup" },
        { "name": "Butter", "quantity": "2 tbsp" }
      ]
    }
  ]
}
```

**Notes:**

* `mealType` maps to category tabs: `Starter`, `Main Course`, `Dessert`, `Sides`.
* `type` controls Veg / Non-Veg filtering.
* `ingredients` array is used on the Ingredient page.

---

## 6. Component & page breakdown

### Components

* **Header.js** → App title, search, Veg/Non-Veg filters.
* **DishList.js** → Renders dishes with applied filters and category selection.
* **DishCard.js** → Displays dish info with Add/Remove + Ingredient actions.
* **Modal.js** → Optional reusable modal.
* **Footer.js** → Shows selected dish count + Continue button.

### Pages

* **HomePage.js** → Composes Header, category tabs, DishList, Footer.
* **IngredientPage.js** → Displays dish details with ingredient list.
* **RestaurantPage.js** → Placeholder for future extension.

---

## 7. Tech stack & constraints

* **ReactJS (Hooks, functional components)**
* **React Router** for navigation
* **CSS**: simple global stylesheet (`styles.css`)
* **Mock JSON only** — no backend or persistence
* No localStorage (per assignment constraints)

---

## 8. Installation & run (local)

```bash
# Clone repo
git clone https://github.com/Saichandanyadav/theChefKart-App.git
cd theChefKart-App

# Install dependencies
npm install

# Run dev server
npm start
```

Open at: [http://localhost:3000](http://localhost:3000)

---

## 9. Available scripts

* `npm start` → Start dev server
* `npm run build` → Production build
* `npm test` → Run tests (if configured)
* `npm run lint` → Linting (if configured)

---

## 10. UI / UX notes

* Highlight selected dishes visually (badge/overlay).
* Category tabs show selected counts.
* Search is instant and scoped by category.
* Accessibility:

  * Keyboard focusable elements
  * `aria-labels` on buttons
  * `alt` text for images

---

## 11. How to extend / next steps

* Save selections in localStorage or backend.
* Add authentication + favorites.
* Add price + quantity selection.
* Export menu as order/cart.

---

## 12. Contribution & License

* Fork → Create branch → Raise PR.
* Recommended license: **MIT**.

---

### ✅ Final notes

This project **Thechefkart (party-menu-app)** is deployed at:
🔗 [the-chef-kart-app.vercel.app](https://the-chef-kart-app.vercel.app/)
