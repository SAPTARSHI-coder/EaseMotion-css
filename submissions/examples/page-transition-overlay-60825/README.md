# Full-Page Transition Overlay Masks (page-transition-overlay-60825)

A premium, pure HTML and CSS implementation of a full-page wipe transition overlay with a dramatic reveal animation. It is designed to be lightweight, responsive, and completely dependency-free (zero JavaScript).

## Overview

The `page-transition-overlay-60825` example showcases how to create dynamic, fluid entrance animations using full-page overlays. When the page loads, the mask (`.ease-page-wipe`) triggers automatically, sweeping upwards to reveal the landing page content.

## Features

- **Dual-Layer Wipe:** Utilizes a staggered CSS pseudoelement effect (`::before`) to create depth during the sliding reveal.
- **Pure CSS:** Handled entirely using CSS keyframe animations, requiring no client-side scripting.
- **Pointer Events Safety:** Sets `pointer-events: none` on the overlay after the animation completes so that underlying elements remain fully interactive.
- **Theme Variables:** Styled using CSS variables (`:root`) for easy customization of branding colors, timings, and transition curves.
- **A11y Oriented:** Integrates a focus-visible outline for better keyboard navigation and honors `prefers-reduced-motion` settings.

## Folder Structure

```text
submissions/examples/page-transition-overlay-60825/
├── demo.html
├── style.css
└── README.md
```

## Installation

Since this library uses vanilla CSS, simply copy the files into your project directory.

```bash
# Clone the repository and navigate to the directory
cd submissions/examples/page-transition-overlay-60825/
```

## Usage

Include the overlay HTML block at the top of your document and link the corresponding CSS file.

### HTML Example

```html
<!-- Put at the very beginning of <body> -->
<div class="ease-page-wipe" id="pageWipeOverlay" aria-hidden="true">
  <div class="wipe-loader">
    <div class="wipe-logo-icon"></div>
    <span class="wipe-logo-text">EaseMotion</span>
  </div>
</div>
```

### CSS Variables

You can customize the animation duration, easing curves, and background colors via CSS custom properties:

```css
:root {
  /* Animation Timings */
  --wipe-duration: 1.4s;
  --wipe-delay: 0.3s;
  
  /* Easing Functions */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out-expo: cubic-bezier(0.87, 0, 0.13, 1);
  
  /* Styling Palette */
  --accent-primary: #c084fc;
  --accent-secondary: #6366f1;
}
```

## Browser Support

- Chrome (61+)
- Safari (11+)
- Firefox (57+)
- Edge (79+)
- Opera (48+)

## Accessibility Notes

- **aria-hidden="true":** The overlay element uses `aria-hidden="true"` to prevent screen readers from reading the transitional loader text once the content is exposed.
- **Prefers-Reduced-Motion:** Support is fully baked-in. Users with reduced motion enabled will experience a gentle, non-disorienting fade transition rather than a dramatic vertical sweep.
- **Focus Rings:** Focusable elements utilize the `:focus-visible` pseudo-class to render a distinct outline indicator when accessed via keyboard navigation.
