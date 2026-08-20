# Pulse Text Mixin (SCSS)

## Description
This SCSS mixin applies a continuous, subtle rhythmic pulse (scaling and opacity fading) to text elements. It is an "Interactive State / Attention Seeker" animation perfect for drawing the user's eye to important but non-urgent information, such as a "Live" status indicator, unread message counts, or newly added features.

## Installation
Copy the `_pulse-text.scss` file into your SCSS project's mixins or utilities directory, or import it directly into your stylesheet.

## Usage
Import the mixin and include it in your text element's CSS class.

```scss
@import 'path/to/_pulse-text.scss';

// Default usage (2s duration, scales to 1.05)
.status-indicator-live {
    color: red;
    font-weight: bold;
    @include ease-pulse-text-mixin-ag();
}

// Custom usage (faster pulse, larger scale)
.badge-new {
    background: blue;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    
    // 1s duration, scale up to 1.15
    @include ease-pulse-text-mixin-ag(1s, 1.15);
}
```

## Accessibility Considerations
- **Semantic HTML & ARIA:** Use appropriate ARIA live regions (e.g., `aria-live="polite"`) if the pulsing text indicates a dynamic state change that screen readers should announce.
- **Color Contrast:** Ensure the text remains readable at its lowest opacity state (which is 0.7 by default) against its background.
- **Reduced Motion:** A strict `prefers-reduced-motion: reduce` media query is included. If the user prefers reduced motion, the continuous pulsing animation is completely disabled (`animation: none !important`). The text remains fully visible and legible without animation, ensuring it doesn't cause distraction or discomfort.
