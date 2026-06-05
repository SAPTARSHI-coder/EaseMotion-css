# Obsidian Editorial Testimonials

## Overview

A premium editorial-style testimonials section inspired by luxury magazines and high-end brand showcases. The component features a dark obsidian theme with gold accent highlights, a featured testimonial card, star ratings, verified review badges, and elegant hover interactions — all built with pure CSS and no JavaScript.

## Features

- Editorial luxury design with dark obsidian background and gold accents
- Featured testimonial layout that spans two grid rows on desktop
- Decorative typographic quote marks with hover-reveal gold colour
- Gold accent line appears on card hover
- Star ratings and verified review badge with pulse animation
- Author section with avatar initials, name, role, and review source
- Responsive grid — two columns on desktop, single column on mobile
- Semantic HTML (`section`, `article`, `blockquote`, `figcaption`, `cite`)
- `prefers-reduced-motion` accessibility support

## Usage

1. Copy `demo.html` and `style.css` into your project.
2. Open `demo.html` directly in a browser — no build step or server required.

```html
<section class="tm-obs">
  <header class="tm-obs-header">…</header>
  <div class="tm-obs-grid">
    <article class="tm-obs-card tm-obs-card--featured">…</article>
    <article class="tm-obs-card">…</article>
  </div>
</section>
```

See [demo.html](demo.html) for the complete markup and [style.css](style.css) for all styles.

## Why it fits EaseMotion CSS

- **Reusable UI pattern** — The testimonials grid is a common component; drop it into any page with the self-contained `tm-obs` prefix.
- **Elegant hover interactions** — Gold accent reveal, quote glow, and background shift demonstrate EaseMotion's focus on purposeful, tasteful motion.
- **Human-readable classes** — Descriptive naming (`tm-obs-card`, `tm-obs-stars`, `tm-obs-verified`) makes the markup self-documenting.
- **Animation-first philosophy** — The verified-badge pulse (`tmObsPulse`) and hover transitions showcase CSS-only animation aligned with EaseMotion's core identity.
