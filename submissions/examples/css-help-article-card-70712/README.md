# CSS Help Article Card

A pure-CSS help center article card with a category badge, reading-time meta, excerpt, and a call-to-action. Built for the EaseMotion CSS component library with no JavaScript.

## Features

- **Zero JavaScript:** Built entirely with HTML and CSS — animations, hover states, and focus handling are all CSS-driven.
- **Category badge + CTA:** A pill-shaped category badge and an animated "Read article" CTA whose arrow slides on hover/focus.
- **Responsive grid:** Auto-fitting responsive grid (`repeat(auto-fit, minmax(260px, 1fr))`) that scales from one column on mobile to many on desktop.
- **Accessible:** Each card is a focusable link (`<a>`) with an accessible name; `:focus-visible` outline and `aria-label` for screen readers; decorative arrow is `aria-hidden`.
- **Reduced-motion safe:** A `prefers-reduced-motion: reduce` block neutralizes the entrance and hover transforms for vestibular-sensitive users.

## Usage

Copy the markup from `demo.html` and link the styles from `style.css`. Each card uses the `.hac-card` class with `.hac-badge`, `.hac-meta`, `.hac-title`, `.hac-excerpt`, and `.hac-cta` children.

```html
<a
  class="hac-card"
  href="/articles/getting-started"
  aria-label="Read article: Getting started"
>
  <div class="hac-top">
    <span class="hac-badge">Getting Started</span>
    <span class="hac-meta">5 min read</span>
  </div>
  <h2 class="hac-title">Getting started with EaseMotion CSS</h2>
  <p class="hac-excerpt">
    Add EaseMotion CSS to your project in under a minute.
  </p>
  <span class="hac-cta"
    >Read article <span class="hac-arrow" aria-hidden="true">&rarr;</span></span
  >
</a>
```

### Theming via custom properties

```css
:root {
  --hac-accent: #6366f1; /* Badge + CTA accent color */
  --hac-card: rgba(23, 30, 45, 0.72); /* Card background */
  --hac-speed: 0.45s; /* Hover / entrance speed */
  --hac-radius: 16px; /* Card corner radius */
}
```

## Files

- `demo.html` — example markup with three article cards.
- `style.css` — all component styles, tokens, animations, and reduced-motion overrides.
- `README.md` — this document.

Closes #70712
