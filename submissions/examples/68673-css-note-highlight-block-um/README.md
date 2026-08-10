# CSS Note Highlight Block

A highlighted callout/note block with icon and colored left border, built entirely with pure CSS.

## Features

- Smooth slide-up entrance animation (`@keyframes ease-note-enter`)
- Staggered animation delay for sequential reveal
- Subtle hover lift effect
- Five semantic variants: Info, Success, Warning, Danger, Tip
- Fully themeable via CSS custom properties
- Zero JavaScript
- Responsive across all screen sizes
- Accessible — semantic `role`, `aria-label`, icon `aria-hidden`
- Reduced-motion safe

## Files

- `demo.html` — all variants in a full page layout
- `style.css` — component styles, animation, themes, and responsive rules

## Usage

```html
<!-- Info (default) -->
<div class="ease-note" role="note" aria-label="Information">
  <span class="ease-note__icon" aria-hidden="true"><!-- SVG icon --></span>
  <div class="ease-note__body">
    <span class="ease-note__title">Title</span>
    <p class="ease-note__text">Message goes here.</p>
  </div>
</div>

<!-- Modifier variants -->
<div class="ease-note ease-note--success" …>…</div>
<div class="ease-note ease-note--warning" …>…</div>
<div class="ease-note ease-note--danger"  …>…</div>
<div class="ease-note ease-note--tip"     …>…</div>
```

## CSS Custom Properties

```css
:root {
  --note-color:   #3b82f6;  /* icon and glow */
  --note-bg:      rgba(59 130 246 / .08);
  --note-border:  rgba(59 130 246 / .55);
  --note-title:   #93c5fd;
  --note-text:    #bfdbfe;
  --note-speed:   0.45s;    /* entrance duration */
  --note-radius:  10px;
  --note-border-w: 3px;
}
```

## Accessibility

- `role="note"` for informational blocks, `role="alert"` for Warning/Danger
- `aria-label` describes each block's semantic intent
- Decorative SVG icons carry `aria-hidden="true"`
- `@media (prefers-reduced-motion: reduce)` disables all animation

## Issue

EaseMotion CSS issue #68673.
