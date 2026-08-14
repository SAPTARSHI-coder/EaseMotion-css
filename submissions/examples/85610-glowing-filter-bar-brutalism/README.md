# Glowing Filter Bar Header Component with Brutalism Styling (`ease-glowing-brutalist-filter-bar`)

A pure HTML + Vanilla CSS Filter Bar Header component featuring a bold Neo-Brutalist design (4px solid borders, 8px hard offset black drop-shadows, cyan `#00f0ff` & magenta `#ff007f` neon glowing feedback on hover/focus), responsive horizontal to vertical stack layout, form controls (`<input type="search">`, `<select>`, `<button>`), keyboard focus states, dark/light theme adaptation, and reduced motion fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Brutalist Filter Bar Header UI without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Neo-Brutalist & Neon Glow Aesthetic**: Chunky 4px solid borders with 8px hard offset drop-shadows, bold monospace typography, and vibrant cyan & magenta neon box-shadow glows on interactive focus/hover states.
- **100% Accessible**: Uses semantic `<header>`, `<form>`, `<label>`, `<input type="search">`, `<select>`, and `<button>`. Includes explicit focus rings (`:focus-visible`) and `@media (prefers-reduced-motion: reduce)` fallbacks (`transition: none !important; animation: none !important;`).
- **Theme Adaptability**: Supports light Neo-Brutalist default presentation and dark mode adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<header class="ease-glowing-brutalist-filter-bar" role="search">
  <div class="filter-bar-surface">
    <span class="filter-brand-tag">FILTER MATRIX // SYS.01</span>
    <form class="filter-controls-form">
      <input
        type="search"
        class="brutal-input"
        placeholder="Search components..."
      />
      <select class="brutal-select">
        ...
      </select>
      <button type="submit" class="brutal-btn btn-apply">APPLY</button>
    </form>
  </div>
</header>
```

### Customization Variables

```css
.ease-glowing-brutalist-filter-bar {
  --brutal-surface: #ffffff;
  --brutal-cyan: #00f0ff;
  --brutal-magenta: #ff007f;
  --brutal-border: #000000;
  --brutal-shadow: #000000;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/85610-glowing-filter-bar-brutalism/demo.html) directly in any modern web browser to view the Glowing Brutalist Filter Bar Header UI offline.
