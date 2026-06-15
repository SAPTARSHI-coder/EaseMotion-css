# Expanding Search Bar Reveal

A compact search icon that smoothly expands into a full search input field
when clicked or focused — a clean, space-efficient pattern common in
modern navigation bars and dashboards.

## Files
- `demo.html` - Demo within a mock navbar
- `style.css` - Component styles
- `README.md` - This file

## Usage

```html
<div class="ease-expand-search">
  <input type="text" class="ease-expand-search-input" placeholder="Search...">
  <button class="ease-expand-search-btn" aria-label="Toggle search">
    <svg class="ease-expand-search-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
      <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  </button>
</div>
```

## How it works

- The `.ease-expand-search-input` starts at `width: 0` with `opacity: 0`
  and no padding — visually hidden but still in the DOM.
- `.ease-expand-search` uses `:focus-within`, which activates when either
  the input or the button receives focus (via click or Tab).
- On `:focus-within`, the input animates to `width: 220px`, gets padding,
  and fades in. The search button also highlights to indicate active state.
- No JavaScript required.

## Features
- Pure CSS, no JavaScript
- Expands on click (button or input) and keyboard focus (Tab)
- Smooth width + opacity transition
- Active-state highlight on the search button
- Responsive: narrower expanded width on small screens
- Easily themeable via the existing color tokens
