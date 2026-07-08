# Interactive Pricing Table

An elegant, fully responsive pricing table built entirely with EaseMotion CSS utility classes.

## Features
- **Staggered Entry Animations**: Uses `ease-slide-up`, `ease-fade-in`, and `ease-delay-*` to sequentially animate the pricing cards into view.
- **Interactive Hover States**: Employs `ease-hover-grow` to provide immediate, tactile feedback when users interact with the cards.
- **Call-to-Action Highlights**: The "Pro" plan is highlighted with an `ease-pulse-border-emphasis` outline and `ease-squish-button` on its primary CTA, drawing user attention.
- **Responsive Layout**: Uses `ease-grid` and `ease-md-grid-cols-3` to handle mobile to desktop layouts smoothly.

## How to use
You can integrate these pricing cards easily into your project. Here is an example of the card structure:

```html
<div class="ease-bg-white ease-padding-8 ease-rounded-xl ease-shadow ease-hover-grow ease-fade-in ease-slide-up ease-delay-100 ease-stack">
  <!-- Card Content -->
  <button class="ease-btn ease-btn-outline ease-w-full ease-rounded-full ease-hover-bounce-text">Get Started</button>
</div>
```

## Why it fits EaseMotion CSS
This example demonstrates the core philosophy of EaseMotion CSS: creating rich, interactive, and beautifully animated UI components quickly by combining readable utility classes, without writing custom CSS or JavaScript.
