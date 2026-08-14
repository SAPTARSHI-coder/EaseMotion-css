# CSS Pac-Man Loader

A lightweight, performance-focused Pac-Man chomping animation loader, engineered completely using pure CSS.

## Features

- Pure CSS chomp animation (`@keyframes ease-chomp-top` and `ease-chomp-bottom`)
- Translating horizontal dots feeding cycle (`@keyframes ease-dot-slide`)
- Custom parameters easily configured via CSS variables
- Responsive layouts & sizes
- Accessible — uses `role="progressbar"` with descriptive label mappings
- Supports system-wide vestibular sensitivities using `@media (prefers-reduced-motion: reduce)`

## Files

- `demo.html` — demo page displaying loader variants (Retro, Cyber Neon, Minimal compact)
- `style.css` — styling, transitions, variables, positioning, and responsive media rules

## Usage

Include the structure below in your layout and link `style.css`:

```html
<div class="ease-pacman-loader" role="progressbar" aria-label="Loading content..." aria-valuemin="0" aria-valuemax="100">
  <div class="ease-pacman">
    <div class="ease-pacman-jaw ease-pacman-jaw--top"></div>
    <div class="ease-pacman-jaw ease-pacman-jaw--bottom"></div>
  </div>
  <div class="ease-pacman-dots">
    <div class="ease-pacman-dot"></div>
    <div class="ease-pacman-dot"></div>
    <div class="ease-pacman-dot"></div>
  </div>
</div>
```

## CSS Custom Properties

Override the root variables to adjust sizing and color schemes:

```css
:root {
  --pacman-color: #facc15;  /* Pac-Man body color */
  --dot-color:    #3b82f6;  /* Feeding dots color */
  --pacman-size:  50px;     /* Bounding size of the character */
}
```

## Issue

EaseMotion CSS issue #68660.
