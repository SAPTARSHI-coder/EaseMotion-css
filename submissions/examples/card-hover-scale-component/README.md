# Card Hover Scale Component Showcase

A versatile and performant CSS-only component that adds a smooth scaling effect to cards on hover, enhancing interactivity and visual feedback without relying on JavaScript.

## Project Overview

The Card Hover Scale component is designed to be easily dropped into any project. It utilizes hardware-accelerated CSS transforms (`translateY`, `scale`) combined with smooth `box-shadow` transitions to create an elegant, floating effect when users interact with card elements.

## Folder Structure

```text
submissions/examples/card-hover-scale-component/
├── demo.html
├── style.css
└── README.md
```

## Features

- **Pure CSS Integration:** Zero JavaScript required, ensuring maximum performance.
- **Hardware Acceleration:** Uses `transform` for buttery smooth 60fps animations.
- **Multiple Variants:** Demonstrates how the core class (`.card-hover-scale`) can be applied to different card types (Product, Glassmorphism, Testimonial, etc.).
- **Image Zoom Support:** Automatic inner image scaling that pairs perfectly with the outer card scale.
- **Accessibility:** Includes `focus-within` selectors to trigger animations for keyboard navigators, ensuring interactive feedback is visible to all users.

## HTML Usage Example

Simply add the `.card-hover-scale` class alongside your base `.card` class:

```html
<div class="card card-hover-scale">
    <div class="card-body">
        <h3 class="card-title">My Card</h3>
        <p class="card-text">Content goes here.</p>
    </div>
</div>
```

## CSS Classes Explained

- `.card`: Base container establishing background, border-radius, and hidden overflow.
- `.card-hover-scale`: The core class adding `will-change` hints and defining the `transition` properties.
- `.card-hover-scale:hover, .card-hover-scale:focus-within`: Applies the `transform: translateY(-8px) scale(1.02)` and enhanced `box-shadow`.

## Design Highlights

- **Glassmorphism Integration:** The effect persists beautifully even on cards with `backdrop-filter: blur`.
- **Soft Shadows:** Transitioning from a subtle drop shadow to a larger, diffused shadow accentuates the "lifting" feeling.
- **Consistent Scaling:** A uniform `scale(1.02)` guarantees that the text and content enlarge gently without causing layout reflow or pixelation.

## Browser Compatibility

- Fully supported in all modern browsers (Chrome, Firefox, Safari, Edge).
- Fallbacks automatically applied for browsers not supporting `backdrop-filter` (glassmorphism gracefully downgrades to a solid background).

## Accessibility Notes

To ensure users navigating with keyboards experience the same visual cues, the `:focus-within` pseudo-class is used. Whenever a focusable element (like a button or link) inside the card receives focus, the card triggers its scale animation, communicating its active state.

## How to Run

1. Navigate to the project directory:
   ```bash
   cd submissions/examples/card-hover-scale-component/
   ```
2. Open `demo.html` in your web browser.
