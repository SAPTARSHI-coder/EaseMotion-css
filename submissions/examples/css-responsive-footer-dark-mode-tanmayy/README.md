# CSS Responsive Dark Footer

A premium, highly responsive grid-based footer system optimized for Dark Mode interfaces. This component provides a clean structural foundation for modern web applications, featuring an elegant glowing top border and subtle CSS hover micro-interactions.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a complete footer layout typical of modern SaaS and web applications. It includes a brand description column, two categorized link columns, a newsletter subscription form, and a bottom row for copyright and social media icons. The layout fluidly adapts to screen sizes, transitioning from a 4-column desktop grid down to a 2-column tablet layout, and finally a single vertical stack on mobile devices.

### 2. How is it used?

The layout engine is powered entirely by native CSS Grid. The desktop view utilizes a fractional template to properly allocate horizontal space between the dense brand/newsletter columns and the sparse link columns:

```css
.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 40px;
}
```

Responsive breakpoints intercept the grid instructions based on viewport width:
- **Tablet (`max-width: 992px`)**: Condenses to `grid-template-columns: 1fr 1fr`, forcing the brand column to span across the top (`grid-column: span 2`).
- **Mobile (`max-width: 576px`)**: Collapses to `grid-template-columns: 1fr`, stacking all columns vertically in a native block layout.

To achieve the premium dark mode aesthetic, a `linear-gradient` is applied to an absolute `::before` pseudo-element on the footer container, rendering a crisp 1px glowing line across the top edge.

### 3. Why is it useful?

Building responsive footer layouts using traditional `float` or Flexbox often results in messy wrapping behavior on intermediate screen sizes (tablets). By utilizing CSS Grid, we can explicitly define exact column counts and spans at specific breakpoints, guaranteeing a flawless, predictable layout at any viewport width. The component adheres to accessibility standards by ensuring semantic HTML structure (`<form>`, `<ul>`, `<label>`, `aria-label`) and disables all transition animations when the user prefers reduced motion.
