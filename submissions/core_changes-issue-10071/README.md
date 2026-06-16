# 6-Column and 12-Column Grid Utilities

Adds `.ease-grid-cols-6`, `.ease-grid-cols-12`, and `.ease-col-span-{5-11}` to the existing grid system, enabling standard design system layouts (sidebar + content, dashboards, form grids).

## Problem

Current grid only goes up to 4 columns:
- `.ease-grid-cols-{1,2,3,4}` 
- `.ease-col-span-{1,2,3,4}`

Most real-world layouts need finer control. A sidebar + content layout using `.ease-grid-cols-2` gives each column 50%, which is too wide for a sidebar.

## Proposed CSS to Add to `core/utilities.css`

### Base grid classes (add after `.ease-grid-cols-4`):
```css
.ease-grid-cols-6  { grid-template-columns: repeat(6, minmax(0, 1fr)) !important; }
.ease-grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)) !important; }
```

### Span classes (add after `.ease-col-span-4`):
```css
.ease-col-span-5  { grid-column: span 5 / span 5 !important; }
.ease-col-span-6  { grid-column: span 6 / span 6 !important; }
.ease-col-span-7  { grid-column: span 7 / span 7 !important; }
.ease-col-span-8  { grid-column: span 8 / span 8 !important; }
.ease-col-span-9  { grid-column: span 9 / span 9 !important; }
.ease-col-span-10 { grid-column: span 10 / span 10 !important; }
.ease-col-span-11 { grid-column: span 11 / span 11 !important; }
```

### Responsive variants
Add within each `@media` block (sm, md, lg, xl):
```css
.ease-sm-grid-cols-6  { grid-template-columns: repeat(6, minmax(0, 1fr)) !important; }
.ease-sm-grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)) !important; }
/* ... same for .ease-md-, .ease-lg-, .ease-xl- */
```

### Mobile collapse (add to the 480px override):
```css
.ease-grid-cols-6,
.ease-grid-cols-12 {
  grid-template-columns: minmax(0, 1fr) !important;
}
```

## Usage

```html
<!-- 12-column dashboard layout -->
<div class="ease-grid ease-grid-cols-12 ease-gap-4">
  <aside class="ease-col-span-3 ease-card">Sidebar</aside>
  <main class="ease-col-span-9 ease-card">Main content</main>
</div>

<!-- 6-column stat cards -->
<div class="ease-grid ease-grid-cols-6 ease-gap-4">
  <div class="ease-col-span-2 ease-card">Stat 1</div>
  <div class="ease-col-span-2 ease-card">Stat 2</div>
  <div class="ease-col-span-2 ease-card">Stat 3</div>
</div>
```

## Files
- `README.md` — this file
- `demo.html` — interactive demo page
- `style.css` — CSS for the grid utilities
