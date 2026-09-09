# Custom Datepicker Calendar with Gradient Glow Styling (`ease-datepicker-glow`)

A pure HTML + Vanilla CSS Datepicker Calendar component featuring an ambient gradient glow aura backdrop (`linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)`), 7-column calendar grid, month navigation header, today highlight indicator (`.is-today`), selected date gradient fill (`.is-selected`), disabled date states (`.is-disabled`), keyboard focus states, dark/light theme adaptation, and reduced motion fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Datepicker Calendar UI without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Gradient Glow Aesthetic**: Vibrant multi-stop gradient blur aura backdrop behind a sleek dark space surface card (`#1e293b`), with gradient fill for selected date cells.
- **100% Accessible**: Uses semantic `<header>`, `<button type="button">`, and `<div role="grid">`. Includes explicit focus rings (`:focus-visible`) and `@media (prefers-reduced-motion: reduce)` fallbacks (`transition: none !important; animation: none !important;`).
- **Theme Adaptability**: Supports dark space surface default presentation and light theme adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<div class="ease-datepicker-glow">
  <div class="datepicker-glow-halo" aria-hidden="true"></div>
  <div class="datepicker-card-surface">
    <header class="datepicker-header">
      <h2 class="month-heading">August 2026</h2>
      <button type="button" class="month-nav-btn" aria-label="Previous Month">
        ...
      </button>
    </header>
    <div class="date-grid" role="grid">
      <button type="button" class="date-cell is-today">14</button>
      <button type="button" class="date-cell is-selected">18</button>
    </div>
  </div>
</div>
```

### Customization Variables

```css
.ease-datepicker-glow {
  --datepicker-surface: #1e293b;
  --datepicker-pink: #ec4899;
  --datepicker-purple: #8b5cf6;
  --datepicker-blue: #3b82f6;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/85669-datepicker-calendar-gradient-glow/demo.html) directly in any modern web browser to view the Gradient Glow Datepicker Calendar UI offline.
