# Restaurant Menu

A dark-themed restaurant menu page with filterable dish cards, category tabs, and a sticky order summary sidebar.

## Features

- Filter tabs: All, Appetizers, Mains, Desserts
- Dish cards with image placeholder, description, price, and badges
- Order summary sidebar (sticky on desktop)
- Smooth filter transitions with tab highlighting

## Usage

Open `demo.html` in a browser. Click the filter tabs to show/hide dishes by category.

## Customization

- Card hover lift: adjust `translateY` in `.ease-dish-card:hover`
- Badge colors: modify `.ease-dish-badge` background/color
- Price color: change `.ease-dish-price` color value

## Tech Stack

- EaseMotion CSS (design tokens, utilities)
- Vanilla CSS for menu-specific layout
- Vanilla JS for filter tab logic
