# Component: Ease Pagination Underline

**EaseMotion CSS** · `submissions/examples/ease-pagination-underline/`

A clean, modern pagination component featuring a smooth sliding underline indicator and scale hover effects.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/ease-pagination-underline/demo.html
```

---

## Usage

The underline's position is completely driven by a CSS custom property `--active-index`. You don't need complex JavaScript to calculate exact pixel positions.

```html
<!-- Set --active-index to the currently active page number -->
<nav class="ease-pagination-underline" style="--active-index: 2;" aria-label="Pagination">
  <button class="ease-page-link">1</button>
  <button class="ease-page-link active" aria-current="page">2</button>
  <button class="ease-page-link">3</button>
  
  <div class="ease-underline-indicator" aria-hidden="true"></div>
</nav>
```

### Dynamic Updates
In a real application (React, Vue, etc.), simply update the `style` attribute on the container when the page changes. The CSS transition handles the smooth sliding animation.

```jsx
// Example in React
<nav className="ease-pagination-underline" style={{ '--active-index': currentPage }}>
```

---

## CSS Techniques

### Calculated Transform
The `.ease-underline-indicator` calculates its horizontal position based on three variables:
- `--active-index`
- `--item-width` (Width of a single page link)
- `--gap` (Spacing between links)

```css
transform: translateX(calc((var(--active-index) - 1) * (var(--item-width) + var(--gap))));
```

### Hover Scale
Page links use a simple `transform: scale(1.1)` combined with a cubic-bezier transition curve for a responsive, elastic feel.

### Modern `:has()` Interactivity
The demo includes an interactive showcase that uses the modern CSS `:has()` selector to update the `--active-index` purely via CSS when hovering over the buttons:
```css
.ease-pagination-underline:has(button:nth-child(3):hover) { 
  --active-index: 3 !important; 
}
```

---

## File Structure

```
ease-pagination-underline/
├── demo.html   — Pre-configured interactive demo
├── style.css   — Component styles and variables
└── README.md   — This documentation
```
