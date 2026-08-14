# CSS Pricing Table

A responsive three-column pricing table with a featured middle column highlight, built entirely with pure CSS.

## What does this do?

It provides a clean, accessible pricing table component with three tiers (Basic, Pro, Enterprise) where the middle "Pro" plan is visually highlighted as the recommended choice, using CSS-only animations and transitions.

## How is it used?

Drop `demo.html` and `style.css` into your project. The markup uses simple semantic classes:

```html
<div class="pricing-table">
  <div class="pricing-card">
    <h3>Basic</h3>
    <span class="price">$9</span>
    <ul>
      <li>Feature A</li>
      <li>Feature B</li>
    </ul>
    <button>Get Started</button>
  </div>
  <div class="pricing-card pricing-card--featured">
    <span class="badge">Most Popular</span>
    <h3>Pro</h3>
    <span class="price">$29</span>
    <ul>
      <li>Everything in Basic</li>
      <li>Feature C</li>
      <li>Feature D</li>
    </ul>
    <button>Get Started</button>
  </div>
  <div class="pricing-card">
    <h3>Enterprise</h3>
    <span class="price">$99</span>
    <ul>
      <li>Everything in Pro</li>
      <li>Feature E</li>
      <li>Feature F</li>
    </ul>
    <button>Get Started</button>
  </div>
</div>
```

## Why is it useful?

Pricing tables are one of the most common UI patterns on SaaS and product websites. This component gives developers a ready-to-use, pure CSS pricing table with a highlighted recommended plan, responsive stacking on mobile, smooth hover transitions, and built-in dark mode support, all without any JavaScript dependency.
