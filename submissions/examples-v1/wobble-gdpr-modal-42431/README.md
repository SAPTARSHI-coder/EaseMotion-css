# Wobble GDPR Modal

## Overview
This submission adds a dark-mode GDPR consent modal with a CSS-only wobble entrance, accessible buttons, and a glass-inspired surface that feels polished without relying on JavaScript.

## Installation
1. Open the folder in your browser directly or copy the files into your project.
2. Ensure the HTML file is paired with the local stylesheet in the same directory.
3. No build step or package install is required.

## Usage
Open the demo to view the full-screen overlay and centered modal. The markup uses semantic HTML elements and utility-inspired classes such as `.ease-card`, `.ease-card-glass`, `.ease-card-hover`, `.ease-btn`, and `.ease-btn-primary` for easy adaptation.

```html
<section class="overlay" aria-label="GDPR consent dialog">
  <div class="modal-card ease-card ease-card-glass ease-card-hover" role="dialog" aria-modal="true">
    <button type="button" class="ease-btn ease-btn-primary ease-btn-pill">Accept All</button>
  </div>
</section>
```

## Accessibility
The dialog uses semantic structure, visible focus styles, and button-based actions for keyboard use. The experience also respects reduced-motion preferences.

## Browser compatibility
The demo works in current Chromium, Firefox, and Safari browsers. Fall back styling remains readable even when backdrop blur is unsupported.

## Why it fits EaseMotion CSS
The interaction stays lightweight and reusable while leaning on utility-inspired structure, CSS variables, and a simple animation pattern that fits the EaseMotion design language.
