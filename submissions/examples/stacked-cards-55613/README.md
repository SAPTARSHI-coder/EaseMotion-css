# Stacked Deck Card Fan-Out Reveal

## What does this do?
Creates a component where 3 cards are stacked on top of each other (like a deck of playing cards). When the user hovers over the container, the cards beautifully fan out radially using `transform: rotate()` and `translate()`.

## How is it used?
```html
<div class="ease-stacked-container">
    <div class="ease-stacked-card">3</div>
    <div class="ease-stacked-card">2</div>
    <div class="ease-stacked-card">1</div>
</div>
```
*(Note: Because of absolute positioning, the last element in the DOM appears on top).*

## Why does it fit EaseMotion CSS?
It provides a highly tactile, engaging interaction perfect for highlighting portfolios or testimonials. Using `nth-child` selectors and `cubic-bezier` transitions, it requires no JS state management to handle complex overlapping hover states.

## Tech Stack
- HTML
- CSS (No JavaScript)
