# .ease-skeleton Shimmer Loading Placeholder

Adds a skeleton/shimmer loading placeholder component for displaying content loading states.

## Problem

When content is loading (API calls, image loads, lazy data), users see either a blank flash or a spinner — neither provides a layout preview. A skeleton component that mirrors the final content shape would improve perceived performance and reduce Cumulative Layout Shift.

## Proposed CSS to Add to `components/skeleton.css`

```css
@keyframes ease-kf-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.ease-skeleton {
  background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
  background-size: 200% 100%;
  animation: ease-kf-shimmer 1.5s ease-in-out infinite;
  border-radius: var(--ease-radius-md, 0.5rem);
  min-height: 1rem;
}

.ease-skeleton-text { height: 0.8em; margin-bottom: 0.5rem; width: 100%; }
.ease-skeleton-circle { border-radius: 50%; aspect-ratio: 1; }
.ease-skeleton-sm { height: 0.75rem; }
.ease-skeleton-lg { height: 2rem; }
```

## Usage

```html
<div class="ease-card ease-padding-4">
  <div class="ease-flex ease-gap-3 ease-items-center">
    <div class="ease-skeleton ease-skeleton-circle" style="width:40px;"></div>
    <div style="flex:1;">
      <div class="ease-skeleton ease-skeleton-text ease-skeleton-sm"></div>
      <div class="ease-skeleton ease-skeleton-text" style="width:60%;"></div>
    </div>
  </div>
  <div class="ease-skeleton" style="height:150px;margin-top:1rem;"></div>
</div>
```

## Files
- `README.md` — this file
- `demo.html` — demo page
- `style.css` — skeleton component CSS
