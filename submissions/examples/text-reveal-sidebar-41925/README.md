# Text Reveal Sidebar

## Overview
This submission adds a social-media-inspired sidebar that stays compact by default and expands smoothly to reveal its labels on hover or keyboard focus.

## Installation
1. Open the folder in your browser directly or copy the files into your project.
2. Ensure the HTML file is paired with the local stylesheet in the same directory.
3. No build step or package install is required.

## Usage
Open the demo to view the compact sidebar and its reveal animation. The markup uses semantic HTML and utility-inspired classes such as `.ease-card`, `.ease-card-glass`, `.ease-card-hover`, `.ease-btn`, and `.ease-fade-in` for easy adaptation.

```html
<aside class="sidebar ease-card ease-card-glass ease-card-hover">
  <nav class="nav" aria-label="Sidebar menu">
    <a href="#top" class="nav-link">
      <span class="icon" aria-hidden="true">◉</span>
      <span class="label">Home</span>
    </a>
  </nav>
</aside>
```

## Accessibility
The layout uses semantic landmarks, keyboard-focusable navigation links, visible focus styles, and clear labeling for the profile and notification badge. Reduced-motion preferences are respected.

## Browser compatibility
The demo works in current Chromium, Firefox, and Safari browsers. The interface remains readable even when backdrop blur is unavailable.

## Why it fits EaseMotion CSS
The component stays lightweight and reusable while leaning on utility-inspired structure, CSS variables, and motion patterns that align with the EaseMotion philosophy.
