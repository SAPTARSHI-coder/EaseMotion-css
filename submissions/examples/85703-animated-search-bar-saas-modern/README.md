# Animated Search Bar Input with SaaS Modern Styling (`ease-saas-search-bar`)

A pure HTML + Vanilla CSS Animated Search Bar Input component featuring a clean rounded geometry, indigo SaaS accent ring (`#6366f1`), smooth width expansion transition on focus (`300px` &rarr; `480px`), keyboard shortcut badge (`⌘K`), magnifying glass search icon shift, action submit button, dark/light theme adaptation, and reduced motion fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive SaaS Search Bar Input UI without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **SaaS Modern Geometry**: Clean pill-shaped input (`border-radius: 9999px`), indigo accent focus ring (`rgba(99, 102, 241, 0.15)`), and smooth width expansion transition on focus.
- **100% Accessible**: Uses semantic `<form role="search">`, `<label for="saas-search-input" class="sr-only">`, `<input type="search">`, and `<button type="submit">`. Includes explicit focus rings (`:focus-visible`) and `@media (prefers-reduced-motion: reduce)` fallbacks (`transition: none !important;`).
- **Theme Adaptability**: Supports light SaaS default presentation and dark mode adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<form class="ease-saas-search-bar" role="search" action="#" method="get">
  <label for="saas-search-input" class="sr-only">Search workspace...</label>
  <span class="search-icon-wrapper" aria-hidden="true">
    <svg class="search-icon" viewBox="0 0 24 24" width="20" height="20">
      ...
    </svg>
  </span>
  <input
    type="search"
    id="saas-search-input"
    class="saas-search-input"
    placeholder="Search workspace..."
  />
  <kbd class="saas-kbd-badge">⌘K</kbd>
  <button type="submit" class="saas-search-submit" aria-label="Submit Search">
    ...
  </button>
</form>
```

### Customization Variables

```css
.ease-saas-search-bar {
  --saas-surface: #ffffff;
  --saas-border: #e2e8f0;
  --saas-accent: #6366f1;
  --saas-accent-hover: #4f46e5;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/85703-animated-search-bar-saas-modern/demo.html) directly in any modern web browser to view the SaaS Modern Search Bar UI offline.
