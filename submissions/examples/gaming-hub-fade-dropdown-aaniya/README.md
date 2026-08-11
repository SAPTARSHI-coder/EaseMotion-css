# Gaming Hub Fade-In Dropdown

Pure CSS/HTML dropdown navigation styled for gaming hub layouts, with a dark theme and neon accent glow.

**Issue:** #59116

## Features

- No JavaScript — uses `:hover` and `:focus-within` for open/close behavior
- Smooth fade + slide transition on open/close
- Keyboard accessible (tab into a trigger to open its dropdown)
- Responsive: collapses to a stacked mobile layout under 768px
- Respects `prefers-reduced-motion` by disabling transitions for users who request it

## Files

- `style.css` — all styles
- `demo.html` — standalone demo page

## Usage

Link `style.css` in your page, then structure your nav as:

```html
<nav class="ghd-nav">
  <ul class="ghd-menu">
    <li class="ghd-item">
      <a href="#" class="ghd-trigger">
        Menu Label
        <span class="ghd-caret"></span>
      </a>
      <ul class="ghd-dropdown">
        <li><a href="#" class="ghd-dropdown-link"><span class="ghd-dropdown-icon"></span>Link</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

Open `demo.html` in a browser to see it in action.
