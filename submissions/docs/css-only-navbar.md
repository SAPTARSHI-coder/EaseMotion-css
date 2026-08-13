# CSS-Only Navbar

A fully responsive, JavaScript-free navigation bar component for EaseMotion CSS. It leverages the CSS checkbox hack for mobile menu toggling and CSS flexbox for clean, responsive alignment.

## 🎯 Features
- **Pure HTML & CSS:** Zero JavaScript required for the mobile hamburger menu toggle.
- **Responsive Design:** Automatically collapses into a mobile-friendly dropdown menu on smaller viewports.
- **Accessible:** Uses semantic HTML (`<nav>`, `<ul>`, `<li>`) and relies on native HTML form elements for state management.
- **Lightweight:** Minimal CSS footprint focusing on layout and transitions.

## 🛠️ Usage Guide

To use the CSS-only navbar, your HTML must follow a specific structure. The hidden `<input type="checkbox">` must sit at the same level as (or before) the `.ease-nav-menu` so the CSS sibling selector (`~` or `+`) can trigger the menu visibility.

### Standard HTML Structure

```html
<nav class="ease-navbar">
  <!-- Brand / Logo -->
  <div class="ease-nav-brand">
    <a href="#">EaseMotion</a>
  </div>

  <!-- Mobile Toggle (Hidden Checkbox + Label) -->
  <input type="checkbox" id="ease-nav-toggle" class="ease-nav-checkbox" aria-hidden="true">
  <label for="ease-nav-toggle" class="ease-nav-toggle-btn" aria-label="Toggle navigation">
    <span class="ease-nav-icon"></span>
  </label>

  <!-- Navigation Links -->
  <ul class="ease-nav-menu">
    <li><a href="#" class="ease-nav-link active">Home</a></li>
    <li><a href="#" class="ease-nav-link">Features</a></li>
    <li><a href="#" class="ease-nav-link">Pricing</a></li>
    <li><a href="#" class="ease-nav-link">Contact</a></li>
  </ul>
</nav>