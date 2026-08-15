# Dynamic Datepicker Calendar with Minimalist Styling (`ease-minimal-datepicker`)

A pure HTML + Vanilla CSS Datepicker Calendar component featuring a clean Scandinavian minimalist design (`16px` border-radius, clean border `#e2e8f0`), 7-column calendar grid, month navigation header, today highlight indicator (`.is-today`), selected date solid pill background (`.is-selected`), disabled date states (`.is-disabled`), keyboard focus states, dark/light theme adaptation, and reduced motion fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Datepicker Calendar UI without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Minimalist Scandinavian Aesthetic**: Crisp clean typography with high contrast ratio, zero heavy gradients or gaudy glows, and solid pill styling for selected date cells.
- **100% Accessible**: Uses semantic `<header>`, `<button type="button">`, and `<div role="grid">`. Includes explicit focus rings (`:focus-visible`) and `@media (prefers-reduced-motion: reduce)` fallbacks (`transition: none !important; animation: none !important;`).
- **Theme Adaptability**: Supports light Scandinavian default presentation and dark mode adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<div class="ease-minimal-datepicker">
  <div class="minimal-card-surface">
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
.ease-minimal-datepicker {
  --minimal-surface: #ffffff;
  --minimal-border: #e2e8f0;
  --minimal-accent: #0f172a;
  --minimal-brand: #0284c7;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/85663-datepicker-calendar-minimalist/demo.html) directly in any modern web browser to view the Minimalist Datepicker Calendar UI offline.
