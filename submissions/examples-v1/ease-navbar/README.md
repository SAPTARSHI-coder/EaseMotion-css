# ease-navbar — Responsive Navigation Bar

## What does this do?

A responsive top navigation bar with branding, navigation links, optional CTA button, and a mobile hamburger menu. Supports sticky, fixed, and static positioning with multiple visual variants.

## Variants

| Variant     | Class                       | Description                          |
| ----------- | --------------------------- | ------------------------------------ |
| Sticky      | `.ease-navbar--sticky`      | Sticky at top (default)              |
| Fixed       | `.ease-navbar--fixed`       | Fixed at top                         |
| Static      | `.ease-navbar--static`      | Normal flow                          |
| Large       | `.ease-navbar--lg`          | 64px height (default: 56px)          |
| Transparent | `.ease-navbar--transparent` | No background or border              |
| Glass       | `.ease-navbar--glass`       | Frosted glass (backdrop-filter blur) |
| Centered    | `.ease-navbar--centered`    | Links centred, brand on left         |
| Split       | `.ease-navbar--split`       | Brand left, links centre, CTA right  |

## How is it used?

```html
<nav class="ease-navbar ease-navbar--sticky ease-navbar--centered">
  <a href="#" class="ease-navbar__brand">
    <span class="ease-navbar__brand-icon">E</span>
    Brand
  </a>

  <div class="ease-navbar__links">
    <a href="#" class="ease-navbar__link ease-navbar__link--active">Home</a>
    <a href="#" class="ease-navbar__link">Docs</a>
    <a href="#" class="ease-navbar__link">Components</a>
  </div>

  <a href="#" class="ease-navbar__cta">Get Started</a>

  <button class="ease-navbar__toggle" aria-label="Toggle menu">
    <span class="ease-navbar__toggle-bar"></span>
    <span class="ease-navbar__toggle-bar"></span>
    <span class="ease-navbar__toggle-bar"></span>
  </button>

  <div class="ease-navbar__mobile">
    <a href="#" class="ease-navbar__link ease-navbar__link--active">Home</a>
    <a href="#" class="ease-navbar__link">Docs</a>
    <a href="#" class="ease-navbar__link">Components</a>
    <a href="#" class="ease-navbar__cta">Get Started</a>
  </div>
</nav>
```

## JavaScript

Minimal JS handles: hamburger toggle, mobile menu open/close, body scroll lock, and close on link click.

```js
toggle.addEventListener("click", function () {
  mobile.classList.toggle("ease-navbar__mobile--open");
  navbar.classList.toggle("ease-navbar--mobile-open");
  document.body.style.overflow = isOpen ? "hidden" : "";
});
```

## Why is it useful?

Navigation bars are the most fundamental layout component in any website. This provides a consistent, responsive, accessible implementation that works across all screen sizes.

## Tech Stack

- HTML
- CSS (flexbox, backdrop-filter, custom properties)
- JavaScript (minimal — mobile menu toggle)

## Preview

Open `demo.html` directly in your browser. Resize to &lt;768px to see the mobile hamburger menu.

## Contribution Notes

- Class naming follows EaseMotion BEM convention (`ease-navbar__*`)
- Uses `var(--ease-primary)` for active links and CTA buttons
- Mobile menu breakpoint: 768px
- Maintainer may adjust naming before merging
