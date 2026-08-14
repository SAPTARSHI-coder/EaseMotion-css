# Scroll-Driven 3D Card Gallery

## What does this do?

Combines CSS 3D transforms (`perspective`, `rotateX`, `rotateY`, `translateZ`, `scale`) with `animation-timeline: view()` to create a cinematic card gallery where each card rotates, unfurls, and emerges from 3D space as the user scrolls into view. Four distinct 3D animation styles demonstrate different spatial entrances — all without JavaScript.

## How is it used?

Apply one of the 3D animation classes to a card container with `transform-style: preserve-3d`:

```html
<article class="sc3d-flip-y">
  <div class="sc3d-card-wrap">
    <div class="sc3d-card">
      <div class="sc3d-card-image">🔄</div>
      <div class="sc3d-card-body">
        <h3>Card Title</h3>
        <p>Card description...</p>
      </div>
    </div>
  </div>
</article>
```

**Available animation styles:**

| Class | Effect | Enter From |
|-------|--------|------------|
| `.sc3d-flip-y` | rotateY | Left side (horizontal sweep) |
| `.sc3d-flip-x` | rotateX | Top (unfurls downward) |
| `.sc3d-diagonal` | rotateX + rotateY | Top-left corner |
| `.sc3d-zoom` | translateZ | Deep background (cinematic zoom) |

**Accent colors:**

| Class | Gradient |
|-------|----------|
| `.sc3d-card--primary` | Indigo (#6366f1 → #818cf8) |
| `.sc3d-card--rose` | Rose (#e11d48 → #fb7185) |
| `.sc3d-card--emerald` | Emerald (#059669 → #34d399) |
| `.sc3d-card--amber` | Amber (#d97706 → #fbbf24) |

## Why is it useful?

Scroll-driven 3D transforms bridge the gap between static card layouts and cinematic storytelling. Traditional card reveals rely on linear 2D animation. This submission shows how perspective-driven 3D motion creates depth and visual interest that flat animations cannot match:

- **perspective-aware**: Each card transitions through realistic 3D space
- **blur-on-entrance**: Cards start blurred and sharpen as they approach — mimicking camera focus
- **independent timelines**: Each card uses its own `view()` timeline, meaning cards animate as they individually scroll into view
- **no JS needed**: The browser's compositor thread handles all 3D transforms at 60fps

## Browser Support

- **Chrome 115+**: Full support
- **Edge 115+**: Full support
- **Safari 16+**: 3D transforms; scroll-driven animations in Safari 18+
- **Firefox**: 3D transforms supported; scroll-driven animations pending

## Modern CSS APIs Used

- `animation-timeline: view()`
- `animation-range`
- `@property`
- CSS 3D transforms (`perspective`, `rotateX`, `rotateY`, `translateZ`, `scale`, `filter: blur`)
- `transform-style: preserve-3d`
- `prefers-reduced-motion`
- `forced-colors: active`
- `@media print`
