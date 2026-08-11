# CSS Blur-Entrance Tabs for Product Catalog Layouts

A pure CSS, fully responsive, and keyboard-accessible tabs component featuring a smooth, modern blur-entrance animation effect designed specifically for product catalogs and showcases.

## Overview

This component implements a state-management system relying purely on hidden radio buttons (`.sr-only`) and their corresponding `<label>` elements. This allows interactive tab switching without any JavaScript. The animation uses CSS variables to manage the transition's customizability easily.

## Key Features

- **Pure CSS State Management**: Uses radio buttons + the `~` sibling selector to change visibility states.
- **Keyboard Accessible**: Radio buttons are kept in the tab index sequence (`.sr-only` instead of `display: none`), so they can be focused using the `Tab` key, and navigated via `Arrow` keys.
- **Blur Entrance Animation**: Uses `filter: blur()`, `transform`, and `opacity` to create a smooth, premium entrance effect.
- **Custom CSS Variables**: Animation parameters (amount, duration, easing, scale, and y-offset) are exposed via CSS custom properties on the `:root` level for easy customization.
- **Responsive Product Grid**: Features a fluid CSS grid layout that gracefully resizes down to mobile views.

## Customizable Properties

You can modify the animation behavior by adjusting the following custom properties located at the top of the `style.css` file:

```css
:root {
  /* Animation Parameters */
  --blur-entrance-amount: 12px;
  --blur-entrance-duration: 0.6s;
  --blur-entrance-easing: cubic-bezier(0.16, 1, 0.3, 1);
  --blur-entrance-scale: 0.96;
  --blur-entrance-y: 15px;
}
```

## Setup

Simply open `index.html` in any modern web browser to view the component.
