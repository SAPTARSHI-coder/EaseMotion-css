# EaseMotion — Container Query Animation Breakpoints

Animate based on **container** size, not viewport. Build truly reusable components that adapt to their parent.

## The Problem

Media queries respond to the viewport, but components in a sidebar vs. a main area need different animations based on their *container* size.

## The Solution

CSS Container Queries (`@container`) let components query their own container's inline size and apply different animations.

## Demo

Three static cards show animations at narrow, medium, and wide container sizes. An interactive resize demo lets you drag to see the animation change in real time.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Static 3-card grid + interactive drag-to-resize demo |
| `style.css` | Container query rules, animation classes, resize handle |

## Proposed Utilities

In `core/utilities.css`:

```css
.ease-container {
  container-type: inline-size;
  container-name: ease;
}

@container ease (max-width: 480px) {
  .ease-container-sm\:fade-in { animation: ease-kf-fade-in 0.4s ease both; }
}

@container ease (min-width: 481px) and (max-width: 768px) {
  .ease-container-md\:slide-up { animation: ease-kf-slide-up 0.4s ease both; }
}

@container ease (min-width: 769px) {
  .ease-container-lg\:scale-in { animation: ease-kf-zoom-in 0.4s ease both; }
}
```

## Usage

```html
<div class="ease-container">
  <div class="ease-container-sm:fade-in
              ease-container-md:slide-up
              ease-container-lg:scale-in">
    Animates based on container width
  </div>
</div>
```

## Viewport Fallback

```css
@supports not (container-type: inline-size) {
  @media (max-width: 480px) { ... }
  @media (min-width: 481px) { ... }
}
```

## Browser Support

| Chrome | Firefox | Safari |
|--------|---------|--------|
| 105+ | 110+ | 16.0+ |
