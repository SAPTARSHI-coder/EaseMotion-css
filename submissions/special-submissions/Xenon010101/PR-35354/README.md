# ease-menu-slide-xk

Mobile-style slide-in navigation drawer with a dark overlay backdrop.

## How to use

```html
<link rel="stylesheet" href="style.css" />

<button class="menu-toggle" aria-label="Open menu">&#9776;</button>

<nav class="menu-drawer">
  <button class="menu-close" aria-label="Close menu">&times;</button>
  <ul class="menu-links">
    <li><a href="#">Home</a></li>
    <!-- … -->
  </ul>
</nav>

<div class="menu-overlay"></div>
```

Open/close via JS toggling the `.open` / `.show` classes.

## Customisation

```css
:root {
  --ms-width: 280px;         /* drawer width */
  --ms-bg: #1e293b;          /* drawer background */
  --ms-text: #f1f5f9;        /* text colour */
  --ms-accent: #6366f1;      /* accent/hover colour */
  --ms-duration: .35s;       /* slide transition time */
  --ms-ease: cubic-bezier(.4,0,.2,1); /* easing curve */
  --ms-overlay: rgba(0,0,0,.5); /* backdrop tint */
}
```

## Accessibility

- `aria-label` on toggle and close buttons
- Slide and overlay transitions pause with `prefers-reduced-motion: reduce`
