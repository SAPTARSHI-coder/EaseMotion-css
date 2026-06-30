# Scroll-Driven Sticky Card Stacking (`ease-scroll-stack-sn`)

## What does this do?

An elegant layout component that stacks cards on top of each other dynamically as you scroll, utilizing CSS Scroll-Driven Animations to scale down and darken cards beneath.

## How is it used?

Add the container class `ease-scroll-stack` and individual card elements `ease-scroll-stack-card` with an index property:

```html
<div class="ease-scroll-stack">
  <div class="ease-scroll-stack-card" style="--card-index: 1;">
    <div class="ease-scroll-stack-card-content">
      <h2>First Item</h2>
      <p>Card content here.</p>
    </div>
  </div>
  <div class="ease-scroll-stack-card" style="--card-index: 2;">
    <div class="ease-scroll-stack-card-content">
      <h2>Second Item</h2>
      <p>Card content here.</p>
    </div>
  </div>
  <div class="ease-scroll-stack-card" style="--card-index: 3;">
    <div class="ease-scroll-stack-card-content">
      <h2>Third Item</h2>
      <p>Card content here.</p>
    </div>
  </div>
</div>
```

## Why is it useful?

It provides a premium agency-grade landing page aesthetic (frequently seen on modern marketing sites like Apple, Stripe, and Linear) completely in pure CSS, requiring zero JavaScript, maintaining native performance, and degrading gracefully in browsers without scroll-driven animation support.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to see the effect.
