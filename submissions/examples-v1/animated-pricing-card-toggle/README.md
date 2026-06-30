# Animated Pricing Card Toggle

## What does this do?

This component creates a premium, modern SaaS-style pricing section with a toggle switch that animates the pricing values (sliding up/down and cross-fading) when switching between monthly and yearly billing cycles.

## How is it used?

Structure your HTML using the billing container, toggle buttons, and pricing cards, and style it with `style.css`.

### Toggle Structure

```html
<div class="pricing-toggle">
  <button class="toggle-btn active" id="toggle-monthly">Monthly</button>
  <button class="toggle-btn" id="toggle-yearly">
    Yearly
    <span class="discount-tag">-20%</span>
  </button>
  <div class="toggle-slider"></div>
</div>
```

### Card Price Structure

Add both monthly and yearly prices inside the card:

```html
<div class="pricing-card">
  <h3>Basic Plan</h3>
  <div class="price-container">
    <div class="price-wrapper">
      <div class="price price-monthly">$15/mo</div>
      <div class="price price-yearly">$12/mo</div>
    </div>
  </div>
  <button class="cta-btn">Get Started</button>
</div>
```

To toggle the active plan cycle, switch the `.yearly-active` class on the parent container (e.g. `.pricing-container`):

```css
/* Toggles the slider pill to the yearly button */
.yearly-active .toggle-slider {
  transform: translateX(124px);
}

/* Slides and fades out the monthly price */
.yearly-active .price-monthly {
  opacity: 0;
  transform: translateY(-28px);
}

/* Slides and fades in the yearly price */
.yearly-active .price-yearly {
  opacity: 1;
  transform: translateY(0);
}
```

## Why is this useful?

Pricing cards are a core UI pattern in SaaS and product landing pages. This component aligns with **EaseMotion CSS** by:

1. Providing smooth, non-disruptive, premium motion transitions (with custom cubic-bezier curves).
2. Using human-readable, semantic class names.
3. Requiring no external UI frameworks and minimal JS to toggle active states (can also be adapted with standard framework states).
4. Demonstrating clean CSS-only transition flows for price switches.

## Tech Stack

- HTML
- CSS (custom properties, sliding transforms, opacity animations)

## Preview

Open `demo.html` directly in your browser to interact with the toggle, view hover elevations, and see the smooth pricing animations.

## Contribution Notes

- Class naming was handled by the contributor.
- Maintainer will rename to ease-\* convention before merging.
