# API Endpoint Documentation Card Component

## Overview

A CSS-only API Endpoint Documentation Card component built for developer portals and SaaS API docs. Each card summarizes an API endpoint with an HTTP method badge, endpoint path, status code indicators, parameters table, and response preview.

Key goals:
- Developer-friendly layout and typography
- Clear method badges (GET/POST/PUT/DELETE) with color semantics
- Scannable parameter tables and response examples
- Smooth hover effects and accessible defaults
- Pure HTML + CSS, no JavaScript

---

## Files

- `demo.html` — Self-contained examples for `GET /api/users`, `POST /api/projects`, `PUT /api/settings`, `DELETE /api/files/:id`
- `style.css` — Styling, badges, code previews, responsive rules, reduced-motion support
- `README.md` — Documentation (this file)

---

## Purpose

These cards are ideal for embedding inline API docs inside developer portals, product UIs, or admin consoles. They provide a compact, readable reference for endpoints without needing a full docs generator.

---

## Use Cases

- Developer onboarding pages
- Quick-reference panels next to SDK examples
- Admin UIs that list internal APIs
- In-app "try this endpoint" documentation (UI only)

---

## HTML Structure

A typical endpoint card:

```html
<article class="aedc-card">
  <header class="aedc-head">
    <span class="aedc-method aedc-get">GET</span>
    <div class="aedc-path">/api/users</div>
    <div class="aedc-status">
      <span class="aedc-code aedc-200">200</span>
      <span class="aedc-note">OK — returns list</span>
    </div>
  </header>

  <section class="aedc-body">
    <div class="aedc-section">
      <h3>Parameters</h3>
      <table class="aedc-params">...</table>
    </div>
    <div class="aedc-section">
      <h3>Response Preview</h3>
      <pre class="aedc-code"><code>{ ... }</code></pre>
    </div>
  </section>

  <footer class="aedc-foot">
    <span class="aedc-tag">Public</span>
    <div class="aedc-actions"><button class="aedc-btn">Copy</button></div>
  </footer>
</article>
```

---

## Customization

- Change method colors by editing `.aedc-get`, `.aedc-post`, `.aedc-put`, `.aedc-delete`.
- Swap the grid columns by editing `.aedc-grid` values (use `auto-fit`/`minmax` for fluid layouts).
- Adjust code block font-size and colors via `--aedc-code-bg` and the `pre` rules.
- Replace the buttons with links or interactive elements (be mindful to add accessible focus styles).

---

## Accessibility

- Uses semantic HTML (`<article>`, `<header>`, `<section>`, `<footer>`, `<time>`) for meaning
- High-contrast text tokens and code blocks
- `prefers-reduced-motion` support disables hover transforms
- Logical table structure for parameters

---

## Why it fits EaseMotion CSS

- Pure CSS implementation consistent with EaseMotion components
- Clean, modern SaaS aesthetic with subtle motion
- Reusable and composable with other EaseMotion styles
- Performance-minded (small CSS footprint, hardware-accelerated transforms)

---

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). Uses standard CSS features and includes reduced-motion fallback.

---

## Notes

This component is intentionally static (no interactive try/call behavior). It is designed to be integrated into docs or paired with a small JS runner if live calls are needed in-app.
