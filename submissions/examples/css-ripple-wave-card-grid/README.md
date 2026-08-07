# CSS Ripple-Wave Card Grid

A pure-CSS animated card grid utilizing a Ripple-Wave interaction aesthetic, designed to complement E-Commerce Checkout interface layouts. It features a tactile, expanding ripple animation that radiates from the center of the card upon selection, completely eliminating the need for JavaScript.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a selectable grid of cards (e.g., for choosing a Delivery Speed like Standard, Express, or Overnight). When a user clicks a card, a soft "ripple wave" rapidly scales up from the center, fading out as it expands across the card's background. Concurrently, the card's border and checkmark indicator smoothly transition to an active state.

### 2. How is it used?

The component relies on a pure CSS radio button group hidden inside a `.card-grid`. The state of the radio buttons (`:checked`) dictates the card's active styling and triggers the `ripple` keyframe animation on the `.ripple-wave` child element. The `.card-content` wrapper uses `overflow: hidden` to ensure the ripple stays contained within the card boundaries.

```html
<!-- Example: Delivery Speed Selection -->
<div class="card-grid">
  
  <!-- Hidden Radio State Controllers -->
  <input type="radio" name="delivery_speed" id="speed-standard" checked>
  <input type="radio" name="delivery_speed" id="speed-express">
  
  <label for="speed-standard" class="grid-card-label" tabindex="0">
    <div class="card-content">
      <!-- The element that runs the ripple animation -->
      <div class="ripple-wave"></div>
      
      <div class="card-text">
        <h3 class="card-title">Standard Shipping</h3>
      </div>
      <div class="card-indicator"></div>
    </div>
  </label>
  
  <!-- More cards... -->
</div>
```

**Customization via CSS Properties:**
You can adjust the animation physics and colors via root variables:

```css
:root {
  --card-transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --ripple-duration: 0.6s; /* How long the ripple wave lasts */
  
  --card-bg-active: #fef2f2;
  --card-border-active: #ef4444;
  --ripple-color: rgba(239, 68, 68, 0.15);
}
```

### 3. Why is it useful?

In dense UI screens like checkouts, providing immediate, tactile feedback upon selection reassures the user that their input was registered. The Ripple-Wave effect is a staple of modern UI design (popularized by Material Design), but it usually requires JavaScript event listeners to calculate click coordinates and trigger animations. By utilizing a simplified center-origin CSS keyframe approach bound to radio states, developers can achieve a very similar premium feel natively. This ensures high performance and provides an automatic static fallback for accessibility (`prefers-reduced-motion`).
A modern, lightweight, pure CSS/HTML showcase layout for SaaS features, featuring smooth ripple-wave hover animations. This example was built to resolve [Issue #59558](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59558).

## Features

- **Pure CSS/HTML**: No JavaScript required for the ripple effects or grid layouts.
- **Responsive**: Fully responsive grid using CSS Grid `repeat(auto-fit, minmax(...))`.
- **Accessible**: Built-in support for `prefers-reduced-motion`, falling back to simple background color changes instead of animations.
- **Customizable**: Easy to theme using CSS Custom Properties (variables).

## Usage

1. Link the `style.css` in your HTML file (along with the main `easemotion.css` if integrating).
2. Use the following HTML structure for your cards:

```html
<div class="ripple-card-grid">
  <div class="ripple-card">
    <div class="ripple-wave"></div>
    <div class="card-content">
      <!-- Your content here -->
    </div>
  </div>
</div>
```

## Customization (CSS Variables)

You can easily tweak colors by modifying the CSS variables in the `:root` selector within `style.css`:

```css
:root {
  --primary-color: #4f46e5;
  --primary-light: rgba(79, 70, 229, 0.1);
  --bg-color: #f9fafb;
  --text-main: #111827;
  --text-muted: #6b7280;
  --card-bg: #ffffff;
}
```
