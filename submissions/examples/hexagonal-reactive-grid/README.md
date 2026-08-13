# CSS-Only Hexagonal Grid with Reactive Neighbor Highlighting

A responsive, pure CSS honeycomb grid layout constructed with `clip-path` polygon shapes and reactive neighbor highlighting driven by modern CSS `:has()` relational selectors.

## Key Features

- **Honeycomb Pattern Layout**: Uses `clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)` and interlocking negative margin offsets for a seamless hexagonal tile structure.
- **Reactive Neighbor Highlighting**: Powered entirely by CSS `:has()` logic (`.ease-hex-item:has(+ .ease-hex-item:hover)` and `.ease-hex-item:hover + .ease-hex-item`).
- **Interactive Depth & Focus**: On hover, the targeted cell scales up, elevates its `z-index`, and emits a vibrant glow while surrounding grid cells dim slightly to create focus depth.
- **Zero JavaScript Dependency**: 100% declarative CSS state handling with smooth cubic-bezier transitions.
- **Responsive Layout**: Adapts honeycomb tile dimensions and gap spacing dynamically across desktop, tablet, and mobile screens.
- **Multiple Visual Themes**: Includes preset variants for Gaming Skill Trees (`.ease-hex-grid-gold`), Cyberpunk Hubs (`.ease-hex-grid-cyber`), and Emerald Matrix (`.ease-hex-grid-emerald`).

## HTML Structure

```html
<div class="ease-hex-grid ease-hex-grid-cyber">
  <div class="ease-hex-row">
    <a href="#" class="ease-hex-item">
      <div class="ease-hex-content">
        <span class="ease-hex-icon">⚡</span>
        <h4 class="ease-hex-title">Overcharge</h4>
        <span class="ease-hex-subtitle">Tier 1</span>
      </div>
    </a>
    <a href="#" class="ease-hex-item">
      <div class="ease-hex-content">
        <span class="ease-hex-icon">🛡️</span>
        <h4 class="ease-hex-title">Aegis Shield</h4>
        <span class="ease-hex-subtitle">Tier 1</span>
      </div>
    </a>
  </div>
  <div class="ease-hex-row">
    <a href="#" class="ease-hex-item">
      <div class="ease-hex-content">
        <span class="ease-hex-icon">🔥</span>
        <h4 class="ease-hex-title">Infernal Strike</h4>
        <span class="ease-hex-subtitle">Tier 2</span>
      </div>
    </a>
  </div>
</div>
```

## CSS Mechanics

### Clip-Path Polygon
```css
.ease-hex-item {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
```

### Relational `:has()` Selectors
```css
/* Dim non-hovered items */
.ease-hex-grid:has(.ease-hex-item:hover) .ease-hex-item:not(:hover) {
  opacity: 0.45;
  transform: scale(0.92);
}

/* Highlight immediate preceding sibling */
.ease-hex-item:has(+ .ease-hex-item:hover) {
  opacity: 0.85;
  transform: scale(1.06);
  z-index: 15;
}

/* Highlight immediate next sibling */
.ease-hex-item:hover + .ease-hex-item {
  opacity: 0.85;
  transform: scale(1.06);
  z-index: 15;
}
```

## Browser Support

Requires browsers supporting CSS `:has()` (Chrome 105+, Safari 15.4+, Edge 105+, Firefox 121+).
