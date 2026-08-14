# CSS Passport Stamp

A CSS-only passport entry stamp with a subtle animated ink spread
effect inspired by travel documents and entry stamps.

## Features

- Pure HTML and CSS
- Circular passport stamp design
- Animated ink spread effect
- Dashed inner stamp border
- Entry location and date
- Hover and keyboard focus interaction
- Responsive layout
- Reduced-motion support
- Forced-colors support
- No JavaScript required

## Files

- `demo.html` — Component demonstration
- `style.css` — Component styling
- `README.md` — Documentation

## Usage

Use the stamp element inside a container:

```html
<div class="stamp" tabindex="0" aria-label="Tokyo passport entry stamp">
  <div class="stamp-inner">
    <span class="stamp-country">JAPAN</span>
    <span class="stamp-symbol" aria-hidden="true">✈</span>
    <strong>TOKYO</strong>
    <span class="stamp-date">10 · AUG · 2026</span>
    <span class="stamp-type">ENTRY</span>
  </div>
</div>