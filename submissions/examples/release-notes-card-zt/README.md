# Release Notes / Changelog Card Component

## Overview

A modern, CSS-only Release Notes / Changelog Card component for displaying product updates, feature additions, bug fixes, and improvements. Designed for use in SaaS dashboards, developer portals, and product pages.

Key goals:
- Clean visual hierarchy with version badges and dates
- Compact, readable lists for features, fixes, and improvements
- Smooth hover interactions and subtle motion
- Fully responsive card layout
- Pure HTML + CSS (no JavaScript)

---

## Files

- `demo.html` — Self-contained examples (three release cards: `v2.1.0`, `v2.0.5`, `v2.0.0`)
- `style.css` — Styling, responsive rules, hover animations, and reduced-motion support
- `README.md` — Documentation (this file)

---

## Purpose

These cards are intended to surface release notes in product UIs, marketing pages, admin dashboards, or changelog sections. They provide quick scannable information: version, release date, highlights, and detailed lists for features and bug fixes.

---

## Use Cases

- Product release pages
- Dashboard "What's new" widgets
- Documentation and changelog sections
- Email or social card designs (adapted)
- Admin panels and release management tools

---

## HTML Structure

A single release card follows this structure:

```html
<article class="rnc-card">
  <header class="rnc-header">
    <div class="rnc-version">v2.1.0</div>
    <div class="rnc-meta">
      <time datetime="2026-06-12">June 12, 2026</time>
      <span class="rnc-pill rnc-pill-new">Minor</span>
    </div>
  </header>

  <section class="rnc-body">
    <h3 class="rnc-title">What's new</h3>
    <ul class="rnc-list"> ... </ul>
    <h4 class="rnc-sub">Bug fixes</h4>
    <ul class="rnc-list rnc-list-small"> ... </ul>
  </section>

  <footer class="rnc-footer">
    <span class="rnc-tag">Highlights</span>
    <div class="rnc-actions">
      <button class="rnc-btn">View details</button>
      <button class="rnc-btn rnc-ghost">Copy version</button>
    </div>
  </footer>
</article>
```

- Wrap multiple cards in a container with the class `rnc-cards`.
- Use `.rnc-card-hero` to make a card span multiple columns (highlighted release).

---

## Customization

### Grid columns
Change columns in `style.css`:
```css
.rnc-cards { grid-template-columns: repeat(3,1fr); }
```

### Accent color
Update the `--rnc-accent` variable in `style.css`:
```css
:root { --rnc-accent: #yourColor; }
```

### Pills (major/minor/patch)
Modify `.rnc-pill-major`, `.rnc-pill-new`, `.rnc-pill-patch` to match branding.

### Buttons
Swap out the HTML buttons for links or icons as needed. The `.rnc-btn` class provides the hover interaction and primary styling.

### Text and spacing
Adjust `padding`, `font-size`, and `gap` values in `.rnc-card` and `.rnc-body` for denser or more spacious layouts.

---

## Accessibility

- Uses semantic markup (`<article>`, `<header>`, `<section>`, `<footer>`, `<time>`)
- Clear focus states for interactive elements if converted to links
- `prefers-reduced-motion` support disables transitions and hover transforms
- Color choices maintain contrast between background and text

---

## Why it fits EaseMotion CSS

- Pure CSS implementation aligning with EaseMotion's zero-JS components
- Smooth, natural easing using cubic-bezier for entrance and hover
- Responsive and accessible by design
- Reusable and composable with other EaseMotion components

---

## Browser Support

Modern browsers: Chrome, Firefox, Safari, Edge. Uses standard CSS features and includes a reduced-motion fallback.

---

## Notes

- The example `demo.html` is self-contained and demonstrates three release cards with version badges, dates, and categorized lists.
- The card layout is intentionally simple to encourage easy integration into product UIs.

---

Build product-grade release notes with elegant, accessible cards. 🚀
