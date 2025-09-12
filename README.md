# Thechefkart (party-menu-app)

> **Frontend Assignment — 2025**
>
> Build a Party Menu Selection App to showcase UI design skills, component architecture, and logical thinking. Users can browse a categorized menu, filter dishes, search within categories, select dishes for a party, and view ingredient details.

---

## Live links

> Replace these placeholders with your real URLs before sharing.

* **Staging / Demo URL:** `https://your-demo-url.example.com`
* **Production URL:** `https://your-production-url.example.com`
* **Figma mock / design:** `[Figma link placeholder]`
* **GitHub repository:** `https://github.com/<your-username>/party-menu-app`
* **LinkedIn (owner):** [https://www.linkedin.com/in/saichandanyadav/](https://www.linkedin.com/in/saichandanyadav/)

---

## Table of contents

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

**Thechefkart** (a.k.a. `party-menu-app`) is a small ReactJS frontend project that lets users build a party menu by selecting dishes from categorized meal tabs (Starter, Main Course, Dessert, Sides). The app demonstrates component-driven architecture, hooks usage, search & filter logic, and navigation to an ingredient detail screen.

This repository contains a focused, single-page React application using mock JSON to represent dishes and ingredient lists.

---

## 2. Features & Functional requirements (implemented)

* **Menu categories (tabs):** Starter, Main Course, Dessert, Sides. Clicking a tab shows dishes from that category.
* **Dish cards:** Each card shows name, short description, image, Add/Remove button and an "Ingredient" link that opens the ingredient details screen.
* **Search:** Top search bar filters dishes by name (case-insensitive) and scopes the search to the currently selected category.
* **Veg / Non-Veg filters:** Two toggles (Veg, Non-Veg) to filter current list; filters apply immediately.
* **Selection tracking:** Selected dishes get a clear visual mark; category tabs show counts; a footer shows total selected count and a `Continue` button (no further navigation required).
* **Ingredient screen:** When user clicks "Ingredient" the app navigates to a dedicated ingredient page showing dish name, short description and a list of ingredients with quantities (mock data).

---

## 3. Project title and branding

* **Project Title:** Thechefkart
* Keep the brand copy short, use a simple logo (text-based) or a small SVG. Color palette should remain neutral and food-friendly (warm accent color for CTAs).

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

> This layout keeps assets separate from components and pages. `data.json` contains the mock data for dishes & ingredients.

---

## 5. Data format (mock JSON)

Place this file at `src/assets/data.json` and import it where needed.

```json
{
  "dishes": [
    {
      "id": "d1",
      "name": "Crispy Veg Spring Rolls",
      "category": "Starter",
      "description": "Thin rolls stuffed with mixed vegetables and served with sweet chili sauce.",
      "isVeg": true,
      "image": "/assets/images/spring_rolls.jpg",
      "ingredients": [
        { "name": "Cabbage", "quantity": "100g" },
        { "name": "Carrot", "quantity": "50g" },
        { "name": "Spring roll wrapper", "quantity": "4 pcs" }
      ]
    },
    {
      "id": "d2",
      "name": "Butter Chicken",
      "category": "Main Course",
      "description": "Tender chicken cooked in a creamy tomato-based gravy.",
      "isVeg": false,
      "image": "/assets/images/butter_chicken.jpg",
      "ingredients": [
        { "name": "Chicken", "quantity": "300g" },
        { "name": "Tomato puree", "quantity": "150g" }
      ]
    }
    // ...more dishes
  ]
}
```

**Notes:**

* `category` must match one of the tab names exactly: `Starter`, `Main Course`, `Dessert`, `Sides`.
* `isVeg` boolean controls the Veg / Non-Veg filtering.
* `ingredients` array is used on the Ingredient page.

---

## 6. Component & page breakdown

### Components

* `Header.js`

  * Contains app title, search bar, and filter toggles (Veg / Non-Veg).
  * Emits search text and filter state upward via props or context.

* `DishList.js`

  * Responsible for rendering the grid/list of `DishCard` components for the selected category.
  * Accepts props for current category, search string, veg/non-veg filter flags, and selected items.
  * Handles list filtering (category + search + veg/non-veg) and renders items.

* `DishCard.js`

  * Displays dish image, name, short description, Add/Remove button, and an `Ingredient` button.
  * Shows a selected badge or overlay when dish is chosen.
  * Calls callback props: `onToggleSelect(dishId)` and `onViewIngredients(dishId)`.

* `Modal.js` (optional)

  * Generic modal used for confirmations or quick ingredient previews (if desired).

* `Footer.js`

  * Shows counts per category and the total selected items plus the `Continue` button.

### Pages

* `HomePage.js`

  * Composes the header, category tabs, `DishList`, and footer.
  * Manages selection state (using React Hooks) and aggregates counts per category.

* `IngredientPage.js`

  * Displays the selected dish details: name, description and ingredient list with quantities.
  * Navigated to when user clicks the `Ingredient` button on a dish card.

* `RestaurantPage.js`

  * Optional: show restaurant-specific menu or additional metadata (useful for future extension).

---

## 7. Tech stack & constraints

* **React** (functional components + Hooks only)
* **React Router** for navigation (React Navigation is typically used for React Native; for a web-based frontend use React Router). If you intentionally build a React Native app, use `react-navigation`.
* CSS: basic CSS in `styles.css`. You may replace with CSS Modules / Sass or Tailwind in future iterations.
* No backend or persistence required — mock JSON only.
* No local storage required (per constraints).

---

## 8. Installation & run (local)

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/party-menu-app.git
cd party-menu-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm start
```

4. Open your browser at `http://localhost:3000` (CRA default) to view the app.

---

## 9. Available scripts (package.json)

* `npm start` - Start development server
* `npm run build` - Create production build
* `npm test` - Run unit tests (if configured)
* `npm run lint` - Lint the codebase (if configured)

---

## 10. UI / UX notes & accessibility

* Use clear visual markers for selected dishes (badge, border, or subtle overlay).
* Keep search input prominent and immediately responsive.
* Category tabs should show per-category selected counts (e.g. `Starter (2)`).
* Keyboard navigation: ensure `tabindex` on interactive elements and `aria-labels` for buttons.
* Use `alt` text for dish images.

---

## 11. How to extend / next steps

* Persist selections to localStorage or a backend.
* Add user authentication and save favorite menus.
* Add quantity selectors per dish and price calculations.
* Add unit/e-commerce integration to convert selection into an order.

---

## 12. Contribution & License

* Fork the repo, create a feature branch, raise a PR for changes.
* Use a permissive license such as MIT (add a `LICENSE` file if required).

---

### Final notes

* Project title is set to **Thechefkart** in this README. Update the Figma and live URLs with your real links before presenting.
* This README contains the required directory layout and a complete description of how the app should work and how to run it.

---

*Created for the Frontend Assignment — 2025.*
