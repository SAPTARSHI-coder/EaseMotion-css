# Staggered Feature Grid

## 1. What does this do?
A responsive feature grid component that uses cards of varying heights to create a visually engaging staggered layout, helping highlight different pieces of content while maintaining a clean and organized structure.

## 2. How is it used?

### HTML Snippet
```html
<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-icon">⚡</div>
    <h3>Fast Performance</h3>
    <p>Optimized for modern web experiences.</p>
  </div>
</div>
```

### CSS Snippet
```css
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
}
```

---

## 3. Why is this useful for EaseMotion CSS?
This component aligns with the EaseMotion CSS philosophy by combining practical UI design with lightweight animation patterns.

### Benefits include:
- Pure HTML and CSS
- Human-readable implementation
- Easy customization
- Responsive by default
- Suitable for landing pages, product showcases, dashboards, and portfolios
- Framework-independent

---

## Description
Each card includes hover interactions such as subtle elevation, shadow enhancement, icon emphasis, and accent border animations to create a polished SaaS-style experience.

### Features include:
- Staggered masonry-style card layout
- Hover lift animation
- Animated icon scaling
- Accent border reveal
- Responsive grid behavior
- Multiple color variants
- Pure HTML and CSS implementation
- Light and Dark mode responsive (auto-adapts dynamically using `prefers-color-scheme`)

### Visual Reference
The demo includes multiple feature cards with varying heights, accent colors, and interactive hover states to demonstrate the staggered layout effect.

---

## Checklist
- [x] This feature does not duplicate an existing EaseMotion CSS class
- [x] I understand my naming will be standardized by the maintainer
- [x] I will submit code inside `submissions/examples/` only — not in `core/` or `components/`
