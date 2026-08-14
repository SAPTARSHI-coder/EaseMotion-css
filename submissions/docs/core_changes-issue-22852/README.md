# ease-divider — Divider / Separator Component

## What does this do?

Adds a divider / separator component for visually separating content sections. Supports horizontal and vertical orientations, solid / dashed / dotted styles, centered text labels, gradient edges, and an animated draw-in effect.

## How is it used?

```html
<!-- Plain horizontal divider -->
<hr class="ease-divider" />

<!-- Styles -->
<hr class="ease-divider ease-divider-dashed" />
<hr class="ease-divider ease-divider-dotted" />
<hr class="ease-divider ease-divider-gradient" />

<!-- With centered label -->
<hr class="ease-divider"><span>LABEL</span></hr>

<!-- Vertical divider -->
<hr class="ease-divider ease-divider-vertical" />

<!-- Animated (draw from center) -->
<hr class="ease-divider ease-divider-animated" />
```

All variants can be combined:
```html
<hr class="ease-divider ease-divider-vertical ease-divider-dashed ease-divider-animated" />
```

Customise colours via CSS custom properties:
```css
.ease-divider {
  --ease-divider-color: #3b82f6;
  --ease-divider-label-color: #3b82f6;
}
```

## Why is it useful?

Dividers are a fundamental layout element for grouping content, separating sections in forms, or providing visual hierarchy. This component uses a single `<hr>` element with `::before` and `::after` pseudo-elements for the lines — lightweight, semantic, and accessible. It supports dark mode, `prefers-reduced-motion`, and integrates with EaseMotion CSS design tokens.

Fixes #22852
