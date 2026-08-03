# Spotlight Notification Bell

## Overview
This submission adds a neon-styled notification bell with a moving spotlight sweep, glowing highlights, a live badge, and a lightweight CSS-only animation system.

## Installation
1. Open the folder in your browser directly or copy the files into your project.
2. Ensure the HTML file is paired with the local stylesheet in the same directory.
3. No build step or package install is required.

## Usage
Open the demo to view the animated bell and supporting content. The markup uses semantic HTML and utility-inspired classes such as `.ease-card`, `.ease-card-glass`, `.ease-card-hover`, `.ease-btn`, and `.ease-fade-in` so it can be adapted easily.

```html
<div class="bell-wrap" tabindex="0" role="button" aria-label="New notifications available">
  <span class="badge">3</span>
  <svg class="bell" viewBox="0 0 64 64"></svg>
</div>
```

## Accessibility
The component uses semantic structure, a keyboard-focusable bell, visible focus styling, and clear label text for the notification count. Reduced-motion preferences are respected.

## Browser compatibility
The demo works in current Chromium, Firefox, and Safari browsers. The design remains readable even when backdrop blur is unsupported.

## Why it fits EaseMotion CSS
The element stays lightweight and reusable while leaning on utility-inspired structure, CSS variables, and motion patterns that align with the EaseMotion philosophy.
