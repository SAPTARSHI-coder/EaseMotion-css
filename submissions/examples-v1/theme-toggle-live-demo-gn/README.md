# Theme Toggle on Live Demo Page (#2874)

1. **What's the bug?** The Live Demo page (`docs/demo.html`) was missing the Light/Dark theme toggle present on the landing page, so users couldn't change/maintain theme preference while viewing demos.
2. **The fix:** Added the same toggle button (sun/moon SVG icons) to `docs/demo.html`'s nav, linked `docs.css` for theme variables and toggle styling, added the pre-paint `localStorage` theme-init script, and added the click handler that toggles `data-theme` and persists via `localStorage` under the `em-theme` key — matching `docs/index.html`'s implementation exactly.
3. **How is it tested?** `demo.html` here replicates the toggle in isolation — click it, reload the page, and the theme persists.
4. **Why is it useful?** Ensures theme preference is consistent across the landing page and live demo, improving UX as described in the issue.