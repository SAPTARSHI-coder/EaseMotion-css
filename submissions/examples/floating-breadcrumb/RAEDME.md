# Floating Breadcrumb

A premium, SaaS-style floating breadcrumb navigation component. Built with pure HTML and CSS — no JavaScript, no external icon libraries, no dependencies.

Resolves issue **#79819**: *"feat: create Floating Breadcrumb with SaaS Modern styling."*

## Features

- **Floating pill container** with a clean light background, subtle border, and soft box-shadow that lifts on hover.
- **Slight glassmorphism** (`backdrop-filter: blur`) for a modern, layered feel.
- **Inline SVG home icon** — no icon fonts or external libraries.
- **Gradient-highlighted current page** so users always know where they are.
- **Elegant chevron separators** between each breadcrumb item.
- **Smooth hover/focus transitions** on all interactive links.
- **Fully accessible**: semantic `<nav>` + `<ol>`, `aria-current="page"`, and visible `:focus-visible` rings for keyboard users.
- **Fully responsive**: adapts padding/typography for tablet and mobile, and gracefully handles long paths with horizontal scroll instead of overflow or broken layout.
- **`prefers-reduced-motion` support** — transitions and hover motion are disabled for users who request reduced motion.
- Themeable via CSS custom properties (`--fb-*`) for colors, spacing, radius, and shadows.

## How to use it

1. Include `style.css` in your page.
2. Drop in the markup, one `<li class="breadcrumb-item">` per step, separated by `<li class="breadcrumb-separator">`. Mark the final step as the current page.

```html
<nav class="floating-breadcrumb" aria-label="Breadcrumb">
  <ol class="breadcrumb-list">
    <li class="breadcrumb-item">
      <a class="breadcrumb-link" href="/">
        <svg class="breadcrumb-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3.2 3 10.5v9.3c0 .55.45 1 1 1h5.5v-6.4h5v6.4H20c.55 0 1-.45 1-1v-9.3L12 3.2Z"/>
        </svg>
        <span>Home</span>
      </a>
    </li>

    <li class="breadcrumb-separator" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M9 6l6 6-6 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </li>

    <li class="breadcrumb-item">
      <a class="breadcrumb-link" href="/dashboard">Dashboard</a>
    </li>

    <li class="breadcrumb-separator" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M9 6l6 6-6 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </li>

    <li class="breadcrumb-item">
      <span class="breadcrumb-current" aria-current="page">Current Project</span>
    </li>
  </ol>
</nav>
```

Customize the theme by overriding the CSS custom properties, e.g.:

```css
.floating-breadcrumb {
  --fb-accent: #10b981;
  --fb-accent-2: #059669;
}
```

See `demo.html` for three ready-to-open examples (default path, short path, and a long path that demonstrates the responsive scroll behavior).

## File structure

```
submissions/examples/floating-breadcrumb/
├── demo.html    # Self-contained demo, opens directly in a browser
├── style.css    # Component styles
└── README.md    # This file
```

## Accessibility notes

- The container is a landmark `<nav aria-label="Breadcrumb">` wrapping an ordered list (`<ol>`), matching the standard breadcrumb pattern.
- The current page is marked with `aria-current="page"` and rendered as a non-interactive `<span>` (not a link, since it doesn't navigate anywhere).
- Separators are decorative and hidden from assistive technology via `aria-hidden="true"`.
- All links are natively focusable and keyboard-operable; a visible `:focus-visible` ring (offset box-shadow) is provided for keyboard navigation.
- Text colors (`--fb-text`, `--fb-text-hover`, `--fb-text-current`) were chosen to keep sufficient contrast against their backgrounds.

## Responsive behavior

- **Desktop**: full padding and spacing, breadcrumb floats naturally at its content width.
- **Tablet (≤768px)**: padding, gap, and font size scale down slightly to stay compact.
- **Mobile (≤480px)**: the container becomes full-width with a larger corner radius; the list scrolls horizontally (scrollbar hidden) instead of overflowing or wrapping awkwardly, so long paths (e.g. `Home → Workspace → Dashboard → Projects → Analytics → Revenue Report`) stay usable on small screens.