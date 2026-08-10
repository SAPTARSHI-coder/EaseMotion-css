# Fade-In Navbar for Creative Portfolio Layouts

A lightweight, dependency-free CSS navbar that fades and eases into view when
the page loads, with staggered link animations — designed for creative
portfolio sites. Pure CSS/HTML; a few lines of JS are used only to toggle
the mobile menu, not for the animation itself.

## Features

- Smooth fade + slide-down entrance animation on page load
- Staggered fade-in for individual nav links using a `--em-delay` custom property
- Sticky/fixed positioning with a frosted-glass (`backdrop-filter`) background
- Animated underline hover effect on links
- Fully responsive with a mobile hamburger menu (CSS-driven slide/fade)
- Respects `prefers-reduced-motion` — animations are disabled for users who request it

## Usage

Include the markup and stylesheet as shown in `demo.html`:

```html
<nav class="em-navbar em-fade-in-nav">
  <div class="em-navbar__inner">
    <a href="#" class="em-navbar__brand">Brand</a>
    <ul class="em-navbar__links">
      <li class="em-fade-item" style="--em-delay: 1"><a href="#">Link 1</a></li>
      <li class="em-fade-item" style="--em-delay: 2"><a href="#">Link 2</a></li>
    </ul>
  </div>
</nav>
```

- `.em-navbar` — the fixed navbar shell
- `.em-fade-in-nav` — triggers the navbar's own fade + slide-down entrance
- `.em-fade-item` — apply to each `<li>` for a staggered fade-in; control timing with the inline `--em-delay` variable (an integer step index, e.g. 1, 2, 3…)

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--em-navbar-bg` | `rgba(15, 15, 20, 0.75)` | Navbar background color/opacity |
| `--em-navbar-blur` | `10px` | Backdrop blur amount |
| `--em-navbar-height` | `72px` | Navbar height |
| `--em-navbar-text` | `#f5f5f7` | Link/brand text color |
| `--em-navbar-accent` | `#7c5cff` | Hover/accent color |
| `--em-navbar-shadow` | `0 8px 24px rgba(0,0,0,0.25)` | Navbar drop shadow |
| `--em-fade-duration` | `0.7s` | Duration of the navbar's entrance animation |
| `--em-fade-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Easing curve for all fade animations |
| `--em-stagger-step` | `0.08s` | Delay increment multiplied by each item's `--em-delay` |

Override any of these in your own stylesheet, e.g.:

```css
:root {
  --em-navbar-accent: #ff5c8a;
  --em-fade-duration: 1s;
}
```

## Accessibility

- All animations are wrapped in a `@media (prefers-reduced-motion: reduce)` query that disables motion and snaps elements straight to their final state.
- The mobile toggle button uses `aria-label` and `aria-expanded`, updated via JS on click.

## Browser Support

Uses `backdrop-filter`, CSS custom properties, and standard keyframe animations — supported in all modern evergreen browsers (Chrome, Edge, Firefox, Safari). `backdrop-filter` gracefully degrades to a solid background color in browsers without support.